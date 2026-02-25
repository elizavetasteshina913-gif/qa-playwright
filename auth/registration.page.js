import { expect } from "@playwright/test";

export class RegistrationPage {
  constructor(page) {
    this.page = page;

    this.signUpButton = page.locator(".section.hero >> text=Sign up");
    this.modal = page.locator(".modal-content");

    this.name = this.modal.locator("#signupName");
    this.lastName = this.modal.locator("#signupLastName");
    this.email = this.modal.locator("#signupEmail");
    this.password = this.modal.locator("#signupPassword");
    this.repeatPassword = this.modal.locator("#signupRepeatPassword");

    this.registerButton = this.modal.locator('button:has-text("Register")');
  }

  async open() {
    await this.page.goto("/");
    await this.signUpButton.click();
    await expect(this.modal).toBeVisible();
  }

  async fillName(value) {
    await this.name.fill(value);
  }

  async fillLastName(value) {
    await this.lastName.fill(value);
  }

  async fillEmail(value) {
    await this.email.fill(value);
    await this.email.blur();
  }

  async fillPassword(value) {
    await this.password.fill(value);
  }

  async fillRepeatPassword(value) {
    await this.repeatPassword.fill(value);
    await this.repeatPassword.blur();
  }

  async expectRegisterDisabled() {
    await expect(this.registerButton).toBeDisabled();
  }

  async expectRedBorder(field) {
    await expect(field).toHaveCSS("border-color", "rgb(220, 53, 69)");
  }
}
