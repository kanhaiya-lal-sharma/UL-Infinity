
// const{test,expect}=require("@playwright/test");

// test("Guarantor form",async({page})=>{

//      await page.goto("/");

//   await page.getByRole("button", { name: "Housing" }).click();

//   await page
//     .getByRole("navigation")
//     .getByRole("link", { name: "Guarantor", exact: true })
//     .click();

//   await expect(page).toHaveURL(/guarantor/);

//   const findGuarantorBtn =  page.getByRole("button",{name:'Find A Guarantor'}).first();

//   await findGuarantorBtn.click();

// const guarantorModal = page .getByText("Leave us your contact details and one of our agents will get in touch with you soon.")
//   .locator("..");

// await guarantorModal.waitFor({ state: "visible" });

// await guarantorModal.locator('input[name="firstName"]').fill("kanhaiya");

// await guarantorModal.locator('input[name="lastName"]').fill("lal");

// await guarantorModal.locator('input[name="email"]').fill("kanhaiya@yopmail.com");

// const phoneInput = guarantorModal.locator('.react-tel-input input');

// await phoneInput.click();
// await page.keyboard.press('Control+A'); // select all (+91)
// await page.keyboard.press('Backspace'); // delete
// await phoneInput.type('8851658991');


// const submitBtn = guarantorModal.getByRole("button",{name:'Submit'});

// await submitBtn.click();

// })


const { test, expect } = require("@playwright/test");
const { CommonModal } = require("../../pages/commonModal");

test("Guarantor Vas form", async ({ page }) => {

  await page.goto("/");

  await page.getByRole("button", { name: "Housing" }).click();
  await page.getByRole("link", { name: "Guarantor", exact: true }).click();

  await expect(page).toHaveURL(/guarantor/);

  await page.getByRole("button", { name: "Find A Guarantor" }).first().click();

  const modal = new CommonModal(page);

  await modal.waitForModal();
  await modal.fillForm({
    firstName: "kanhaiya",
    lastName: "lal",
    email: "kanhaiya@yopmail.com",
    phone: "8851658991"
  });

  await modal.submit();

  
});