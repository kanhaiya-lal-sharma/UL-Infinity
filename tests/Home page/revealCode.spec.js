
const { test, expect } = require("@playwright/test");
const { generateUniqueData } = require("../../utils/testData");

test("Reveal code form ",async({page})=>{

   await page.goto("/");

   const formCta =page.getByRole("button",{name:"Reveal code"}).first();

   await formCta.click();

   const {phoneNo, eno } = generateUniqueData();

   const email = `RevealCode_${eno}.university@yopmail.com` ;

         // First Name, Last Name, Email (yeh already chal rahe hain, short rakha)
  await page.locator('input[name="firstName"]:visible').first().fill("kanhaiya");
  await page.locator('input[name="lastName"]:visible').first().fill("sharma");
  await page.locator('input[name="email"]:visible').first().fill(email);


//phone Number


const phoneInput = page.locator('.react-tel-input input');

await phoneInput.click();
await page.keyboard.press("Control+A");
await page.keyboard.press("Backspace");
await phoneInput.type(phoneNo);

await page.getByRole("button",{name:"Search flights"}).click();


console.log(`Reveal Code form email - ${email}`);


})