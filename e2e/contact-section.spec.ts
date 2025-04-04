// e2e/contact-section.spec.ts
import { test, expect } from "@playwright/test";

test.describe("Contact Section", () => {
  test("renders all elements correctly", async ({ page }) => {
    await page.goto("http://localhost:3000");

    await expect(page.getByAltText("Contact Us")).toBeVisible();

    await expect(
      page.getByRole("heading", { name: /better tools mean better results/i })
    ).toBeVisible();

    const contactButtons = page.getByRole("link", { name: "Contact Us" });
    await expect(contactButtons.nth(0)).toBeVisible();

    await expect(page.getByAltText("feedonomics")).toBeVisible();
    await expect(
      page.getByText(/product feed management.*drive more sales/i)
    ).toBeVisible();

    await expect(page.getByAltText("makeswift").nth(2)).toBeVisible();
    await expect(
      page.getByText(/intuitive visual editor.*stunning websites/i)
    ).toBeVisible();

    const learnMoreLinks = page.getByRole("link", { name: /learn more/i });
    await expect(learnMoreLinks.nth(0)).toBeVisible();
    await expect(learnMoreLinks.nth(1)).toBeVisible();
  });
});
