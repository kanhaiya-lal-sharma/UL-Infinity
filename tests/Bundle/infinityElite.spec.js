



const { test, expect } = require("@playwright/test");
const { InfinityFormPage } = require("../../pages/infinityForm.page");


test("infinity Elite", async ({ page }) => {

     test.setTimeout(60000);

  await page.goto("/");

  await page.getByRole("button",{name:"Infinity Elite"}).click();

  await page.getByRole("button",{name:"Explore Now"}).click();

  await expect(page).toHaveURL(/services\/infinity/);



  await page.getByRole('button',{name:"Continue"}).click();

  const form = new InfinityFormPage(page);

  await form.fillForm(
    "kahaiya lal",
    "klsharma@yopmail.com",
    "1234567890",
    "ACM Guildford"
  );

  await form.submitForm();
  await form.acknowledge();

});