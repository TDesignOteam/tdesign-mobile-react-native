const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const rootDir = path.resolve(__dirname, '../../');
const examplePath = path.resolve(rootDir, './example');
const sitePath = path.resolve(rootDir, './site');

const isSkip = process.argv.slice(2)?.[0] === '--skip-move';

function main() {
  // 清除public内example文件夹
  if (fs.existsSync(`${sitePath}/public/example`)) {
    fs.rmSync(`${sitePath}/public/example`, { recursive: true });
  }

  // 构建example dist
  execSync('npm run build:web', { cwd: examplePath, stdio: 'inherit' });

  // 移动dist到 site public下
  fs.cpSync(`${examplePath}/dist`, `${sitePath}/public/example`, { recursive: true });
}

if (!isSkip) {
  main();
}
