import { test, expect } from '@playwright/test';

test('ParaBank home page launches', async ({ page }) => {
  await page.goto('index.htm');
  await expect(page).toHaveTitle(/ParaBank/);

  
  
});
