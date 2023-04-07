#!/usr/bin/env node

const { execSync } = require('child_process');
const chalk = require('chalk');

try {
  execSync('npm run check', { encoding: 'utf-8', stdio: 'inherit' });
} catch (err) {
  console.log(chalk.red(`push error：\n${err.toString()}`));
  process.exit(1);
}
