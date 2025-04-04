import { test, expect } from '@playwright/test';

test('YourCompanySection renders correctly', async ({ page }) => {
  await page.goto('http://localhost:3000'); 

  await page.waitForSelector('text=Your company is in some seriously great company.');

  await expect(
    page.getByRole('heading', {
      name: 'Your company is in some seriously great company.',
    })
  ).toBeVisible();

  await expect(
    page.getByText('Stack your tech — with total freedom to integrate your preferred partners.')
  ).toBeVisible();

  await expect(
    page.getByRole('button', { name: /view all partners/i })
  ).toBeVisible();

  const slider = page.locator('[data-testid="hover-slider"]');
  await expect(slider).toBeVisible(); 
});
