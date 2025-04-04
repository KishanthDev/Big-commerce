import { test, expect } from "@playwright/test";

test.describe("B2B Section", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000/"); 
  });

  test("should render 3 B2B content blocks", async ({ page }) => {
    await page.getByRole("button", { name: "B2B" }).click();

    const cards = await page.locator('[data-testid="b2b-card"]').all();
    expect(cards.length).toBe(3);
  });

  test("should render images, titles and descriptions for each card", async ({ page }) => {
    await page.getByRole("button", { name: "B2B" }).click();
  
    const cards = await page.locator('[data-testid="b2b-card"]');
    await expect(cards).toHaveCount(3);
  
    const images = await page.locator('[data-testid="b2b-card"] img');
    await expect(images).toHaveCount(3);
  
    const titles = await page.locator('[data-testid="b2b-card"] h2, [data-testid="b2b-card"] h3');
    await expect(titles).toHaveCount(3);
  
    const paragraphs = await page.locator('[data-testid="b2b-card"] p');
    await expect(paragraphs).toHaveCount(3);
  
    for (let i = 0; i < 3; i++) {
      await expect(images.nth(i)).toBeVisible();
      await expect(titles.nth(i)).toBeVisible();
      await expect(paragraphs.nth(i)).toBeVisible();
    }
  });
  
});
