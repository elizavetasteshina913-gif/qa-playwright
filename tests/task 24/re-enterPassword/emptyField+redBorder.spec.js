import { test, expect } from "@playwright/test";

test.describe("Registration — Re-enter password validation", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");

    await page.locator(".section.hero").locator("text=Sign up").click();

    await expect(page.locator(".modal-content")).toHaveClass(/modal-content/);
  });

  test("should show error when Re-enter password is absent", async ({
    page,
  }) => {
    const modal = page.locator(".modal-content");
    const passwordInput = modal.locator("#signupPassword");
    const repeatPasswordInput = modal.locator("#signupRepeatPassword");

    await passwordInput.fill("Valid1Pass");
    await repeatPasswordInput.click();
    await repeatPasswordInput.blur();

    await expect(modal.locator("text=Re-enter password required")).toBeVisible({
      timeout: 7000,
    });

    await expect(repeatPasswordInput).toHaveCSS(
      "border-color",
      "rgb(220, 53, 69)",
    );
  });
});
