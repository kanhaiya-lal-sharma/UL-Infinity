


const { test, expect } = require("@playwright/test");
const { CommonModal } = require("../../pages/commonModal");

test("Luggage Storage Vas form", async ({ page }) => {

  await page.goto("/");

  await page.getByRole("button", { name: "Essentials" }).first().click();
  await page.getByRole("link", { name: "Luggage Storage", exact: true }).click();

  await expect(page).toHaveURL(/luggage-storage/);

  await page.getByRole("button", { name: "Book Now" }).first().click();

 const guarantorModal = page .getByText("Leave us your contact details and one of our agents will get in touch with you soon.")
 .locator("..").first();

await guarantorModal.waitFor({ state: "visible" });

await guarantorModal.locator('input[name="firstName"]').fill("kanhaiya");

await guarantorModal.locator('input[name="lastName"]').fill("lal");

await guarantorModal.locator('input[name="email"]').fill("kanhaiya@yopmail.com");

const phoneInput = guarantorModal.locator('.react-tel-input input');

await phoneInput.click();
await page.keyboard.press('Control+A'); // select all (+91)
await page.keyboard.press('Backspace'); // delete
await phoneInput.type('8851658991');


const submitBtn = guarantorModal.getByRole("button",{name:'Submit'});

await submitBtn.click();

});