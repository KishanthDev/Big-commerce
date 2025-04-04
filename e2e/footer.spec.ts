import { test, expect } from "@playwright/test";

test.describe("Footer", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000/");
  });

  test("should render all collapsible sections on desktop", async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });

    const sections = [
      "PRODUCT",
      "PARTNERS",
      "CUSTOMERS",
      "RESOURCES",
      "USE CASE SOLUTIONS",
      "INDUSTRY SOLUTIONS",
      "COMPANY",
      "HELP CENTER",
    ];

    for (const title of sections) {
        await expect(page.getByTestId(`section-title-${title}`)).toBeVisible();
      }
           
  });

  test("should show all social icons", async ({ page }) => {
    await expect(page.getByTestId("facebook-icon")).toBeVisible();
    await expect(page.getByTestId("linkedin-icon")).toBeVisible();
    await expect(page.getByTestId("youtube-icon")).toBeVisible();
    await expect(page.getByTestId("pinterest-icon")).toBeVisible();
    await expect(page.getByTestId("instagram-icon")).toBeVisible();
  });

  test("should contain legal links in footer", async ({ page }) => {
    const legalLinks = [
      "Privacy Policy",
      "Website Terms of Use",
      "Master Services Agreement",
      "Legal Archives",
      "Sitemap",
      "Cookie Settings",
    ];

    for (const link of legalLinks) {
      await expect(page.getByRole("link", { name: link })).toBeVisible();
    }
  });
});
