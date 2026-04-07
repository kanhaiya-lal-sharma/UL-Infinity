

const { test, expect } = require("@playwright/test");
const { CommonModal } = require("../../pages/commonModal");
const { generateUniqueData } = require("../../utils/testData");

test("Student Flight Ticket Vas form", async ({ page }) => {

    
  test.setTimeout(60000);

  await page.goto("/");

  await page.getByRole("navigation")
    .getByRole("button", { name: "Travel", exact: true })
    .click();

  await page.getByRole("link", { name: "Student Flight Tickets", exact: true }).click();

  await expect(page).toHaveURL(/students-flight-ticket/);

  const {phoneNo, eno,Fname,Lname } = generateUniqueData();

  const email = `studentFlightTicket_${eno}.university@yopmail.com` ;




const flyingToButton = page.getByRole("button", { name: "Flying To" });


await flyingToButton.click();

const dropdown = flyingToButton.locator('.airport-dropdown');


await dropdown.waitFor({ state: 'visible', timeout: 10000 });


const searchInput = dropdown.getByPlaceholder("Search by city, airport, or code");

await expect(searchInput).toBeVisible({ timeout: 5000 });
await searchInput.fill("New York");


await dropdown
    .getByRole("button")                  
    .filter({ hasText: /New York/i })     
    .first()                              
    .click();

await page.getByRole("button", { name: "SEARCH FLIGHT TICKETS" }).click();

 
   const modal = page.getByText("Book Flight Tickets").locator("..");

  await page.locator("//input[@name='firstName']").nth(1).fill(Fname);

   await page.locator("//input[@name='lastName']").nth(1).fill(Lname);

   await page.locator("//input[@name='email']").nth(1).fill(email);

   const phoneInput = page.locator(".react-tel-input input").nth(1);

   await phoneInput.click();
   await page.keyboard.press("Control+A");
  await page.keyboard.press("Backspace");
   await phoneInput.type(phoneNo);



   const submitBtn = page.getByRole("button",{name:"Search flights"});
   await submitBtn.click();

console.log(`Student flight ticket  form email - ${email}`);

});

