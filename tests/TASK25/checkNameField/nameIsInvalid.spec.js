import { test, expect } from "@playwright/test";
import { RegistrationPage } from "../../auth/registration.page.js";

test.describe("Registration — Name field validation", () => {
  let registration;

  test.beforeEach(async ({ page }) => {
    registration = new RegistrationPage(page);
    await registration.open();
  });

  test("Name is invalid", async () => {
    await registration.fillName("8497_urjrek");
    await registration.name.blur();

    await expect(
      registration.modal.locator("text=Name is invalid"),
    ).toBeVisible();
  });
});
