import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { AccountsOverviewPage } from '../pages/AccountsOverviewPage';
import { TransferFundsPage } from '../pages/TransferFundsPage';

type Pages = {
  loginPage: LoginPage;
  accountsPage: AccountsOverviewPage;
  transferPage: TransferFundsPage;
};

export const test = base.extend<Pages>({
  loginPage: async ({ page }, use) => await use(new LoginPage(page)),
  accountsPage: async ({ page }, use) => await use(new AccountsOverviewPage(page)),
  transferPage: async ({ page }, use) => await use(new TransferFundsPage(page)),
});

export { expect } from '@playwright/test';