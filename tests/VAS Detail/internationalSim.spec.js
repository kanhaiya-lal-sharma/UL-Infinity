

 const { test, expect } = require("@playwright/test");
  const { generateUniqueData } = require("../../utils/testData");

test("International Sim Vas form", async ({ page }) => {

  await page.goto("/");

  await page.getByRole("navigation")
    .getByRole("button", { name: "Essentials", exact: true })
    .click();

  await page.getByRole("link", { name: "International SIM", exact: true }).click();

  await expect(page).toHaveURL(/overseas-sim/);

  
const {phoneNo, eno } = generateUniqueData();

  const email = `internationalSim_${eno}.university@yopmail.com` ;

   
  await page.waitForTimeout(5000); 

  const country = page.locator('select[name="country"]:visible').first();

await country.waitFor({ state: "visible" });
await country.selectOption("Bahrain");

  const provider = page.locator('select[name="provider"]:visible').first();

await provider.waitFor({ state: "visible" });
await provider.selectOption("Zetexa");

  // First Name, Last Name, Email (yeh already chal rahe hain, short rakha)
  await page.locator('input[name="firstName"]:visible').first().fill("kanhaiya");
  await page.locator('input[name="lastName"]:visible').first().fill("sharma");
  await page.locator('input[name="email"]:visible').first().fill(email);


//phone Number


const phoneInput = page.getByPlaceholder("Phone number *").nth(1);

await phoneInput.click();
await page.keyboard.press("Control+A");
await page.keyboard.press("Backspace");
await phoneInput.type(phoneNo);


const submitBtn = page.getByRole("button",{name:"Get International SIM"}).first();
await submitBtn.click();

const cpBtn = page.getByRole("button",{name:"Copy & proceed"}).nth(1);
await cpBtn.click();

console.log(`International Sim   form email - ${email}`);


});