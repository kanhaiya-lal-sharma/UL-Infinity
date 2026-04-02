
const { test, expect } = require("@playwright/test");
const { generateUniqueData } = require("../../utils/testData");

test("Book free call",async({page})=>{

    await page.goto("/");

    await page.getByRole("button",{name:'Book a free call'}).click();


     
const {phoneNo, eno } = generateUniqueData();


  const email = `Bfc_${eno}.university@yopmail.com` ;

  
  await page.locator('input[name="firstName"]:visible').first().fill("kanhaiya");
  await page.locator('input[name="lastName"]:visible').first().fill("sharma");
  await page.locator('input[name="email"]:visible').first().fill(email);


//phone Number


const phoneInput = page.locator('.react-tel-input input');

await phoneInput.click();
await page.keyboard.press("Control+A");
await page.keyboard.press("Backspace");
await phoneInput.type(phoneNo);



const universityInput = page
  .getByRole('combobox', { name: 'University*' })
  .first();   // or .nth(0)

// Optional: make sure it's the visible one in the main form
await expect(universityInput).toBeVisible();

await universityInput.click();           // sometimes helps open dropdown
await universityInput.fill("UCFB London");  // most React auto-completes react best to .fill()

// Wait for suggestion popup
await page.waitForSelector('[role="listbox"] [role="option"]', { timeout: 10000 });

// Prefer getByRole over plain text locator for accessibility
await page
  .getByRole('option', { name: 'UCFB London' })
  .click();



  // open datepicker
const dateInput = page.locator('label:has-text("Select Date")').locator('..').locator('input');

await dateInput.click();
await expect(page.locator('.react-datepicker')).toBeVisible();

// wait for calendar days
await page.waitForSelector('.react-datepicker__day', { timeout: 10000 });

// select 31st of current month
await page.locator('.react-datepicker__day--030:not(.react-datepicker__day--outside-month)').click();

await page.getByLabel('Hour').selectOption('10');
await page.getByLabel('Minute').selectOption('30');


const submitBtn = await page.getByRole("button",{name:"Schedule Callback"}).click();

console.log(email);
console.log(eno);

})