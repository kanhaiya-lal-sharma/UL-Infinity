

const { test, expect } = require("@playwright/test");
const { generateUniqueData } = require("../../utils/testData");

test("Student Bank Account vas form", async ({ page }) => {


  test.setTimeout(60000);
  await page.goto("/");

  await page.getByRole("button", { name: "Finance" }).click();

  await page
    .getByRole("navigation")
    .getByRole("link", { name: "Student E-Money App", exact: true })
    .click();

  await expect(page).toHaveURL(/bank-account/);

    const {phoneNo, eno, Fname , Lname} = generateUniqueData();

  const email = `studentBankAccount_${eno}.university@yopmail.com` ;

  const openAccountBtn = page.getByRole("button",{name:'Open Account'}).first();

  await openAccountBtn.click();

  const bankAccountModal = page .getByText("Leave us your contact details and one of our agents will get in touch with you soon.")
  .locator("..");

await bankAccountModal.waitFor({ state: "visible" });

await bankAccountModal.locator('input[name="firstName"]').fill(Fname);

await bankAccountModal.locator('input[name="lastName"]').fill(Lname);

await bankAccountModal.locator('input[name="email"]').fill(email);

const phoneInput = bankAccountModal.locator('.react-tel-input input');

await phoneInput.click();
await page.keyboard.press('Control+A'); 
await page.keyboard.press('Backspace'); 
await phoneInput.type(phoneNo);

//University  University

const universityInput = bankAccountModal.getByRole('combobox');

await expect(universityInput).toBeVisible();

await universityInput.click();
await universityInput.fill("UCFB London");

// dropdown wait
await page.waitForSelector('[role="option"]');

// select option
await page.getByRole('option', { name: /UCFB London/i }).click();


const submitBtn = bankAccountModal.getByRole("button",{name:'Submit'});

await submitBtn.click();

console.log(`Student Bank Account form email - ${email}`);

})
