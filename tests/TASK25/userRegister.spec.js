import { test, expect } from "@playwright/test";
import { RegistrationPage } from "../../auth/registration.page.js";

test.describe("Registration — successful path", () => {
  let registration;

  test.beforeEach(async ({ page }) => {
    registration = new RegistrationPage(page);
    await registration.open();
  });

  test("should successfully register a new user", async () => {
    await registration.fillName("Liza");
    await registration.fillLastName("test");
    await registration.fillEmail("98aqaaelizavetasteshina913@gmail.com");
    await registration.fillPassword("Valid1Pass");
    await registration.fillRepeatPassword("Valid1Pass");

    await expect(registration.registerButton).toBeEnabled();
    await registration.registerButton.click();

    await expect(registration.page.locator(".global-layout")).toBeVisible();
    await expect(
      registration.page.locator("text=Registration complete"),
    ).toBeVisible();
  });
});
