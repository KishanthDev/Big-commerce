import { test, expect } from '@playwright/test';

test.describe('BigCommerceBenefits Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000');
  });

  test('should display heading', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /what you can achieve with bigcommerce/i })).toBeVisible();
  });

  test('should render all benefit cards', async ({ page }) => {
    const cards = page.locator('div[role="group"] > div');
    await expect(cards).toHaveCount(6);
  });

  test('should display all titles and descriptions', async ({ page }) => {
    const titles = [
      "Grow revenue faster.",
      "Convert more shoppers.",
      "Save on rates.",
      "Build your way.",
      "Boost B2B sales.",
      "Access reliable support."
    ];

    for (const title of titles) {
      await expect(page.getByText(title)).toBeVisible();
    }
  });
});
