import { test, expect } from "@playwright/test";

test.describe("login", () => {
  test("User can successfully log in with valid credentials", async ({
    page,
  }) => {
    await page.goto("/login");

    await page.locator('input[name="email"]').fill(process.env.TEST_USER_EMAIL);
    await page
      .locator('input[name="password"]')
      .fill(process.env.TEST_USER_PASSWORD);

    await page.getByRole("button", { name: "Login" }).click();

    await expect(page.getByRole("button", { name: "Logout" })).toBeVisible(); // check if the logout button is visible
  });

  test("User cannot log in with invalid credentials", async ({ page }) => {
    await page.goto("/login");

    await page.locator('input[name="email"]').fill(process.env.TEST_USER_EMAIL);
    await page.locator('input[name="password"]').fill("invalid-password");

    await page.getByRole("button", { name: "Login" }).click();

    await expect(page.locator("#message-container")).toContainText(
      "Invalid email or password",
    );
  });
});
