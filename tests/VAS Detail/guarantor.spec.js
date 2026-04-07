


const { test, expect } = require("@playwright/test");
const { CommonModal } = require("../../pages/commonModal");
const { generateUniqueData } = require("../../utils/testData");

test("Guarantor Vas form", async ({ page }) => {

  await page.goto("/");

  await page.getByRole("button", { name: "Housing" }).click();
  await page.getByRole("link", { name: "Guarantor", exact: true }).click();

  await expect(page).toHaveURL(/guarantor/);


      
const {phoneNo, eno ,Fname ,Lname } = generateUniqueData();

  const email = `guarantor_${eno}.university@yopmail.com` ;

  await page.getByRole("button", { name: "Find A Guarantor" }).first().click();

  const modal = new CommonModal(page);

  await modal.waitForModal();
  await modal.fillForm({
    firstName: Fname,
    lastName: Lname,
    email: email,
    phone: phoneNo
  });

  await modal.submit();

   console.log(`Guarantor form email - ${email}`);

  
});