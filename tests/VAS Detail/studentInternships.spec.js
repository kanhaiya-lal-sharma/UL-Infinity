
 const { test, expect } = require("@playwright/test");
 const { generateUniqueData } = require("../../utils/testData");

test("student internship Vas form", async ({ page }) => {

  await page.goto("/");

  await page.getByRole("navigation")
    .getByRole("button", { name: "Career", exact: true })
    .click();

  await page.getByRole("link", { name: "Student Internships", exact: true }).click();

  await expect(page).toHaveURL(/student-internships/);


    const {phoneNo, eno,Fname,Lname } = generateUniqueData();

  const email = `studentInternship_${eno}.university@yopmail.com` ;

   
  await page.waitForTimeout(5000); 

  const country = page.locator('select[name="country"]:visible').first();

await country.waitFor({ state: "visible" });
await country.selectOption("Australia");



  // First Name, Last Name, Email (yeh already chal rahe hain, short rakha)
  await page.locator('input[name="firstName"]:visible').first().fill(Fname);
  await page.locator('input[name="lastName"]:visible').first().fill(Lname);
  await page.locator('input[name="email"]:visible').first().fill(email);


//phone Number


const phoneInput = page.getByPlaceholder("Phone number *").nth(1);

await phoneInput.click();
await page.keyboard.press("Control+A");
await page.keyboard.press("Backspace");
await phoneInput.type(phoneNo);


const submitBtn = page.getByRole("button",{name:"Apply Now"}).first();
await submitBtn.click();


console.log(`Student Internships  form email - ${email}`);


});