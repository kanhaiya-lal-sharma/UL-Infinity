

// class CommonModal {
//   constructor(page) {
//     this.page = page;

//     // this.modal = page
//     //   .getByText("Leave us your contact details and one of our agents will get in touch with you soon.")
//     //   .locator("..");

//     this.modal = page.getByRole('dialog').last();

//     this.firstName = this.modal.locator('input[name="firstName"]');
//     this.lastName = this.modal.locator('input[name="lastName"]');
//     this.email = this.modal.locator('input[name="email"]');
//     this.phone = this.modal.locator('.react-tel-input input');
//     this.submitBtn = this.modal.getByRole("button", { name: "Submit" });
//   }

//   async waitForModal() {
//     await this.modal.waitFor({ state: "visible" });
//   }

//   async fillForm({ firstName, lastName, email, phone }) {
//     await this.firstName.fill(firstName);
//     await this.lastName.fill(lastName);
//     await this.email.fill(email);

//     await this.phone.fill(phone); // simpler than keyboard actions
//   }

//   async submit() {
//     await this.submitBtn.click();
//   }
// }

// module.exports = { CommonModal };


class CommonModal {
  constructor(page) {
    this.page = page;

    // 🔥 universal modal locator
    this.modal = page.locator('div:has(input[name="firstName"])').last();

    this.firstName = this.modal.locator('input[name="firstName"]');
    this.lastName = this.modal.locator('input[name="lastName"]');
    this.email = this.modal.locator('input[name="email"]');
    this.phone = this.modal.locator('.react-tel-input input');
    this.submitBtn = this.modal.getByRole("button", { name: "Submit" });
  }

  async waitForModal() {
    // 🔥 most stable wait
    await this.page.waitForSelector('input[name="firstName"]', { timeout: 10000 });
  }

  async fillForm({ firstName, lastName, email, phone }) {
    await this.firstName.fill(firstName);
    await this.lastName.fill(lastName);
    await this.email.fill(email);

    await this.phone.fill(phone); // tumhara current logic
  }

  async submit() {
    await this.submitBtn.click();
  }
}

module.exports = { CommonModal };