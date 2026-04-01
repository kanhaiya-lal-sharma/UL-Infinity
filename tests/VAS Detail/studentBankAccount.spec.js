

const { test, expect } = require("@playwright/test");

test("Student Bank Account vas form", async ({ page }) => {


  test.setTimeout(60000);
  await page.goto("/");

  await page.getByRole("button", { name: "Finance" }).click();

  await page
    .getByRole("navigation")
    .getByRole("link", { name: "Student E-Money App", exact: true })
    .click();

  await expect(page).toHaveURL(/bank-account/);

  const openAccountBtn = page.getByRole("button",{name:'Open Account'}).first();

  await openAccountBtn.click();

  const bankAccountModal = page .getByText("Leave us your contact details and one of our agents will get in touch with you soon.")
  .locator("..");

await bankAccountModal.waitFor({ state: "visible" });

await bankAccountModal.locator('input[name="firstName"]').fill("kanhaiya");

await bankAccountModal.locator('input[name="lastName"]').fill("lal");

await bankAccountModal.locator('input[name="email"]').fill("kanhaiya@yopmail.com");

const phoneInput = bankAccountModal.locator('.react-tel-input input');

await phoneInput.click();
await page.keyboard.press('Control+A'); // select all (+91)
await page.keyboard.press('Backspace'); // delete
await phoneInput.type('8851658991');

//University  University

const universityInput = bankAccountModal.getByRole('combobox');

await expect(universityInput).toBeVisible();

await universityInput.click();
await universityInput.fill("UCFB London");

// dropdown wait
await page.waitForSelector('[role="option"]');

// select option
await page.getByRole('option', { name: /UCFB London/i }).click();


const submitBtn = bankAccountModal.getByRole("button",{name:'Submit'});

await submitBtn.click();

})
