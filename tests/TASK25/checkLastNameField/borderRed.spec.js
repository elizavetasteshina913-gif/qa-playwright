import { test } from "@playwright/test";
import { RegistrationPage } from "../../auth/registration.page.js";

test.describe("Registration — Last name field validation", () => {
  let registration;

  test.beforeEach(async ({ page }) => {
    registration = new RegistrationPage(page);
    await registration.open();
  });

  test("Border turns red for invalid last name values", async () => {
    await registration.fillLastName("k");
    await registration.lastName.blur();
    await registration.expectRedBorder(registration.lastName);

    await registration.fillLastName("ThisNameIsWayTooLongToBeValid");
    await registration.lastName.blur();
    await registration.expectRedBorder(registration.lastName);
  });
});
