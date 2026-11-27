import { test } from '../fixtures/pages.fixture';
import { users } from '../utils/testData';

test('valid user can log in', async ({ loginPage, accountsPage }) => {
  await loginPage.open();
  await loginPage.login(users.valid.username, users.valid.password);
  await accountsPage.verifyLoaded();
});

test('invalid user sees an error', async ({ loginPage }) => {
  await loginPage.open();
  await loginPage.login(users.invalid.username, users.invalid.password);
  await loginPage.verifyErrorShown();
});