import { test, expect } from "@playwright/test";

test.describe("Registration — Last name field validation", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("Last name is invalid", async ({ page }) => {
    const heroSection = page.locator(".section.hero");
    await heroSection.locator("text=Sign up").click();

    const modal = page.locator(".modal-content");
    await expect(modal).toHaveClass(/modal-content/);

    const LastnameInput = modal.locator("#signupLastName");
    await LastnameInput.click();
    await LastnameInput.fill("8497_urjrek");
    await LastnameInput.blur();

    await expect(page.locator("text=Last name is invalid")).toBeVisible();
  });
});
