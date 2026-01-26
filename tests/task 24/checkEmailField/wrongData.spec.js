import { test, expect } from "@playwright/test";

test.describe("Registration — email field validation", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("Email is incorrect", async ({ page }) => {
    const heroSection = page.locator(".section.hero");
    await heroSection.locator("text=Sign up").click();

    const modal = page.locator(".modal-content");

    const emailInput = modal.locator("#signupEmail");
    await emailInput.click();
    await emailInput.fill("khuiy89iu");
    await emailInput.blur();

    await expect(modal.locator("text=Email is incorrect")).toBeVisible();
  });
});
