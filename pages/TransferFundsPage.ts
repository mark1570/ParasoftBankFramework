import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class TransferFundsPage extends BasePage {
  private amountInput = this.page.locator('#amount');
  private transferButton = this.page.getByRole('button', { name: 'Transfer' });

  constructor(page: Page) {
    super(page);
  }

  async open() {
    await this.clickMenu('Transfer Funds');
  }

  async transfer(amount: string) {
    await this.amountInput.fill(amount);
    await this.transferButton.click();
  }

  async verifyTransferComplete() {
    await expect(this.page.getByText('Transfer Complete!')).toBeVisible();
  }
}