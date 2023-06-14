// react native在import时路径不能使用字符串拼接形式，用脚本生成一份router配置
const prettier = require('prettier');
const fs = require('fs');
const path = require('path');
const prettierRc = require('../../.prettierrc.js');
const componentConfig = require('../src/config.json');

console.log('正在生成路由文件...');
const keys = [];
componentConfig.forEach((config) => {
  config?.children?.forEach((child) => {
    keys.push(child.key);
  });
});

const code = `import { lazy, LazyExoticComponent } from 'react';

const componentsMap: Record<string, LazyExoticComponent<() => JSX.Element>> = {
  ${keys.map((key) => `${key}: lazy(() => import('@src/components/${key}/_example/index'))`)}
}
export default componentsMap
`;
const formattedCode = prettier.format(code, {
  ...prettierRc,
  parser: 'babel',
});

fs.writeFileSync(path.resolve(__dirname, '../src/componentList.ts'), formattedCode, { encoding: 'utf-8' });
console.log('已生成路由文件👏🏻');
