import { test, expect } from "@playwright/test";
import { RegistrationPage } from "../../../auth/registration.page.js";

test.describe("Registration — email field validation", () => {
  let registrationPage;

  test.beforeEach(async ({ page }) => {
    registrationPage = new RegistrationPage(page);
    await registrationPage.open();
  });

  test("Email is incorrect", async () => {
    await registrationPage.fillEmail("khuiy89iu");

    await expect(
      registrationPage.modal.locator("text=Email is incorrect"),
    ).toBeVisible();
  });
});
