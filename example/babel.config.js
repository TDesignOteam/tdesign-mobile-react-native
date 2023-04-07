const alias = require('./scripts/alias');

module.exports = {
  presets: ['@babel/preset-typescript', 'module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.ios.js', '.android.js', '.js', '.json', '.ts', '.tsx'],
        alias: {
          ...alias,
        },
      },
    ],
    ['react-native-reanimated/plugin'],
    ['@babel/plugin-transform-flow-strip-types'],
    [
      '@babel/plugin-transform-react-jsx',
      {
        runtime: 'automatic',
      },
    ],
    ['@babel/plugin-proposal-private-methods', { loose: true }],
  ],
};
