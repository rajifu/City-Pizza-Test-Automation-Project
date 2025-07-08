import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";

import { expect } from "@playwright/test";
import { fixture } from "../../hooks/pageFixture";
import LoginPage from "../../pages/LoginPage";

setDefaultTimeout(60 * 1000 * 2)

Given('User navigates to the application', async function () {
    await fixture.page.goto(process.env.BASEURL);
    fixture.logger.info("Navigated to the application")
})

Given(
  "I navigate to the City-Pizza Home page",
  { timeout: 80000 },
  async function () {
    console.log("step started");

     await fixture.page.goto(process.env.BASEURL);
    console.log("step completed");
    console.log(`✅ Active language: ${fixture.language}`);
    console.log(`Login button text: ${fixture.translations.loginButton}`);
        fixture.logger.info("Navigated to the application")

  })
  Given(
  'User validate copy text {string} on {string}',
  async function (sectionName: string, pageName: string) {
    switch (pageName.toUpperCase()) {
      case "LOGIN PAGE":
        const loginPage = new LoginPage(fixture.page);
        await loginPage.validateCopyText(sectionName);
        break;

      default:
        throw new Error(`Page "${pageName}" not implemented in step.`);
    }
  }
);

Given('User click on the login link', async function () {
    await fixture.page.locator("//span[text()='Login']").click();
});

Given('User enter the username as {string}', async function (username) {
    await fixture.page.locator("input[formcontrolname='username']").type(username);
});

Given('User enter the password as {string}', async function (password) {
    await fixture.page.locator("input[formcontrolname='password']").type(password);
})

When('User click on the login button', async function () {
    await fixture.page.locator("button[color='primary']").click();
    await fixture.page.waitForLoadState();
    fixture.logger.info("Waiting for 2 seconds")
    await fixture.page.waitForTimeout(2000);
});


Then('Login should be success', async function () {
    const user = fixture.page.locator("//button[contains(@class,'mat-focus-indicator mat-menu-trigger')]//span[1]");
    await expect(user).toBeVisible();
    const userName = await user.textContent();
    console.log("Username: " + userName);
    fixture.logger.info("Username: " + userName);
})

When('Login should fail', async function () {
    const failureMesssage = fixture.page.locator("mat-error[role='alert']");
    await expect(failureMesssage).toBeVisible();
});
