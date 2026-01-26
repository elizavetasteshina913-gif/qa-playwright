import { test, expect } from "@playwright/test";
import { RegistrationPage } from "../../auth/registration.page.js";

test.describe("Registration — Re-enter password validation", () => {
  let registration;

  test.beforeEach(async ({ page }) => {
    registration = new RegistrationPage(page);
    await registration.open();
  });

  test("should show error when passwords do not match", async () => {
    await registration.fillPassword("Valid1Pass");
    await registration.fillRepeatPassword("Different1Pass");

    await expect(
      registration.modal.locator("text=Passwords do not match"),
    ).toBeVisible({ timeout: 7000 });

    await registration.expectRedBorder(registration.repeatPassword);
  });

  test("should accept when passwords match", async () => {
    await registration.fillPassword("Valid1Pass");
    await registration.fillRepeatPassword("Valid1Pass");

    await expect(
      registration.modal.locator("text=Passwords do not match"),
    ).toBeHidden();
  });
});
