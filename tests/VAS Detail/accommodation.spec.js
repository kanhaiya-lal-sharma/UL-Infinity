

const{test,expect}=require("@playwright/test");


test("Accommodation vas form", async ({ page }) => {

  await page.goto("https://dev-vas.universityliving.com/");

  const housing = page.getByRole('button', { name: "Housing" });
  await housing.click();

  const housingMenu = page.getByRole('navigation');

  await housingMenu.getByRole('link', { name: 'Accommodation', exact: true }).click();

  await expect(page).toHaveURL(/accommodation/);

//   await page.getByRole('textbox',{name:"firstName"}).fill("kanhaiya");

//   await page.getByRole('textbox',{name:"lastName"}).fill("lal");

//   await page.getByRole('textbox',{name:"email"}).fill("klsharma@yopmail.com");

await page.getByPlaceholder('First name*').fill('kanhaiya');
await page.getByPlaceholder('Last name*').fill('lal');
await page.getByPlaceholder('Email *').fill('klsharma@yopmail.com');
await page.getByPlaceholder('Phone number *').fill('9876543210');

await page.locator('select[name="nationality"]').selectOption('indian');

const university = page.getByRole('combobox', { name: 'University' });
await university.fill('ACM Guildford');
await university.press('Enter');

await page.getByRole('button', { name: 'Explore properties' }).click();


});
