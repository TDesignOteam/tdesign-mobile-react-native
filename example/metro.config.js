/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
const path = require('path');

module.exports = {
  resolver: {
    platforms: ['ios', 'android'],
    // extraNodeModules: new Proxy(
    //   {},
    //   {
    //     get: (target, name) => {
    //       // if (name.indexOf('@src') !== -1) {
    //       //   const _path = name.replace('@src', '');
    //       console.log('path---->>', name, path.join(process.cwd(), `node_modules/${name}`));
    //       //   return path.join(process.cwd(), `../src/${_path}`);
    //       // }
    //       return path.join(process.cwd(), `node_modules/${name}`);
    //     },
    //   },
    // ),
  },
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
  watchFolders: [path.resolve(__dirname, '..')],
};
