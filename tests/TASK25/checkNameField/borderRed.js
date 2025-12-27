import { test } from "@playwright/test";
import { RegistrationPage } from "../../auth/registration.page.js";

test.describe("Registration — Name field validation", () => {
  let registration;

  test.beforeEach(async ({ page }) => {
    registration = new RegistrationPage(page);
    await registration.open();
  });

  test("Border red for invalid name values", async () => {
    await registration.fillName("k");
    await registration.name.blur();
    await registration.expectRedBorder(registration.name);

    await registration.fillName("ThisNameIsWayTooLongToBeValid");
    await registration.name.blur();
    await registration.expectRedBorder(registration.name);
  });
});
