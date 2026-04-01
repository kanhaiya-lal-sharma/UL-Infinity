

 const { test, expect } = require("@playwright/test");

test("Room Essentials Vas form", async ({ page }) => {

  await page.goto("/");

  await page.getByRole("navigation")
    .getByRole("button", { name: "Essentials", exact: true })
    .click();

  await page.getByRole("link", { name: "Room Essentials", exact: true }).click();

  await expect(page).toHaveURL(/roomessentials/);

   // Form load hone ka time do (bahut zaroori)
  await page.waitForTimeout(5000); // 5 seconds wait – dynamic phone field ke liye

  // First Name, Last Name, Email (yeh already chal rahe hain, short rakha)
  await page.locator('input[name="firstName"]:visible').first().fill("kanhaiya");
  await page.locator('input[name="lastName"]:visible').first().fill("sharma");
  await page.locator('input[name="email"]:visible').first().fill("kanhaiya@yopmail.com");

  //phone Number


const phoneInput = page.locator('.react-tel-input input').nth(1);

await phoneInput.click();
await page.keyboard.press("Control+A");
await page.keyboard.press("Backspace");
await page.keyboard.type("8851658991");

  //Destination country

  
const nationality = page.locator('select[name="country"]:visible').first();

await nationality.waitFor({ state: "visible" });
await nationality.selectOption("Australia");


const submitBtn = page.getByRole("button",{name:"Get Room Essentials"}).first();

await submitBtn.click();


await page.getByRole("button", { name: "View Kit" }).nth(10).click();

});