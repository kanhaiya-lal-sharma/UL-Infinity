

const { test, expect } = require("@playwright/test");
const { InfinityFormPage } = require("../../pages/infinityForm.page");
const { generateUniqueData } = require("../../utils/testData");


test("infinity lite", async ({ page }) => {

  await page.goto("/");

  
     const {phoneNo, eno } = generateUniqueData();

   const email = `infinitylite_${eno}.university@yopmail.com` ;

  await page.getByRole("button",{name:"Choose services"}).click();

  await expect(page).toHaveURL(/services\/infinity/);

  await page.getByRole('checkbox', { name: 'Health Insurance' }).check();
  await page.getByRole('checkbox', { name: 'VISA' }).check();
  await page.getByRole('checkbox', { name: 'Flight Tickets' }).check();
  await page.getByRole('checkbox', { name: 'Education Loan' }).check();
  await page.getByRole('checkbox', { name: 'Room Essentials' }).check();

  await page.getByRole('button',{name:"Continue"}).click();

  const form = new InfinityFormPage(page);

  await form.fillForm(
    "kahaiya lal",
    email,
    phoneNo,
    "ACM Guildford"
  );

  await form.submitForm();
  await form.acknowledge();

   
console.log(`Infinity lite  form email - ${email}`);

});
