

 const { test, expect } = require("@playwright/test");
 const { generateUniqueData } = require("../../utils/testData");

test("Health insurance Vas form", async ({ page }) => {

  await page.goto("/");

  await page.getByRole("navigation")
    .getByRole("button", { name: "Health", exact: true })
    .click();

  await page.getByRole("link", { name: "Health Insurance", exact: true }).click();

  await expect(page).toHaveURL(/health-insurance/);

  
const {phoneNo, eno ,Fname ,Lname } = generateUniqueData();

  const email = `healthInsurance_${eno}.university@yopmail.com` ;

   
  await page.waitForTimeout(5000); 

  const country = page.locator('select[name="country"]:visible').first();

await country.waitFor({ state: "visible" });
await country.selectOption("United States");



  
  await page.locator('input[name="firstName"]:visible').first().fill(Fname);
  await page.locator('input[name="lastName"]:visible').first().fill(Lname);
  await page.locator('input[name="email"]:visible').first().fill(email);





const phoneInput = page.getByPlaceholder("Phone number *").nth(1);

await phoneInput.click();
await page.keyboard.press("Control+A");
await page.keyboard.press("Backspace");
await phoneInput.type(phoneNo);


const submitBtn = page.getByRole("button",{name:"Get Health Insurance"}).first();
await submitBtn.click();


console.log(`Health Insurance  form email - ${email}`);


});