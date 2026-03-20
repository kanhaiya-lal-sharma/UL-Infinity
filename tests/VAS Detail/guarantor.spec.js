
const{test,expect}=require("@playwright/test");

test("Guarantor form",async({page})=>{

     await page.goto("https://dev-vas.universityliving.com/");

  await page.getByRole("button", { name: "Housing" }).click();

  await page
    .getByRole("navigation")
    .getByRole("link", { name: "Guarantor", exact: true })
    .click();

  await expect(page).toHaveURL(/guarantor/);

  const findGuarantorBtn =  page.getByRole("button",{name:'Find A Guarantor'}).first();

  await findGuarantorBtn.click();

const guarantorModal = page .getByText("Leave us your contact details and one of our agents will get in touch with you soon.")
  .locator("..");

await guarantorModal.waitFor({ state: "visible" });

await guarantorModal.locator('input[name="firstName"]').fill("kanhaiya");

await guarantorModal.locator('input[name="lastName"]').fill("lal");

await guarantorModal.locator('input[name="email"]').fill("kanhaiya@yopmail.com");

const phoneInput = page.getByPlaceholder("Contact Number").nth(1);
  await phoneInput.fill("8851658991");


})