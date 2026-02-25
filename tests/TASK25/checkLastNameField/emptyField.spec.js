import { test } from "@playwright/test";
import { faker } from "@faker-js/faker";

test.describe("Signup tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("Signup with valid credentials (POM)", async ({ page }) => {
    const password = `Qwerty${faker.number.int({ min: 100, max: 999 })}`;
    const userData = {
      name: faker.person.firstName(),
      lastName: faker.person.lastName(),
      email: faker.internet.email(),
      password: password,
      repeatPassword: password,
    };

    const signupButton = page.getByRole("button", { name: "Sign up" });
    await signupButton.click();

    const signupPopup = page.locator(".modal-content");
    await signupPopup.locator("#signupName").fill(userData.name);
    await signupPopup.locator("#signupLastName").fill(userData.lastName);
    await signupPopup.locator("#signupEmail").fill(userData.email);
    await signupPopup.locator("#signupPassword").fill(userData.password);
    await signupPopup
      .locator("#signupRepeatPassword")
      .fill(userData.repeatPassword);
    await signupPopup.locator(".btn-primary").click();
  });
});
