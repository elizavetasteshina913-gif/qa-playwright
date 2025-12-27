import { test } from "@playwright/test";
import { RegistrationPage } from "../../auth/registration.page.js";

test.describe("Registration — Name field validation", () => {
  let registration;

  test.beforeEach(async ({ page }) => {
    registration = new RegistrationPage(page);
    await registration.open();
  });

  test("Empty name field — border turns red", async () => {
    await registration.fillName("");
    await registration.name.blur();

    await registration.expectRedBorder(registration.name);
  });
});
