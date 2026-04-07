

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

  const {phoneNo, eno, Fname , Lname } = generateUniqueData();

  const email = `accommodation_${eno}.university@yopmail.com` ;

  
  await page.locator('input[name="firstName"]:visible').first().fill(Fname);
  await page.locator('input[name="lastName"]:visible').first().fill(Lname);
  await page.locator('input[name="email"]:visible').first().fill(email);




const phoneInput = page.getByPlaceholder("Phone number *").nth(1);

await phoneInput.click();
await page.keyboard.press("Control+A");
await page.keyboard.press("Backspace");
await phoneInput.type(phoneNo);


  
const nationality = page.locator('select[name="nationality"]:visible').first();

await nationality.waitFor({ state: "visible" });
await nationality.selectOption("indian");




const universityInput = page
  .getByRole('main')
  .getByRole('combobox', { name: 'University*' })
  .first();   

await expect(universityInput).toBeVisible();

await universityInput.click();           
await universityInput.fill("UCFB London");  

await page.waitForSelector('[role="listbox"] [role="option"]', { timeout: 10000 });

await page
  .getByRole('option', { name: 'UCFB London' })
  .click();


await expect(universityInput).toHaveValue(/UCFB London/i);


const exploreBtn = page.getByRole("button",{name:'Explore properties'}).first();

await exploreBtn.click();

const thankModal = page.getByText("We have received your request. Our experts will get back to you shortly. Click below to proceed.").locator("..")

const processBtn = thankModal.getByRole("button",{name:"Proceed"});



  const [newPage] = await Promise.all([
    page.context().waitForEvent('page'), 
    processBtn.click()                   
  ]);

  await newPage.waitForLoadState();


  await expect(newPage).toHaveURL(/ucfb-london/);

  
  await expect(newPage).toHaveTitle(/UCFB London/i);

  console.log(`Accommodatin form Email - ${email}`);

  

});

