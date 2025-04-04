import { test, expect } from '@playwright/test';

test.describe('Hero Section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/');
  });

  test('should render heading and paragraph', async ({ page }) => {
    await expect(page.getByRole('heading', {
      name: /it's your future. shape it on your terms\./i
    })).toBeVisible();

    await expect(page.getByText(/Think big — and grow bigger/i)).toBeVisible();
  });

  test('should render action buttons', async ({ page }) => {
    await expect(page.getByRole('button', { name: /Explore Platform/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /Get Started/i })).toBeVisible();
  });

  test('should display hero image', async ({ page }) => {
    const img = page.locator('img[src*="cube.webp"]');
    await expect(img).toBeVisible();
  });
});
