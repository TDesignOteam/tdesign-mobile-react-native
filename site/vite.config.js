import path from 'path';

import { defineConfig } from 'vite';
import replace from '@rollup/plugin-replace';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import glob from 'glob';
import tdocPlugin from './plugin-tdoc';
import pwaConfig from './pwaConfig';
import rn2MdPlugin from './plugin-rn-to-md';

const publicPathMap = {
  preview: '/',
  intranet: '/react-native/',
  production: 'https://static.tdesign.tencent.com/react-native/',
};
const exampleFiles = glob.sync('**/_example/index.tsx', { absolute: true, cwd: path.resolve(__dirname, '../src') });

export default ({ mode }) =>
  defineConfig({
    base: publicPathMap[mode],
    define: {
      __VERSION__: JSON.stringify(process.env.npm_package_version),
      JEST_WORKER_ID: null,
      process: { env: {} },
    },
    resolve: {
      extensions: ['.web.tsx', '.web.jsx', '.web.js', '.tsx', '.ts', '.js', '.jsx'],
      alias: {
        '@': path.resolve(__dirname, '../'),
        '@doc': path.resolve(__dirname, './doc'),
        '@components': path.resolve(__dirname, '../src/components'),
        '@common': path.resolve(__dirname, '../src/_common'),
        '@example': path.resolve(__dirname, '../example/src'),
        'tdesign-react-native': path.resolve(__dirname, '../src'),
        'react-native': path.resolve(__dirname, './node_modules/react-native-web'),
      },
    },
    optimizeDeps: {
      esbuildOptions: {
        loader: { '.js': 'jsx' },
        resolveExtensions: ['.web.tsx', '.web.jsx', '.web.js', '.tsx', '.ts', '.js'],
      },
      exclude: exampleFiles,
    },
    build: {
      outDir: '../_site',
      rollupOptions: {
        input: {
          site: 'index.html',
          example: path.resolve(__dirname, 'public/example/index.html'),
        },
      },
      commonjsOptions: {
        transformMixedEsModules: true,
      },
    },
    esbuild: {
      exclude: exampleFiles,
    },
    jsx: 'react',
    server: {
      host: '0.0.0.0',
      port: 19000,
      open: '/',
      https: false,
      fs: { strict: false },
    },
    plugins: [
      rn2MdPlugin({
        // 处理的文件
        include: exampleFiles,
        // 转换的tag及对应的md tag
        tagToMd: {
          H3: '###',
          H4: '####',
          H5: '#####',
          P: '',
        },
      }),
      tdocPlugin(),
      react({
        exclude: [/\/_example\/.*\.tsx$/],
      }),
      VitePWA(pwaConfig),
      replace({ __DATE__: new Date().toISOString() }),
    ],
  });
