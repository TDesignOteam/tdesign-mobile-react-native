const path = require('path');
const {
  compilerOptions: { paths },
} = require('../tsconfig.json');

const prefixes = Object.keys(paths);
const exampleDir = path.resolve(__dirname, '../');
const rootDir = path.resolve(exampleDir, '../');
const alias = {
  react: path.resolve(rootDir, 'node_modules/react'),
  'react-dom': path.resolve(rootDir, 'node_modules/react-dom'),
  'react-native': path.resolve(exampleDir, 'node_modules/react-native'),
  'react-native-reanimated': path.resolve(rootDir, 'node_modules/react-native-reanimated'),
  'hoist-non-react-statics': path.resolve(rootDir, 'node_modules/hoist-non-react-statics'),
  'tdesign-icons-react-native': path.resolve(rootDir, '../tdesign-icons/packages/react-native'),
};
prefixes.forEach((prefix) => {
  const values = paths[prefix];
  const fix = prefix.split('/*')[0];

  const dirs = values.map((value) => {
    const tar = value.split('/*')[0];
    const dir = path.resolve(__dirname, '../', tar);
    return dir;
  });
  // eslint-disable-next-line prefer-destructuring
  alias[fix] = dirs[0];
});

module.exports = alias;
