import { test, expect } from "@playwright/test";

test.describe("Registration — disabled REGISTER", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");

    await page.locator(".section.hero").locator("text=Sign up").click();
  });

  test("button is disabled if data incorrect", async ({ page }) => {
    const modal = page.locator(".modal-content");

    await modal.locator("#signupName").fill("Liza");

    const emailInput = modal.locator("#signupEmail");
    await emailInput.fill("khuiy89iu");
    await emailInput.blur();

    await expect(modal.locator("text=Email is incorrect")).toBeVisible({
      timeout: 7000,
    });

    const registerButton = modal.locator('button:has-text("Register")');
    await expect(registerButton).toBeDisabled();
  });
});
