import { test, expect } from "@playwright/test";
import { RegistrationPage } from "../../../auth/registration.page.js";

test("Email required message shown when field is empty", async ({ page }) => {
  const registration = new RegistrationPage(page);

  await registration.open();

  await registration.email.click();
  await registration.email.blur();

  await expect(page.locator("text=Email required")).toBeVisible();
});
