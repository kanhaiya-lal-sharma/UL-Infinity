



const { test, expect } = require("@playwright/test");
const { InfinityFormPage } = require("../../pages/infinityForm.page");
const { generateUniqueData } = require("../../utils/testData");


test("infinity Elite", async ({ page }) => {

     test.setTimeout(60000);

  await page.goto("/");

     const {phoneNo, eno } = generateUniqueData();

   const email = `infinityElite_${eno}.university@yopmail.com` ;

  await page.getByRole("button",{name:"Infinity Elite"}).click();

  await page.getByRole("button",{name:"Explore Now"}).click();

  await expect(page).toHaveURL(/services\/infinity/);



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

  
console.log(`Infinity Elie  form email - ${email}`);

});