import { test, expect } from "@playwright/test";

test.describe("B2C Section", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("http://localhost:3000/");
    });
    test("should render image, title and description in each B2C card", async ({ page }) => {
        const cards = page.locator('[data-testid="b2c-card"]');

        for (let i = 0; i < await cards.count(); i++) {
            const card = cards.nth(i);
            await expect(card.locator("img")).toBeVisible();
            await expect(card.locator("h3")).toBeVisible();
            await expect(card.locator("p")).toBeVisible();
        }
    });
});
