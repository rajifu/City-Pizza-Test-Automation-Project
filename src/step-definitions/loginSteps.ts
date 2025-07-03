import { Given, When, Then } from "@cucumber/cucumber";

Given(
  "I navigate to the City-Pizza Home page",
  { timeout: 80000 },
  async function (this: CustomWorld) {
    console.log("step started");
    await this.loginPage.launchApplication();
    console.log("step completed");
  }
);
