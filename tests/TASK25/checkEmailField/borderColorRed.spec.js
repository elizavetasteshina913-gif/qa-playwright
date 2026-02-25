import { test, expect } from "@playwright/test";
import { RegistrationPage } from "../../../auth/registration.page.js";

test("Email border is red for invalid values", async ({ page }) => {
  const registration = new RegistrationPage(page);

  await registration.open();

  await registration.fillEmail("k");
  await expect(page.locator("text=Email is incorrect")).toBeVisible();

  await registration.fillEmail("ThisNameIsWayTooLongToBeValid");
  await registration.expectRedBorder(registration.email);
});
