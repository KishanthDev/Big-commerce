import { test, expect } from '@playwright/test';

test.describe('Header Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000');
  });

  test('should display navigation links on desktop', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 720 });

    const navLinks = await page.locator('nav >> text=Platform');
    await expect(navLinks).toBeVisible();
  });

  test('should toggle mobile menu', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 }); // iPhone size

    const menuButton = page.getByRole('button', { name: 'menu' });
    await expect(menuButton).toBeVisible();

    await menuButton.click();

    const mobileMenu = page.getByTestId('mobile-menu');
    await expect(mobileMenu).toBeVisible();

    await menuButton.click();
    await expect(mobileMenu).not.toBeVisible(); // Optional, if animates out
  });

  test('should change country option', async ({ page }) => {
    const select = page.getByRole('combobox', { name: /select country/i });
    await expect(select).toBeVisible();
    
    await select.selectOption('in');
    const selected = await select.inputValue();
    expect(selected).toBe('in');
  });

  test('should show call sales number and log in', async ({ page }) => {
    await expect(page.getByText('Call Sales: 1-888-248-9325')).toBeVisible();
    await expect(page.getByText('Log In')).toBeVisible();
  });
});
