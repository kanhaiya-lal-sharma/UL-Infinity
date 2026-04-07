
const { test, expect } = require("@playwright/test");
 const { generateUniqueData } = require("../../utils/testData");

test("Luggage Storage Vas form", async ({ page }) => {

  await page.goto("/");

  await page.getByRole("button", { name: "Essentials" }).first().click();
  await page.getByRole("link", { name: "Luggage Storage", exact: true }).click();

  await expect(page).toHaveURL(/luggage-storage/);

  const {phoneNo, eno ,Fname ,Lname} = generateUniqueData();

  const email = `luggageStorage_${eno}.university@yopmail.com` ;


   await page.waitForTimeout(5000); 

  await page.getByRole("button", { name: "Book Now" }).first().click();

   const modal = page.getByText("Get Luggage Storage Service").last().locator("..");

   
 

  await page.locator("//input[@name='firstName']").nth(1).fill(Fname);

   await page.locator("//input[@name='lastName']").nth(1).fill(Lname);

   await page.locator("//input[@name='email']").nth(1).fill(email);



const phoneInput = page.locator('.react-tel-input input').nth(1);

await phoneInput.click();
await page.keyboard.press('Control+A'); 
await page.keyboard.press('Backspace'); 
await phoneInput.type(phoneNo);


   const submitBtn = page.getByRole("button",{name:"Submit"}).nth(1);
   await submitBtn.click();

   console.log(`Luggage Storage form email - ${email}`);

});
