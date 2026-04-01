
class InfinityFormPage {

  constructor(page){
    this.page = page;

    this.form = page.getByText("Provide us your details").locator("..");

    this.fullName = this.form.locator("#fullName");
    this.email = this.form.locator("#email");
    this.phone = this.form.locator("#contactNumber");

    this.university = this.form.getByRole('combobox');
    this.departureMonth = this.form.locator("#departureMonth");

    this.submitBtn = this.form.getByRole('button',{name:"Submit"});

    this.okayBtn = page.getByRole('button',{name:"Okay, got it"});
  }

  async fillForm(name,email,phone,university){
    
    await this.fullName.fill(name);
    await this.email.fill(email);
    await this.phone.click();
   await this.phone.clear();
   await this.phone.type(phone);

    await this.university.fill(university);
    await this.university.press("Enter");

    await this.departureMonth.click();

    await this.page.getByRole('option',{name:/December 2026/i}).click();
  }

  async submitForm(){
    await this.submitBtn.click();
  }

  async acknowledge(){
    await this.okayBtn.click();
  }

}

module.exports = { InfinityFormPage };
