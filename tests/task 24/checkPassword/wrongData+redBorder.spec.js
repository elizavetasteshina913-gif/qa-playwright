import { test, expect } from "@playwright/test";

test.describe("Registration — Password field validation", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");

    await page.locator(".section.hero").locator("text=Sign up").click();

    // const modal = page.locator(".modal-content");
    // await expect(modal).toHaveClass(/modal-content/);
  });

  const testCases = [
    {
      password: "short1A",
      valid: false,
      message:
        "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter",
    },
    {
      password: "alllowercase1",
      valid: false,
      message:
        "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter",
    },
    {
      password: "ALLUPPERCASE1",
      valid: false,
      message:
        "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter",
    },
    {
      password: "NoNumberPass",
      valid: false,
      message:
        "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter",
    },
    {
      password: "Valid1Pass",
      valid: true,
      message: "",
    },
  ];

  testCases.forEach(({ password, valid, message }) => {
    test(`validate password: ${password}`, async ({ page }) => {
      const modal = page.locator(".modal-content");
      const passwordInput = modal.locator("#signupPassword");

      await passwordInput.fill(password);
      await passwordInput.blur();

      if (!valid) {
        await expect(modal.locator(`text=${message}`)).toBeVisible({
          timeout: 7000,
        });

        await expect(passwordInput).toHaveCSS(
          "border-color",
          "rgb(220, 53, 69)",
        );
      }
    });
  });
});
