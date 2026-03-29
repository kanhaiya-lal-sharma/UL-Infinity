

class CommonModal {
  constructor(page) {
    this.page = page;

    this.modal = page
      .getByText("Leave us your contact details and one of our agents will get in touch with you soon.")
      .locator("..");

  

    this.firstName = this.modal.locator('input[name="firstName"]');
    this.lastName = this.modal.locator('input[name="lastName"]');
    this.email = this.modal.locator('input[name="email"]');
    this.phone = this.modal.locator('.react-tel-input input');
    this.submitBtn = this.modal.getByRole("button", { name: "Submit" });
  }

  async waitForModal() {
    await this.modal.waitFor({ state: "visible" });
  }

  async fillForm({ firstName, lastName, email, phone }) {
    await this.firstName.fill(firstName);
    await this.lastName.fill(lastName);
    await this.email.fill(email);

    await this.phone.click();
    await this.page.keyboard.press('Control+A');
    await this.page.keyboard.press('Backspace');
    await this.phone.type('8851658991');

  }

  async submit() {
    await this.submitBtn.click();
  }
}

module.exports = { CommonModal };



   