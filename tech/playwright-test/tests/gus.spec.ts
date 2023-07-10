import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://gustavoisensee.com/');
})

test('visits website and find Gus name', async ({ page }) => {
  await expect(page.getByText(/Gus!/)).toHaveCount(1);
});

test('visits projects page and check for the title', async ({ page }) => {
  await page.locator('div').filter({ hasText: /^About meProjectsBlog$/ }).getByRole('link', { name: 'Projects' }).click();

  expect(page.getByRole('heading', { name: 'Github projects' })).toBeTruthy();
});