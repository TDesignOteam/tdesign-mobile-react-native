### 启动项目

在项目根目录中运行`npm i`安装代码需要对应依赖，再进入对应 package 运行项目

### 目录结构

.
├── CHANGELOG.md          
├── DEVELOP_GUIDE.md
├── README.md
├── babel.config.js
├── example               // demo运行目录
├── jest-setup.js
├── jest.config.js
├── node_modules
├── package-lock.json
├── package.json
├── scripts
├── site                  // 文档站点目录
├── src                   // 组件库源码
├── tsconfig.json
└── tsconfig.test.json

### 运行命令



### 提交规范: type(scope): subject

type-
feat：新功能（feature）
fix：修补 bug
docs：文档（documentation）
style： 格式（不影响代码运行的变动）
refactor：重构（即不是新增功能，也不是修改 bug 的代码变动）
perf：性能 代码变更提高性能
test：增加测试
chore：构建过程或辅助工具的变动

scope-修改了哪个模块
subject-描述

例如:

1. feat(button): 修改文案
2. fix: fixbug
3. refactor: 调整代码结构

### 文档地址
