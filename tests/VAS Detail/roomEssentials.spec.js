

 const { test, expect } = require("@playwright/test");

// test("Airport Pickup Vas form", async ({ page }) => {

//   await page.goto("/");

//   await page.getByRole("navigation")
//     .getByRole("button", { name: "Essentials", exact: true })
//     .click();

//   await page.getByRole("link", { name: "Room Essentials", exact: true }).click();

//   await expect(page).toHaveURL(/roomessentials/);

//   await page.locator('input[name="firstName"]').first().fill("kanhaiya");

// await page.locator('input[name="lastName"]').fill("lal");

// await page.locator('input[name="email"]').fill("kanhaiya@yopmail.com");

// const phoneInput = page.locator('.react-tel-input input');

// await phoneInput.click();
// await page.keyboard.press('Control+A'); // select all (+91)
// await page.keyboard.press('Backspace'); // delete
// await phoneInput.type('8851658991');


// });


// test("Airport Pickup Vas form", async ({ page }) => {
//   await page.goto("/");

//   await page.getByRole("navigation")
//     .getByRole("button", { name: "Essentials", exact: true })
//     .click();

//   await page.getByRole("link", { name: "Room Essentials", exact: true }).click();

//   await expect(page).toHaveURL(/roomessentials/);

//   // Sabse important: visible form ka input target karo
//   await page.locator('input[name="firstName"]:visible').waitFor({ state: 'visible', timeout: 15000 });
  
//   // Ab safely fill – visible filter se sirf ek milega
//   await page.locator('input[name="firstName"]:visible').fill("kanhaiya");
//   await page.locator('input[name="lastName"]:visible').fill("lal");
//   await page.locator('input[name="email"]:visible').fill("kanhaiya@yopmail.com");

//   // Phone ke liye bhi visible
//   const phoneInput = page.locator('.react-tel-input input:visible');
//   await phoneInput.waitFor({ state: 'visible' });
//   await phoneInput.click();
//   await page.keyboard.press('Control+A');
//   await page.keyboard.press('Backspace');
//   await phoneInput.fill('8851658991');  // .fill() zyada reliable hai type() se

//   // Optional: submit check karne ke liye
//   // await page.getByRole('button', { name: 'Get Room Essentials' }).click();
// });


test("Airport Pickup Vas form", async ({ page }) => {
  await page.goto("/");

  await page.getByRole("navigation")
    .getByRole("button", { name: "Essentials", exact: true })
    .click();

  await page.getByRole("link", { name: "Room Essentials", exact: true }).click();

  await expect(page).toHaveURL(/roomessentials/);


await page.waitForLoadState('networkidle');

  // First name – DOM mein pehla wala (main form ka)
  const firstNameLocator = page.getByPlaceholder('First name*').nth(0);
  await firstNameLocator.waitFor({ state: 'visible', timeout: 15000 });
  await firstNameLocator.fill('Kanhaiya');

  // Same pattern baaki sab ke liye
  await page.getByPlaceholder('Last name*').nth(0).fill('Kumar');
  await page.getByPlaceholder('Email *').nth(0).fill('kanhaiya.test@example.com');

  // Phone
  const phoneLocator = page.getByPlaceholder('Phone number *').nth(0);
  await phoneLocator.click();
  await page.keyboard.press('Control+A');
  await page.keyboard.press('Backspace');
  await phoneLocator.fill('8851658991');

  // Country dropdown
  await page.getByLabel('Destination Country').nth(0).selectOption('United Kingdom');

  // Submit button – bhi nth(0) se
  await page.getByRole('button', { name: 'Get Room Essentials' }).nth(0).click();
});