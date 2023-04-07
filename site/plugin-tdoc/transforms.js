/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
import path from 'path';
import fs from 'fs';

import mdToReact from './md-to-react';

export default {
  before(props) {
    let { source, file } = props;
    const resouceDir = path.dirname(file);
    const reg = file.match(/src\/components\/([\w-]+)\/([\w-]+)\.md/);
    const name = reg && reg[1];

    // 把rn plugin结构 解析为tdoc需要结构，主要添加了两个标签：<code>直接声明的内容 <import>引用的内容，添加到md文件的最上面

    // 统一换成 rn plugin解析后的md文件
    if (name && source.includes(':: BASE_DOC ::')) {
      const docPath = path.resolve(__dirname, `../../src/components/${name}/_example/index.md`);
      if (fs.existsSync(docPath)) {
        const baseDoc = fs.readFileSync(docPath, 'utf-8');
        source = source.replace(':: BASE_DOC ::', baseDoc);
      } else {
        console.error(`未找到 ${docPath} 文件`);
      }
    }

    // 替换成对应 demo 文件
    // source = source.replace(/\{\{\s+(.+)\s+\}\}/g, (demoStr, demoFileName) => {
    //   const demoPath = path.resolve(resouceDir, `./_example/${demoFileName}.tsx`);
    //   if (!fs.existsSync(demoPath)) {
    //     console.log('\x1B[36m%s\x1B[0m', `${name} 组件需要实现 _example/${demoFileName}.jsx 示例!`);
    //     return '\n<h3>DEMO (🚧建设中）...</h3>';
    //   }

    //   return `\n::: demo _example/${demoFileName} ${name}\n:::\n`;
    // });

    // source.replace(/:::\s*demo\s+([\\/.\w-]+)/g, (demoStr, relativeDemoPath) => {
    //   const demoPathOnlyLetters = relativeDemoPath.replace(/[^a-zA-Z\d]/g, '');
    //   const demoCodeDefName = `Demo${demoPathOnlyLetters}Code`;
    //   demoCodesImports[demoCodeDefName] = `import ${demoCodeDefName} from './${relativeDemoPath}?raw';`;
    // });

    return source;
  },
  render({ source, file, md }) {
    const sfc = mdToReact({
      md,
      file,
      source,
    });

    return sfc;
  },
};
