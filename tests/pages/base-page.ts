import { expect, Locator, Page } from '@playwright/test'

export class BasePage {
  readonly page: Page
  readonly footer: Locator
  readonly langBtnRu: Locator
  readonly langBtnEng: Locator
  readonly navFooter: Locator

  constructor(page: Page) {
    this.page = page
    this.footer = page.locator('.Footer')
    this.langBtnRu = this.footer.locator('.language__button').nth(1)
    this.langBtnEng = this.footer.locator('.language__button').nth(0)
    this.navFooter = this.footer.locator('.navigate-wrapper')
  }
  async checkFooterComponents(): Promise<void> {
    await expect(this.navFooter).toBeVisible()
    await expect(this.langBtnRu).toBeVisible()
    await expect(this.langBtnEng).toBeVisible()
  }
}
