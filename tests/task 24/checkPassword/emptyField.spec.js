import { test, expect } from "@playwright/test";

test.describe("Registration — Password field validation", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("Empty Password field", async ({ page }) => {
    const heroSection = page.locator(".section.hero");
    await heroSection.locator("text=Sign up").click();

    const modal = page.locator(".modal-content");
    await expect(modal).toHaveClass(/modal-content/);

    const passwordInput = modal.locator("#signupPassword");
    await passwordInput.click();
    await passwordInput.blur();

    await expect(modal.locator("text=Password required")).toBeVisible();
  });
});
