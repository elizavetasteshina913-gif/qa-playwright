import { test, expect } from "@playwright/test";

test.describe("Registration — Re-enter password validation", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");

    await page.locator(".section.hero").locator("text=Sign up").click();

    await expect(page.locator(".modal-content")).toHaveClass(/modal-content/);
  });

  test("should show error when passwords do not match", async ({ page }) => {
    const modal = page.locator(".modal-content");
    const passwordInput = modal.locator("#signupPassword");
    const repeatPasswordInput = modal.locator("#signupRepeatPassword");

    await passwordInput.fill("Valid1Pass");
    await repeatPasswordInput.fill("Different1Pass");
    await repeatPasswordInput.blur();

    await expect(modal.locator("text=Passwords do not match")).toBeVisible({
      timeout: 7000,
    });
  });

  test("should accept when passwords match", async ({ page }) => {
    const modal = page.locator(".modal-content");
    const passwordInput = modal.locator("#signupPassword");
    const repeatPasswordInput = modal.locator("#signupRepeatPassword");

    await passwordInput.fill("Valid1Pass");
    await repeatPasswordInput.fill("Valid1Pass");
    await repeatPasswordInput.blur();

    await expect(modal.locator("text=Passwords do not match")).toBeHidden();
  });
});
