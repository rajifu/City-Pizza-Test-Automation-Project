const report = require("multiple-cucumber-html-reporter");
import * as os from "os";

const machineName = os.hostname();
const platformName = os.platform();
const platformVersion = os.release();
const { execSync } = require('child_process');
const timestamp = new Date().toLocaleString();
let branchName = 'unknown';
try {
  branchName = execSync('git rev-parse --abbrev-ref HEAD').toString().trim();
  console.log(`🚀 [${timestamp}] Collected Git branch name successfully: ${branchName}`);
} catch (error) {
  console.error('❌ Failed to get Git branch name:', error.message);
}
report.generate({
  jsonDir: "test-results",
  reportPath: "test-results/reports/",
  reportName: "Playwright Automation Report",
  pageTitle: "CITY PIZZA App test report",
  displayDuration: false,
  metadata: {
    browser: {
      name: "chromium",
      version: "124",
    },
    device: machineName,
    platform: {
      name: platformName,
      version: platformVersion,
    },
  },
  customData: {
    title: "Test Info",
    data: [
      { label: "Project", value: "CITY PIZZA Application" },
      { label: "Release", value: "1.2.3" },
      { label: "Cycle", value: "Smoke-1" },
      { label: "Machine Name", value: machineName },
      { label: "Platform", value: platformName },
      { label: 'Branch', value: branchName },
        { label: 'Execution Time', value: new Date().toLocaleString() },
        { label: 'Executed by', value: process.env.USER || process.env.USERNAME },
      { label: "Execution Start Time", value: new Date().toLocaleString() },
      { label: "Execution End Time", value: new Date().toLocaleString() },
    ],
  },
});
