import { test } from "@playwright/test";
import { RegistrationPage } from "../../../auth/registration.page.js";

test.describe("Registration — Last name field validation", () => {
  let registration;

  test.beforeEach(async ({ page }) => {
    registration = new RegistrationPage(page);
    await registration.open();
  });

  test("Last name is invalid — border turns red", async () => {
    await registration.fillLastName("8497_urjrek");
    await registration.lastName.blur();

    await registration.expectRedBorder(registration.lastName);
  });
});
