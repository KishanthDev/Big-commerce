import { test, expect } from "@playwright/test";

test("Business Section should render correctly", async ({ page }) => {
  await page.goto("http://localhost:3000");

  await page.waitForSelector("text=SMALL BUSINESS");

  await expect(page.getByRole("heading", { name: "SMALL BUSINESS" })).toBeVisible();

  await expect(page.locator('img[alt="Business Solutions"]')).toBeVisible();

  await expect(
    page.locator("text=Every small business should think big")
  ).toBeVisible();

  await expect(page.getByRole("button", { name: "LEARN MORE" })).toBeVisible();
});
