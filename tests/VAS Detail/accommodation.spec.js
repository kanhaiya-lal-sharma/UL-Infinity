

const { test, expect } = require("@playwright/test");
const { generateUniqueData } = require("../../utils/testData");

test("Accommodation vas form", async ({ page }) => {


  test.setTimeout(60000);
  await page.goto("/");

  await page.getByRole("button", { name: "Housing" }).click();

  await page
    .getByRole("navigation")
    .getByRole("link", { name: "Accommodation", exact: true })
    .click();

  await expect(page).toHaveURL(/accommodation/);

  
  await page.waitForTimeout(5000); 

  const {phoneNo, eno } = generateUniqueData();

  const email = `accommodation_${eno}.university@yopmail.com` ;

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


  // Nationality


const nationality = page.locator('select[name="nationality"]:visible').first();

await nationality.waitFor({ state: "visible" });
await nationality.selectOption("indian");

//University  University


const universityInput = page
  .getByRole('main')
  .getByRole('combobox', { name: 'University*' })
  .first();   // or .nth(0)

// Optional: make sure it's the visible one in the main form
await expect(universityInput).toBeVisible();

await universityInput.click();           // sometimes helps open dropdown
await universityInput.fill("UCFB London");  // most React auto-completes react best to .fill()

// Wait for suggestion popup
await page.waitForSelector('[role="listbox"] [role="option"]', { timeout: 10000 });

// Prefer getByRole over plain text locator for accessibility
await page
  .getByRole('option', { name: 'UCFB London' })
  .click();

// Optional safety check
await expect(universityInput).toHaveValue(/UCFB London/i);


const exploreBtn = page.getByRole("button",{name:'Explore properties'}).first();

await exploreBtn.click();

const thankModal = page.getByText("We have received your request. Our experts will get back to you shortly. Click below to proceed.").locator("..")

const processBtn = thankModal.getByRole("button",{name:"Proceed"});


  // 🔥 NEW TAB HANDLE (IMPORTANT PART)
  const [newPage] = await Promise.all([
    page.context().waitForEvent('page'), // wait for new tab
    processBtn.click()                   // click triggers new tab
  ]);

  // Wait for new tab to load
  await newPage.waitForLoadState();

  // ✅ URL verification on NEW TAB
  await expect(newPage).toHaveURL(/ucfb-london/);

  // Optional: extra validation
  await expect(newPage).toHaveTitle(/UCFB London/i);

  console.log(`Accommodatin form Email - ${email}`);

  

});

