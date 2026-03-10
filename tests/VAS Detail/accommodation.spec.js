

const{test,expect}=require("@playwright/test");


test("Accommodation vas form", async ({ page }) => {

  await page.goto("https://dev-vas.universityliving.com/");

  const housing = page.getByRole('button', { name: "Housing" });
  await housing.click();

  const housingMenu = page.getByRole('navigation');

  await housingMenu.getByRole('link', { name: 'Accommodation', exact: true }).click();

  await expect(page).toHaveURL(/accommodation/);


  await page.getByLabel('First name').fill('Rahul');

});
