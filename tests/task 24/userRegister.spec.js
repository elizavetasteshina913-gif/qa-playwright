import { test, expect } from "@playwright/test";

test.describe("Registration — successful path", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");

    await page.locator(".section.hero").locator("text=Sign up").click();

    await expect(page.locator(".modal-content")).toBeVisible();
  });

  test("should successfully register a new user", async ({ page }) => {
    const modal = page.locator(".modal-content");

    await modal.locator("#signupName").fill("Liza");
    await modal.locator("#signupLastName").fill("test");

    await modal
      .locator("#signupEmail")
      .fill("22aqaaelizavetasteshina913@gmail.com");

    await modal.locator("#signupPassword").fill("Valid1Pass");
    await modal.locator("#signupRepeatPassword").fill("Valid1Pass");

    const registerButton = modal.locator('button:has-text("Register")');
    await expect(registerButton).toBeEnabled();
    await registerButton.click();

    await expect(page.locator(".global-layout")).toBeVisible();

    await expect(page.locator("text=Registration complete")).toBeVisible();
  });
});
