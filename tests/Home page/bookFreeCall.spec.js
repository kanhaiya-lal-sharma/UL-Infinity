
const { test, expect } = require("@playwright/test");
const { generateUniqueData } = require("../../utils/testData");

test("Book free call",async({page})=>{

    await page.goto("/");

    await page.getByRole("button",{name:'Book a free call'}).click();


     
const {phoneNo, eno ,Fname ,Lname } = generateUniqueData();


  const email = `BookFreeCall_${eno}.university@yopmail.com` ;

  
  await page.locator('input[name="firstName"]:visible').first().fill(Fname);
  await page.locator('input[name="lastName"]:visible').first().fill(Lname);
  await page.locator('input[name="email"]:visible').first().fill(email);




const phoneInput = page.locator('.react-tel-input input');

await phoneInput.click();
await page.keyboard.press("Control+A");
await page.keyboard.press("Backspace");
await phoneInput.type(phoneNo);



const universityInput = page
  .getByRole('combobox', { name: 'University*' })
  .first();   


await expect(universityInput).toBeVisible();

await universityInput.click();           
await universityInput.fill("UCFB London");  

await page.waitForSelector('[role="listbox"] [role="option"]', { timeout: 10000 });


await page
  .getByRole('option', { name: 'UCFB London' })
  .click();



const dateInput = page.locator('label:has-text("Select Date")').locator('..').locator('input');

await dateInput.click();
await expect(page.locator('.react-datepicker')).toBeVisible();


await page.waitForSelector('.react-datepicker__day', { timeout: 10000 });


await page.locator('.react-datepicker__day--030:not(.react-datepicker__day--outside-month)').click();

await page.getByLabel('Hour').selectOption('10');
await page.getByLabel('Minute').selectOption('30');


const submitBtn = await page.getByRole("button",{name:"Schedule Callback"}).click();

console.log(`Book fee call  form email - ${email}`);

})