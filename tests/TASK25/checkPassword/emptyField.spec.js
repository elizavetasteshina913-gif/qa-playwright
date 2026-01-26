import { test, expect } from "@playwright/test";
import { RegistrationPage } from "../../auth/registration.page.js";

test.describe("Registration — Password field validation", () => {
  let registration;

  test.beforeEach(async ({ page }) => {
    registration = new RegistrationPage(page);
    await registration.open();
  });

  test("Empty Password field", async () => {
    await registration.fillPassword("");
    await registration.password.blur();

    await expect(
      registration.modal.locator("text=Password required"),
    ).toBeVisible();

    await registration.expectRedBorder(registration.password);
  });
});
