import { test, expect } from '@playwright/test';

test.describe('Stats Section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/');
  });

  test('should render 6 stat cards', async ({ page }) => {
    const cards = await page.locator('[data-testid="stat-card"]');
    await expect(cards).toHaveCount(6);
  });

  test('should render image or value and description in each card', async ({ page }) => {
    const cards = await page.locator('[data-testid="stat-card"]');
    const count = await cards.count();

    for (let i = 0; i < count; i++) {
      const card = cards.nth(i);
      const hasImage = await card.locator('img').count();
      const hasValue = await card.locator('h2').count();

      expect(hasImage > 0 || hasValue > 0).toBeTruthy();
      await expect(card.locator('p')).toBeVisible();
    }
  });
});
