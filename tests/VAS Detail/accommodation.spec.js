

const { test, expect } = require("@playwright/test");

test("Accommodation vas form", async ({ page }) => {
  await page.goto("https://dev-vas.universityliving.com/");

  await page.getByRole("button", { name: "Housing" }).click();

  await page
    .getByRole("navigation")
    .getByRole("link", { name: "Accommodation", exact: true })
    .click();

  await expect(page).toHaveURL(/accommodation/);

  // Form load hone ka time do (bahut zaroori)
  await page.waitForTimeout(5000); // 5 seconds wait – dynamic phone field ke liye

  // First Name, Last Name, Email (yeh already chal rahe hain, short rakha)
  await page.locator('input[name="firstName"]:visible').first().fill("kanhaiya");
  await page.locator('input[name="lastName"]:visible').first().fill("sharma");
  await page.locator('input[name="email"]:visible').first().fill("kanhaiya@yopmail.com");


//phone Number

 const phoneInput = page.getByPlaceholder("Phone number *").nth(1);
  await phoneInput.fill("8851658991");

  // Nationality

  await page.getByRole("combobox",{name:"nationality"}).selectOption("Indian");
 
});