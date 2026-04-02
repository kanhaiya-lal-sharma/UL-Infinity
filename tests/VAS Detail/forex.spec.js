

const { test, expect } = require("@playwright/test");
const { generateUniqueData } = require("../../utils/testData");

test("forex vas form", async ({ page }) => {


  test.setTimeout(60000);
  await page.goto("/");

  await page.getByRole("button", { name: "Finance" }).click();

  await page
    .getByRole("navigation")
    .getByRole("link", { name: "Forex", exact: true })
    .click();

  await expect(page).toHaveURL(/forex/);

  
  await page.waitForTimeout(5000); 


const {phoneNo, eno } = generateUniqueData();


  const email = `forex_${eno}.university@yopmail.com` ;

  await page.locator('input[name="firstName"]:visible').first().fill("kanhaiya");
  await page.locator('input[name="lastName"]:visible').first().fill("sharma");
  await page.locator('input[name="email"]:visible').first().fill(email);

  

const phoneInput = page.locator('.react-tel-input input').nth(1);

await phoneInput.click();
await page.keyboard.press("Control+A");
await page.keyboard.press("Backspace");
await phoneInput.type(phoneNo);

  
const gender = page.locator('select[name="gender"]:visible').first();

await expect(gender).toBeVisible();
await gender.selectOption('male');

const country = page.locator('select[name="country"]:visible').first();
await country.selectOption('Australia');


const universityInput = page
  .getByRole('main')
  .getByRole('combobox', { name: 'University*' })
  .first();   // or .nth(0)

// Optional: make sure it's the visible one in the main form
await expect(universityInput).toBeVisible();

await universityInput.click();           // sometimes helps open dropdown
await universityInput.fill("UCFB London");  // most React auto-completes react best to .fill()
await page.keyboard.press("Enter");


const submitBtn = page.getByRole("button",{name:'Submit'}).first();

await submitBtn.click();


// ✅ Modal ka locator (text ke basis pe)
const successModal = page.getByText("Your enquiry has been submitted").locator("..");

// 1. Modal visible hai ya nahi
await expect(successModal).toBeVisible();

console.log(`Forex form email - ${email}`);

})



