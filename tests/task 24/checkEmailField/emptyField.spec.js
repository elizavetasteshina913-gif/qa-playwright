import { test, expect } from "@playwright/test";

test.describe("Registration — Email field validation", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("Border red", async ({ page }) => {
    const heroSection = page.locator(".section.hero");
    await heroSection.locator("text=Sign up").click();

    const modal = page.locator(".modal-content");

    const emailInput = modal.locator("#signupEmail");
    await emailInput.click();
    await emailInput.blur();

    await expect(modal.locator("text=Email required")).toBeVisible();
  });
});
