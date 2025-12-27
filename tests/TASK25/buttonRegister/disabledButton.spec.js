import { test } from "@playwright/test";
import { RegistrationPage } from "../../auth/registration.page.js";

test("Last name field red if empty", async ({ page }) => {
  const registration = new RegistrationPage(page);

  await registration.open();
  await registration.lastName.focus();
  await registration.lastName.blur();

  await registration.expectRedBorder(registration.lastName);
});
