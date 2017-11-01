/* eslint no-console: 0, import/no-extraneous-dependencies: 0 */
const chalk = require('chalk');
const globalModules = require('global-modules');
const fs = require('fs');

const S3_QA = 's3://smu-artifacts/feedback-admin/qa/';

function printHostingInstructions(appPackage, publicUrl, publicPath, buildFolder, useYarn) {
  console.log('====================================');
  console.log(`The ${chalk.cyan(buildFolder)} folder is ready to be deployed.`);
  console.log(`You can deploy to ${chalk.cyan('QA enviorement')} copying the build directory to ${chalk.blue(S3_QA)}`);
  console.log('====================================');
  console.log();
  console.log('You may serve it with a static server:');
  console.log();
  if (!fs.existsSync(`${globalModules}/serve`)) {
    if (useYarn) {
      console.log(`  ${chalk.cyan('yarn')} global add serve`);
    } else {
      console.log(`  ${chalk.cyan('npm')} install -g serve`);
    }
  }
  console.log(`  ${chalk.cyan('serve')} -s ${buildFolder}`);
  console.log();
}

module.exports = printHostingInstructions;
