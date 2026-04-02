
const { test, expect } = require("@playwright/test");
 const { generateUniqueData } = require("../../utils/testData");

test("Luggage Storage Vas form", async ({ page }) => {

  await page.goto("/");

  await page.getByRole("button", { name: "Essentials" }).first().click();
  await page.getByRole("link", { name: "Luggage Storage", exact: true }).click();

  await expect(page).toHaveURL(/luggage-storage/);

  const {phoneNo, eno } = generateUniqueData();

  const email = `luggageStorage_${eno}.university@yopmail.com` ;

  await page.getByRole("button", { name: "Book Now" }).first().click();

   const modal = page.getByText("Get Luggage Storage Service").last().locator("..");

   
  await page.waitForTimeout(5000); 

  await page.locator("//input[@name='firstName']").nth(1).fill("Kanhaiya");

   await page.locator("//input[@name='lastName']").nth(1).fill("sharma");

   await page.locator("//input[@name='email']").nth(1).fill(email);

  //  const phoneNO = page.locator(".react-tel-input input").nth(1);

  //  await phoneNO.fill("9997141783");

const phoneInput = page.locator('.react-tel-input input').nth(1);

await phoneInput.click();
await page.keyboard.press('Control+A'); // select all (+91)
await page.keyboard.press('Backspace'); // delete
await phoneInput.type(phoneNo);


   const submitBtn = page.getByRole("button",{name:"Submit"}).nth(1);
   await submitBtn.click();

   console.log(`Luggage Storage form email - ${email}`);

});
