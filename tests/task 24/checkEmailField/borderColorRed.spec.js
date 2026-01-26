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

    await emailInput.fill("k");
    await emailInput.blur();
    await expect(page.locator("text=Email is incorrect")).toBeVisible();

    await emailInput.fill("ThisNameIsWayTooLongToBeValid");
    await emailInput.blur();

    await expect(emailInput).toHaveCSS("border-color", "rgb(220, 53, 69)");
  });
});
