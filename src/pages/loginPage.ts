import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";
import { Locator } from "playwright";
import {Assert} from "../helper/wrapper/assert"
import { fixture } from "../hooks/pageFixture";


export default class LoginPage {
    private base: PlaywrightWrapper
    loginHeader: Locator
    assert: Assert
    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
        this.page = page;
        this.assert = new Assert(page)
       
    }

    private Elements = {
        loginHeader: "//h1",
        passwordInput: "Password",
        loginBtn: "button[color='primary']",
        errorMessage: "alert"
    }

    
    public checkPageDisplayed = async () => {
} 
public clickOperation = async (buttonName: string): Promise<void> => {
  switch (buttonName.toUpperCase()) {
    default:
      throw new Error(`Click operation for "${buttonName}" is not coded.`);
  }
};
public validateCopyText = async (
  sectionName: string
): Promise<void> => {
    this.page.waitForTimeout(8000)
  switch (sectionName.toUpperCase()) {
    case "LOGINHEADER" :
        await this.assert.validateElementText(
        fixture.page.locator(this.Elements.loginHeader),
        fixture.translations.loginButton
      );
      fixture.logger.info("✅ Login header text validated.");
      break;
    default:
      throw new Error(`Validate copy text for "${sectionName}" is not coded.`);
  }
};


}