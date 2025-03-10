import { test, expect } from "@playwright/test";

test.describe("user can navigate through pages", () => {
  test("User can navigate to a venue page", async ({ page }) => {
    await page.goto("/venue");

    await page.waitForSelector(".container", { timeout: 50000 });

    await page.waitForSelector("#venue-container a", {
      timeout: 50000,
    });

    await page.waitForLoadState("networkidle");

    await page.locator("#venue-container a").first().click();

    await page.getByRole("h1");

    await expect(page.locator("h1")).toContainText("Venue details");
  });
});
