import { test, expect } from "@playwright/test";
import { RegistrationPage } from "../../../auth/registration.page.js";

test.describe("Registration — Name field validation", () => {
  let registration;

  test.beforeEach(async ({ page }) => {
    registration = new RegistrationPage(page);
    await registration.open();
  });

  test("wrong length", async () => {
    await registration.fillName("k");
    await registration.name.blur();

    await expect(
      registration.modal.locator(
        "text=Name has to be from 2 to 20 characters long",
      ),
    ).toBeVisible();

    await registration.fillName("ThisNameIsWayTooLongToBeValid");
    await registration.name.blur();

    await expect(
      registration.modal.locator(
        "text=Name has to be from 2 to 20 characters long",
      ),
    ).toBeVisible();
  });
});
