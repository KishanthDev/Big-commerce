import { test, expect } from "@playwright/test";

test.describe("Services Section", () => {
  test("renders all elements correctly", async ({ page }) => {
    await page.goto("http://localhost:3000"); // ✅ Update if needed

    const servicesSection = page.locator("section", { hasText: "Our experts at your service." });

    await expect(servicesSection.getByText(/^SERVICES$/)).toBeVisible();


    await expect(
      servicesSection.getByRole("heading", {
        name: /our experts at your service/i,
      })
    ).toBeVisible();

    await expect(
      servicesSection.getByText(/our team of ecommerce experts/i)
    ).toBeVisible();

    await expect(
      servicesSection.getByRole("button", { name: /view all services/i })
    ).toBeVisible();

    await expect(
      servicesSection.getByAltText(/our expert ecommerce services visual/i)
    ).toBeVisible(); // Make sure the `alt` matches this
  });
});
