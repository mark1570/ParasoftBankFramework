import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class AccountsOverviewPage extends BasePage {
  private heading = this.page.getByRole('heading', { name: 'Accounts Overview' });

  constructor(page: Page) {
    super(page);
  }

  async verifyLoaded() {
    await expect(this.heading).toBeVisible();
  }

  async logout() {
    await this.clickMenu('Log Out');
  }
}