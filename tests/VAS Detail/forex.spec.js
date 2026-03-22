

const { test, expect } = require("@playwright/test");

test("forex vas form", async ({ page }) => {


  test.setTimeout(60000);
  await page.goto("/");

  await page.getByRole("button", { name: "Finance" }).click();

  await page
    .getByRole("navigation")
    .getByRole("link", { name: "Forex", exact: true })
    .click();

  await expect(page).toHaveURL(/forex/);

  // Form load hone ka time do (bahut zaroori)
  await page.waitForTimeout(5000); // 5 seconds wait – dynamic phone field ke liye

  // First Name, Last Name, Email (yeh already chal rahe hain, short rakha)
  await page.locator('input[name="firstName"]:visible').first().fill("kanhaiya");
  await page.locator('input[name="lastName"]:visible').first().fill("sharma");
  await page.locator('input[name="email"]:visible').first().fill("kanhaiya@yopmail.com");

  
 const phoneInput = page.getByPlaceholder("Contact Number").nth(1);
  await phoneInput.fill("8851658991");

  
const gender = page.locator('select[name="gender"]:visible').first();

await expect(gender).toBeVisible();
await gender.selectOption('male');

const country = page.locator('select[name="country"]:visible').first();
await country.selectOption('Australia');


const universityInput = page
  .getByRole('main')
  .getByRole('combobox', { name: 'University*' })
  .first();   // or .nth(0)

// Optional: make sure it's the visible one in the main form
await expect(universityInput).toBeVisible();

await universityInput.click();           // sometimes helps open dropdown
await universityInput.fill("UCFB London");  // most React auto-completes react best to .fill()
await page.keyboard.press("Enter");


const submitBtn = page.getByRole("button",{name:'Submit'}).first();

await submitBtn.click();


// ✅ Modal ka locator (text ke basis pe)
const successModal = page.getByText("Your enquiry has been submitted").locator("..");

// 1. Modal visible hai ya nahi
await expect(successModal).toBeVisible();

})



