import { expect, Locator, Page } from "@playwright/test";

export class Assert {

    constructor(private page: Page) { }

    async assertTitle(title: string) {
        await expect(this.page).toHaveTitle(title);
    }

    async assertTitleContains(title: string) {
        const pageTitle = await this.page.title();
        expect(pageTitle).toContain(title);
    }

    async assertURL(url: string) {
        await expect(this.page).toHaveURL(url);
    }

    async assertURLContains(title: string) {
        const pageURL = this.page.url();
        expect(pageURL).toContain(title);
    }
  async validateElementText(
  element: Locator,
  expectedText: string
): Promise<void> {
  const actual = (await element.textContent())?.trim();
  const expected = expectedText.trim();

  if (actual === expected) {
    console.log(`✅ Text matches: "${actual}"`);
  } else {
    throw new Error(`❌ Text mismatch.\nExpected: "${expected}"\nActual: "${actual}"`);
  }
}

}