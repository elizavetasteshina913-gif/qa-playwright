import { test, expect } from "@playwright/test";
import { RegistrationPage } from "../../auth/registration.page.js";

test.describe("Registration — Re-enter password validation", () => {
  let registration;

  test.beforeEach(async ({ page }) => {
    registration = new RegistrationPage(page);
    await registration.open();
  });

  test("should show error when Re-enter password is absent", async () => {
    await registration.fillPassword("Valid1Pass");
    await registration.repeatPassword.click();
    await registration.repeatPassword.blur();

    await expect(
      registration.modal.locator("text=Re-enter password required"),
    ).toBeVisible({ timeout: 7000 });

    await registration.expectRedBorder(registration.repeatPassword);
  });
});
