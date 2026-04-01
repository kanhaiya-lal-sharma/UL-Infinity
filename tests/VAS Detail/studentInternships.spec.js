
 const { test, expect } = require("@playwright/test");

test("student internship Vas form", async ({ page }) => {

  await page.goto("/");

  await page.getByRole("navigation")
    .getByRole("button", { name: "Career", exact: true })
    .click();

  await page.getByRole("link", { name: "Student Internships", exact: true }).click();

  await expect(page).toHaveURL(/student-internships/);

   // Form load hone ka time do (bahut zaroori)
  await page.waitForTimeout(5000); // 5 seconds wait – dynamic phone field ke liye

  const country = page.locator('select[name="country"]:visible').first();

await country.waitFor({ state: "visible" });
await country.selectOption("Australia");



  // First Name, Last Name, Email (yeh already chal rahe hain, short rakha)
  await page.locator('input[name="firstName"]:visible').first().fill("kanhaiya");
  await page.locator('input[name="lastName"]:visible').first().fill("sharma");
  await page.locator('input[name="email"]:visible').first().fill("kanhaiya@yopmail.com");


//phone Number


const phoneInput = page.getByPlaceholder("Phone number *").nth(1);

await phoneInput.click();
await page.keyboard.press("Control+A");
await page.keyboard.press("Backspace");
await phoneInput.type("8851658991");


const submitBtn = page.getByRole("button",{name:"Apply Now"}).first();
await submitBtn.click();



});