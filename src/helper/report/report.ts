const report = require("multiple-cucumber-html-reporter");
import * as os from "os";

const machineName = os.hostname();
const platformName = os.platform();
const platformVersion = os.release();
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
      { label: "Execution Start Time", value: new Date().toLocaleString() },
      { label: "Execution End Time", value: new Date().toLocaleString() },
    ],
  },
});
