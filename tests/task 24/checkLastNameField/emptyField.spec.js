import { test, expect } from "@playwright/test";

test.describe("Registration — Last name field validation", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("Last name required", async ({ page }) => {
    const heroSection = page.locator(".section.hero");
    await heroSection.locator("text=Sign up").click();

    const modal = page.locator(".modal-content");
    await expect(modal).toHaveClass(/modal-content/);

    const lastNameInput = modal.locator("#signupLastName");
    await lastNameInput.click();
    await lastNameInput.blur();

    await expect(modal.locator("text=Last name required")).toBeVisible({
      timeout: 7000,
    });
  });
});
