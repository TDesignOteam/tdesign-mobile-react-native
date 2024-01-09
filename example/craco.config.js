/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-multi-assign */

const path = require('path');
const fs = require('fs');
const {
  addBeforeLoader,
  addBeforeLoaders,
  getLoaders,
  // getLoader,
  loaderByName,
  // when,
  whenDev,
  whenProd,
  // whenTest,
  // ESLINT_MODES,
  // POSTCSS_MODES,
  // addAfterLoader,
  // removeLoaders,
} = require('@craco/craco');
const alias = require('./scripts/alias');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);
const entryFile = process.env.ENTRY || 'index.web.js';

module.exports = {
  babel: {
    presets: [
      '@babel/preset-typescript',
      ['module:metro-react-native-babel-preset', { useTransformReactJSXExperimental: true }],
    ],
    plugins: [
      // https://necolas.github.io/react-native-web/docs/setup/#package-optimization
      ['react-native-web'],
      ['react-native-reanimated/plugin'],
      ['@babel/plugin-transform-flow-strip-types', { allowDeclareFields: true }],
      [
        // Enable new JSX Transform from React
        '@babel/plugin-transform-react-jsx',
        { runtime: 'automatic' },
      ],
      ['@babel/plugin-proposal-private-methods', { loose: true }],
      ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
    ],
    loaderOptions: {
      // exclude: /@babel(?:\/|\\{1,2})runtime|core-js/,
    },
  },
  webpack: {
    alias: {
      ...alias,
    },
    resolve: {
      // 这里的扩展定义并不起作用
      extensions: ['.web.ts', '.web.tsx', '.ts', '.tsx', '.web.js', '.web.jsx', '.js', '.jsx'],
    },
    // plugins: {
    //   add: [] /* An array of plugins */,
    //   remove: [] /* An array of plugin constructor's names (i.e. "StyleLintPlugin", "ESLintWebpackPlugin" ) */,
    // },
    configure: (webpackConfig, { env, paths }) => {
      const imageLoader = {
        test: /\.(gif|jpe?g|png|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: '[name].[ext]',
            esModule: false,
          },
        },
      };

      addBeforeLoader(webpackConfig, loaderByName('url-loader'), imageLoader);

      // 修改cra路径
      whenDev(() => {
        paths.appIndexJs = webpackConfig.entry = path.resolve(__dirname, entryFile);
        paths.appHtml = path.resolve(__dirname, 'web/public/index.html');
      });

      whenProd(() => {
        paths.appIndexJs = webpackConfig.entry = path.resolve(__dirname, entryFile);
        paths.appHtml = path.resolve(__dirname, 'web/public/index.html');
        paths.appPublic = path.resolve(__dirname, 'web/public');
        paths.appBuild = webpackConfig.output.path = path.resolve(__dirname, 'dist');
        webpackConfig.output.publicPath = './';
      });

      // dev时候把eslint等级降低
      whenDev(() => {
        const pluginIndex = webpackConfig.plugins.findIndex(
          ({ constructor }) => constructor && constructor.name === 'ESLintWebpackPlugin',
        );
        webpackConfig.plugins[pluginIndex].options.failOnError = false;
      });

      // 修改env & fix 缺少DEV环境变量
      const definePluginIndex = webpackConfig.plugins.findIndex(
        ({ constructor }) => constructor && constructor.name === 'DefinePlugin',
      );
      webpackConfig.plugins[definePluginIndex].definitions = {
        'process.env': {},
        __DEV__: process.env.NODE_ENV === 'development',
      };

      // 修改插件html路径
      const htmlWebpackPluginIndex = webpackConfig.plugins.findIndex(
        ({ constructor }) => constructor && constructor.name === 'HtmlWebpackPlugin',
      );
      webpackConfig.plugins[htmlWebpackPluginIndex].userOptions.template = paths.appHtml;

      // 去掉禁止引用外部模块
      const scopePluginIndex = webpackConfig.resolve.plugins.findIndex(
        ({ constructor }) => constructor && constructor.name === 'ModuleScopePlugin',
      );
      webpackConfig.resolve.plugins.splice(scopePluginIndex, 1);

      // 为了可以解析src目录外的文件 添加一个loader
      const { matches } = getLoaders(webpackConfig, loaderByName('babel-loader'));
      addBeforeLoaders(webpackConfig, loaderByName('babel-loader'), {
        ...matches[0].loader,
        include: [matches[0].loader.include, resolveApp('./'), resolveApp('../src')],
        exclude: /@babel(?:\/|\\{1,2})runtime/,
      });

      //   // 默认extensions: ['.web.mjs', '.mjs', '.web.js', '.js', '.web.ts', '.ts', '.web.tsx', '.tsx', '.json', '.web.jsx', '.jsx']
      //   // 当打包环境变量包括ROUTER_EXTENSION，使用ROUTER_EXTENSION定义的结尾的路由配置
      //   if (process.env.ROUTER_EXTENSION) {
      //     webpackConfig.resolve.extensions.unshift(`.${process.env.ROUTER_EXTENSION}.tsx`);
      //   }

      function getFileLoaderRule(rules) {
        for (const rule of rules) {
          if ('oneOf' in rule) {
            const found = getFileLoaderRule(rule.oneOf);
            if (found) {
              return found;
            }
          } else if (rule.test === undefined && rule.type === 'asset/resource') {
            return rule;
          }
        }
      }
      // cjs单独输出 为了解决react navigation 使用nanoid模块导出问题
      const fileLoaderRule = getFileLoaderRule(webpackConfig.module.rules);
      if (!fileLoaderRule) {
        throw new Error('File loader not found');
      }
      fileLoaderRule.exclude.push(/\.cjs$/);

      return webpackConfig;
    },
  },
  devServer: (devServerConfig, { env, paths, proxy, allowedHost }) => {
    const { PORT, PROXY_API } = process.env;

    return {
      ...devServerConfig,
      port: PORT,
      proxy: {
        '/api/*': {
          target: PROXY_API,
          changeOrigin: true,
          secure: false,
        },
      },
    };
  },

  plugins: [
    {
      plugin: {
        overrideWebpackConfig: ({ webpackConfig, cracoConfig, pluginOptions, context: { env, paths } }) => {
          const eslintWebpackPluginInstance = webpackConfig.plugins.find((i) => i.key === 'ESLintWebpackPlugin');
          eslintWebpackPluginInstance.options.failOnError = false;

          whenProd(() => {
            webpackConfig.output.publicPath = './';
          });

          return webpackConfig;
        },
      },
    },
  ],
};
