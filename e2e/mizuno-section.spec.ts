import { test, expect } from "@playwright/test";

test.describe("Mizuno Section", () => {
    test("renders all elements correctly", async ({ page }) => {
        await page.goto("http://localhost:3000");

        await expect(page.getByAltText("Mizuno Logo")).toBeVisible();

        await expect(
            page.getByRole("heading", { name: /mizuno usa goes composable for big growth/i })
        ).toBeVisible();

        await expect(page.getByText("90%")).toBeVisible();
        await expect(page.getByText("Decrease in time to complete checkout")).toBeVisible();

        await expect(page.getByText("12%")).toBeVisible();
        await expect(page.getByText("Increase in average order value")).toBeVisible();

        await expect(page.getByRole("heading", { name: "SOLUTIONS", exact: true })).toBeVisible();

        await expect(page.getByAltText("Mira Commerce Logo")).toBeVisible();
        await expect(page.getByText("Mira Commerce")).toBeVisible();

        await expect(page.getByAltText("Deck Commerce Logo")).toBeVisible();
        await expect(page.getByText("Deck Commerce")).toBeVisible();

        await expect(page.getByAltText("Bolt Logo")).toBeVisible();
        await expect(page.getByText("Bolt")).toBeVisible();

        await expect(
            page.getByRole("button", { name: /read their story/i })
        ).toBeVisible();

        const mizunoImage = page.getByAltText(/mizuno's ecommerce transformation success/i);
        await mizunoImage.scrollIntoViewIfNeeded();
        await expect(mizunoImage).toBeVisible();

    });
});
