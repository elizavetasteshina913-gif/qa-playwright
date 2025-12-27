import { test, expect } from "@playwright/test";

test.describe("Registration — Name field validation", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("Empty name field", async ({ page }) => {
    const heroSection = page.locator(".section.hero");
    await heroSection.locator("text=Sign up").click();

    const modal = page.locator(".modal-content");
    await expect(modal).toHaveClass(/modal-content/);

    const nameInput = modal.locator("#signupName");
    await nameInput.click();
    await nameInput.blur();

    await expect(page.locator("text=Name required")).toBeVisible();
  });
});
