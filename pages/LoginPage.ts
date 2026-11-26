import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  private usernameInput = this.page.locator('input[name="username"]');
  private passwordInput = this.page.locator('input[name="password"]');
  private loginButton = this.page.getByRole('button', { name: 'Log In' });
  private errorMessage = this.page.locator('.error');

  constructor(page: Page) {
    super(page);
  }

  async open() {
    await this.navigateTo('index.htm');
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async verifyErrorShown() {
    await expect(this.errorMessage).toBeVisible();
  }
}