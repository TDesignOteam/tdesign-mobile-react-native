/*
 * @Author: yatessss
 * @Date: 2023-03-17 11:20:59
 * @LastEditors: yatessss
 * @LastEditTime: 2023-06-09 16:47:48
 * @Description: 解析tsx文件 生成对应plugin需要的md格式文件
 */

import path from 'path';
import fs from 'fs';

const parser = require('@babel/parser');
const generator = require('@babel/generator').default;
const prettier = require('prettier');

const t = require('@babel/types');
const traverse = require('@babel/traverse').default;
const prettierRc = require('../../.prettierrc.js');

let tagToMd = {};
let allowedTag = ['Section', 'CodeSpace'];

function generateUUID() {
  let d = new Date().getTime();
  const uuid = 'xxxx-xxxx-4xxx-yxxx'.replace(/[xy]/g, function (c) {
    const r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
  });
  return uuid;
}

function rn2MdPlugin(userOptions = {}) {
  const { include, tagToMd: _tagToMd } = userOptions;
  tagToMd = _tagToMd;
  allowedTag = [...allowedTag, ...(Object.keys(_tagToMd) || [])];
  return {
    name: 'vite-plugin-rn-to-md',
    enforce: 'pre',
    include,
    buildStart() {
      // 根据example文件创建md文件
      include.forEach((_filePath) => {
        const path = _filePath.replace(/\.tsx$/, '.md');
        const mdContent = genMd(_filePath);
        fs.writeFileSync(path, mdContent, { encoding: 'utf-8' });
      });
    },
    buildEnd() {
      include.forEach((_filePath) => {
        const path = _filePath.replace(/\.tsx$/, '.md');
        fs.rmSync(path);
      });
    },
  };
}

export const codeMap = {};

const astSaveMap = {};

const outputCode = (node) => {
  let output = generator(node, {
    compact: true,
    minified: true,
  })?.code;
  if (t.isBlockStatement(node)) {
    output = output?.replace(/(^\{\s*)|(\s*\}$)/g, '');
  }

  const formattedCode = prettier.format(output, {
    ...prettierRc,
  });
  return formattedCode;
};

// 根据导入的变量名从导入文件获取对应code
function getCodeFromOtherFile(_path, variableName, exportType) {
  const isDir = fs.existsSync(_path);
  const exts = ['.tsx', '.ts'];

  let resultCode;
  let actualVarName = variableName;
  for (const ext of exts) {
    const path = `${_path}${isDir ? '/index' : ''}${ext}`;

    const isExist = fs.existsSync(path);
    if (!isExist) {
      continue;
    }

    let ast = astSaveMap?.[path];
    if (!ast) {
      const code = fs.readFileSync(path, 'utf8');

      ast = parser.parse(code, {
        sourceType: 'module',
        plugins: ['jsx', 'typescript'],
      });
      astSaveMap[path] = ast;
    }

    // 如果导入是默认导入，需要找到文件中真是的变量名
    if (exportType === 'default') {
      traverse(ast, {
        enter(nodePath) {
          if (t.isExportDefaultDeclaration(nodePath)) {
            actualVarName = nodePath.node.declaration.name;
          }
        },
      });
    }

    traverse(ast, {
      enter(nodePath) {
        if (t.isVariableDeclarator(nodePath) && nodePath.node.id.name === actualVarName) {
          resultCode = outputCode(nodePath?.parent);
        }

        if (t.isFunctionDeclaration(nodePath) && nodePath?.node?.id?.name === actualVarName) {
          resultCode = outputCode(nodePath.node);
        }
      },
    });
  }
  return resultCode;
}

function genMd(mdPath) {
  const componentName = mdPath?.match(/src\/components\/([\w-]+)\/_example\/index/)?.[1] || '';
  // 文件内声明变量和函数的列表
  codeMap[componentName] = new Map();
  const variableCode = codeMap[componentName];
  const code = fs.readFileSync(mdPath, 'utf8');
  const ast = parser.parse(code, {
    sourceType: 'module',
    plugins: ['jsx', 'typescript'],
  });

  // 概览储存变量
  const summary = new Map();
  // 文档每个section的内容
  const sections = [];
  // 文件内导入方法的列表
  const importMap = new Map();
  // 默认导入的路径

  let sectionIndex = -1;

  // 先过滤一次拿到所有声明
  traverse(ast, {
    enter(nodePath) {
      if (t.isJSXElement(nodePath)) {
        const { openingElement } = nodePath.node;
        const tagName = openingElement?.name?.name;
        if (!allowedTag.includes(tagName)) {
          nodePath.skip();
        }
      }

      if (t.isImportDefaultSpecifier(nodePath) || t.isImportSpecifier(nodePath)) {
        const importPath = nodePath.parent.source.value;
        const name = nodePath?.node?.local?.name || '';
        if (name && importPath && !/(react|tdsign)/i.test(importPath)) {
          importMap.set(name, {
            type: t.isImportDefaultSpecifier(nodePath) ? 'default' : 'module',
            path: importPath,
            cwd: path.parse(mdPath)?.dir,
          });
        }
      }

      if (t.isFunctionDeclaration(nodePath)) {
        const name = nodePath?.node?.id?.name;
        if (name) {
          const code = outputCode(nodePath.node);
          variableCode.set(name, code);
        }
      }

      if (t.isVariableDeclarator(nodePath)) {
        const name = nodePath?.node?.id?.name;
        if (name) {
          const code = outputCode(nodePath?.parent);
          variableCode.set(name, code);
        }
      }
    },
  });

  traverse(ast, {
    Program(path) {
      // 获取概要
      if (path?.container?.comments?.length > 0) {
        path?.container?.comments?.forEach((comment) => {
          if (comment?.value?.includes('isComponent') && comment?.value?.includes('toc')) {
            ['title', 'description', 'spline', 'isComponent', 'toc'].forEach((key) => {
              const reg = new RegExp(`(?<=${key}:).+(?=\n)`);
              const result = comment?.value?.match(reg);
              if (result?.[0]) {
                summary.set(key, result?.[0]?.trim());
              }
            });
          }
        });
      }
    },
    enter(nodePath) {
      if (t.isJSXElement(nodePath)) {
        const { openingElement } = nodePath.node;
        const tagName = openingElement?.name?.name;
        if (!allowedTag.includes(tagName)) {
          nodePath.skip();
        }
        if (tagName === 'Section') {
          sectionIndex += 1;
        }

        if (Object.keys(tagToMd).includes(tagName)) {
          if (!sections[sectionIndex]) {
            sections[sectionIndex] = '';
          }
          const reg = new RegExp(`(?<=<${tagName}>)[\\s\\S]*(?=</${tagName}>)`);
          const output = generator(nodePath.node, {});
          sections[sectionIndex] += `${tagToMd[tagName] ? `${tagToMd[tagName]} ` : ''}${output.code
            ?.match(reg)?.[0]
            ?.trim()}\n\n`;
        }

        if (['CodeSpace', 'CodeSpaceOnlyDoc'].includes(tagName)) {
          nodePath.node?.children?.forEach((child) => {
            if (t.isJSXElement(child)) {
              const tag = child.openingElement?.name?.name || '';
              // 如果是变量或函数
              if (variableCode.has(tag)) {
                sections[sectionIndex] += `::: demo ${componentName} ${tag}\n:::\n`;
                return;
              }

              // 如果是import文件
              if (importMap.has(tag)) {
                const importValue = importMap.get(tag);
                const _path = path.resolve(importValue.cwd, importValue.path);
                // 根据导入的变量从改文件中解析出对应code
                const code = getCodeFromOtherFile(_path, tag, importValue.type);
                variableCode.set(tag, code);
                sections[sectionIndex] += `::: demo ${componentName} ${tag}\n:::\n`;
                return;
              }

              // 都不是 就是单纯的jsx结构
              const code = outputCode(child);
              const uid = generateUUID();
              variableCode.set(uid, code.replace(/;\s*$/, ''));
              sections[sectionIndex] += `::: demo ${componentName} ${uid}\n:::\n`;
            }
          });
        }
      }
    },
  });

  let mdString = '---\n';
  summary.forEach((value, key) => {
    mdString = `${mdString}${key}: ${value}\n`;
  });
  mdString += '---\n\n';
  sections.forEach((section) => {
    mdString += `${section}\n`;
  });
  return `${mdString}`;
}

export default rn2MdPlugin;
