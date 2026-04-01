


const { test, expect } = require("@playwright/test");
const { CommonModal } = require("../../pages/commonModal");

test("Guarantor Vas form", async ({ page }) => {

  await page.goto("/");

  await page.getByRole("button", { name: "Housing" }).click();
  await page.getByRole("link", { name: "Guarantor", exact: true }).click();

  await expect(page).toHaveURL(/guarantor/);

  await page.getByRole("button", { name: "Find A Guarantor" }).first().click();

  const modal = new CommonModal(page);

  await modal.waitForModal();
  await modal.fillForm({
    firstName: "kanhaiya",
    lastName: "lal",
    email: "kanhaiya@yopmail.com",
    phone: "8851658991"
  });

  await modal.submit();

  
});