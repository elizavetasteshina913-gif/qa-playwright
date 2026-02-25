import { test, expect } from "@playwright/test";
import { RegistrationPage } from "../../../auth/registration.page.js";

test.describe("Registration — Password field validation", () => {
  let registration;

  test.beforeEach(async ({ page }) => {
    registration = new RegistrationPage(page);
    await registration.open();
  });

  const testCases = [
    {
      password: "short1A",
      valid: false,
      message:
        "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter",
    },
    {
      password: "alllowercase1",
      valid: false,
      message:
        "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter",
    },
    {
      password: "ALLUPPERCASE1",
      valid: false,
      message:
        "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter",
    },
    {
      password: "NoNumberPass",
      valid: false,
      message:
        "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter",
    },
    {
      password: "Valid1Pass",
      valid: true,
      message: "",
    },
  ];

  testCases.forEach(({ password, valid, message }) => {
    test(`validate password: ${password}`, async () => {
      await registration.fillPassword(password);
      await registration.password.blur();

      if (!valid) {
        await expect(registration.modal.locator(`text=${message}`)).toBeVisible(
          { timeout: 7000 },
        );

        await registration.expectRedBorder(registration.password);
      }
    });
  });
});
