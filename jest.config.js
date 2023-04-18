const { defaults } = require('ts-jest/presets');

module.exports = {
  // ts的preset
  ...defaults,
  // 自动清除 Mock
  clearMocks: true,

  // 开启覆盖率
  collectCoverage: true,

  // 指定生成覆盖率报告文件存放位置
  coverageDirectory: 'coverage',

  // 不用管
  coverageProvider: 'v8',

  // Jest 配置基础的预设
  preset: 'react-native',

  // 模块使用的文件扩展名数组
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],

  // 检测测试文件的模式(tests 目录下的 tsx 或 jsx 文件)
  testRegex: '(src/components/.*\\.(test|spec))\\.[tj]sx?$',

  // 匹配的路径下文件将跳过覆盖率信息
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '\\.snap$'],

  // 定义文件的编译方式
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        babelConfig: true,
        // tsconfig适配node modules下的一些文件
        tsconfig: './tsconfig.test.json',
      },
    ],
  },

  // 定义了忽略进行 jest 执行的依赖包
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|@testing-library|react-navigation|@react-navigation/.*|@react-native-community|react-native-reanimated)/)',
  ],

  // react-native-reanimated运行时需要一些配置
  setupFilesAfterEnv: ['./jest-setup.js'],

  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!**/node_modules/**', '!**/vendor/**', '!**/src/_common/**'],
};
