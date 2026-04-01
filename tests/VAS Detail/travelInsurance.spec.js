


const { test, expect } = require("@playwright/test");

test("Travel Insurance Vas form", async ({ page }) => {

  await page.goto("/");

  await page.getByRole("navigation")
    .getByRole("button", { name: "Travel", exact: true })
    .click();

  await page.getByRole("link", { name: "Travel Insurance", exact: true }).click();

  await expect(page).toHaveURL(/travel-insurance/);

  const submitBtn = page.getByRole("button", { name: "Book Now" }).first();

  await submitBtn.click();

  // // 🔥 Handle new tab
  // const [newPage] = await Promise.all([
  //   page.context().waitForEvent("page"),
  //   submitBtn.click()
  // ]);

  // await newPage.waitForLoadState();

  // // ✅ Correct URL check
  // await expect(newPage).toHaveURL(/travel-insurance\?journey=start/);
});