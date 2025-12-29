import { test, expect } from "@playwright/test";

test.describe("Registration — Last name field validation", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("Border red", async ({ page }) => {
    const heroSection = page.locator(".section.hero");
    await heroSection.locator("text=Sign up").click();

    const modal = page.locator(".modal-content");

    const lastNameInput = modal.locator("#signupLastName");

    await lastNameInput.fill("k");
    await lastNameInput.blur();

    await expect(
      modal.getByText("Last name has to be from 2 to 20 characters long"),
    ).toBeVisible();

    await lastNameInput.fill("ThisNameIsWayTooLongToBeValid");
    await lastNameInput.blur();

    await expect(lastNameInput).toHaveCSS("border-color", "rgb(220, 53, 69)");
  });
});
