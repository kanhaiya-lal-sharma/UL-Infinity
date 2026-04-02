

const { test, expect } = require("@playwright/test");
const { CommonModal } = require("../../pages/commonModal");
const { generateUniqueData } = require("../../utils/testData");

test("Airport Pickup Vas form", async ({ page }) => {

  await page.goto("/");

  await page.getByRole("navigation")
    .getByRole("button", { name: "Travel", exact: true })
    .click();


    
const {phoneNo, eno } = generateUniqueData();

  const email = `airportPick_${eno}.university@yopmail.com` ;

  await page.getByRole("link", { name: "Airport Pickup", exact: true }).click();

  await expect(page).toHaveURL(/airport-pickup/);

  await page.getByRole("button", { name: "Find a Pickup" }).first().click();

  const modal = new CommonModal(page);

  await modal.waitForModal();
  await modal.fillForm({
    firstName: "kanhaiya",
    lastName: "lal",
    email: email,
    phone: phoneNo
  });

  await modal.submit();

  console.log(`Airport pickup form email - ${email}`);
});
