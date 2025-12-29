import { test, expect } from "@playwright/test";

test.describe("Registration — Name field validation", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("Name is invalid", async ({ page }) => {
    const heroSection = page.locator(".section.hero");
    await heroSection.locator("text=Sign up").click();

    const modal = page.locator(".modal-content");

    const nameInput = modal.locator("#signupName");
    await nameInput.click();
    await nameInput.fill("8497_urjrek");
    await nameInput.blur();

    await expect(modal.getByText("Name is invalid")).toBeVisible();
  });
});
