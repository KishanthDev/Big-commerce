import { test, expect } from "@playwright/test";

test.describe("Business Solutions Section", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000/");
  });

  test("should show B2B section by default", async ({ page }) => {
    const heading = await page.locator("h2", { hasText: "Built for B2B" });
    await expect(heading).toBeVisible();
  });

  test("should switch back to B2B section when B2B button is clicked", async ({ page }) => {
    await page.getByRole("button", { name: "B2C" }).click();
    await page.getByRole("button", { name: "B2B" }).click();

    const heading = await page.locator("h2", { hasText: "Built for B2B" });
    await expect(heading).toBeVisible();
  });
});
