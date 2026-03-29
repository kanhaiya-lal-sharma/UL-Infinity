

const { test, expect } = require("@playwright/test");
const { CommonModal } = require("../../pages/commonModal");

test("Student Flight Ticket Vas form", async ({ page }) => {

    
  test.setTimeout(60000);

  await page.goto("/");

  await page.getByRole("navigation")
    .getByRole("button", { name: "Travel", exact: true })
    .click();

  await page.getByRole("link", { name: "Student Flight Tickets", exact: true }).click();

  await expect(page).toHaveURL(/students-flight-ticket/);



// "Flying To" button ko locator banao
const flyingToButton = page.getByRole("button", { name: "Flying To" });

// Dropdown kholo
await flyingToButton.click();

// Ab dropdown ko button ke relative locator se lo (best practice)
const dropdown = flyingToButton.locator('.airport-dropdown');

// Wait for THIS specific dropdown
await dropdown.waitFor({ state: 'visible', timeout: 10000 });

// Ab search input bhi isi dropdown ke andar
const searchInput = dropdown.getByPlaceholder("Search by city, airport, or code");

await expect(searchInput).toBeVisible({ timeout: 5000 });
await searchInput.fill("New York");
//await page.keyboard.press("Enter");

await dropdown
    .getByRole("button")                  // suggestions button hote hain
    .filter({ hasText: /New York/i })     // text mein New York ho
    .first()                              // pehla match (usually main city)
    .click();

await page.getByRole("button", { name: "SEARCH FLIGHT TICKETS" }).click();

 
   const modal = page.getByText("Book Flight Tickets").locator("..");

  await page.locator("//input[@name='firstName']").nth(1).fill("Kanhaiya");

   await page.locator("//input[@name='lastName']").nth(1).fill("sharma");

   await page.locator("//input[@name='email']").nth(1).fill("kanhaiya@yopmail.com");

   const phoneInput = page.locator(".react-tel-input input").nth(1);

   await phoneInput.click();
   await page.keyboard.press("Control+A");
  await page.keyboard.press("Backspace");
   await phoneInput.type("8851658991");



   const submitBtn = page.getByRole("button",{name:"Search flights"});
   await submitBtn.click();

});

