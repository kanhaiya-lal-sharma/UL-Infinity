

const { test, expect } = require("@playwright/test");
 const { generateUniqueData } = require("../../utils/testData");

test("International Money Transfer vas form", async ({ page }) => {


  test.setTimeout(60000);
  await page.goto("/");

  await page.getByRole("button", { name: "Finance" }).click();

  await page
    .getByRole("navigation")
    .getByRole("link", { name: "International Money Transfer", exact: true })
    .click();

  await expect(page).toHaveURL(/remittance/);

  
const {phoneNo, eno } = generateUniqueData();

  const email = `intMoneyTransfer_${eno}.university@yopmail.com` ;

  
  await page.waitForTimeout(5000); 

  
  await page.locator('input[name="firstName"]:visible').first().fill("kanhaiya");
  await page.locator('input[name="lastName"]:visible').first().fill("sharma");
  await page.locator('input[name="email"]:visible').first().fill(email);


//phone Number



const phoneInput = page.getByPlaceholder("Phone number *").nth(1);

await phoneInput.click();
await page.keyboard.press("Control+A");
await page.keyboard.press("Backspace");
await page.keyboard.type(phoneNo);


//Gender

const gender = page.locator('select[name="gender"]:visible').first();

await expect(gender).toBeVisible();
await gender.selectOption('male');

//Payment type

const paymentType = page.locator('select[name="paymentType"]:visible').first();

await expect(paymentType).toBeVisible();
await paymentType.selectOption('University Fee');

//Source country

const sourceCountry = page.locator('select[name="sourceCountry"]:visible').first();

await expect(sourceCountry).toBeVisible();
await sourceCountry.selectOption('Algeria');

// destination Country

const destinationCountry = page.locator('select[name="destinationCountry"]:visible').first();

await expect(destinationCountry).toBeVisible();
await destinationCountry.selectOption('Australia');

//University  University


const universityInput = page
  .getByRole('main')
  .getByRole('combobox', { name: 'University*' })
  .first();   // or .nth(0)

// Optional: make sure it's the visible one in the main form
await expect(universityInput).toBeVisible();

await universityInput.click();           // sometimes helps open dropdown
await universityInput.fill("UCFB London");  // most React auto-completes react best to .fill()
await page.keyboard.press("Enter");

const sendBtn = page.getByRole("button",{name:'Send Now'}).first();

await sendBtn.click();

// ✅ Modal ka locator (text ke basis pe)
const successModal = page.getByText("Your enquiry has been submitted").locator("..");

// 1. Modal visible hai ya nahi
await expect(successModal).toBeVisible();

console.log(`International money transfer  form email - ${email}`);

jhghgh

jhbjhb

})



