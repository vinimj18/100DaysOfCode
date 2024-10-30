// @ts-check
const { test, expect } = require("@playwright/test");

test("has title", async ({ page }) => {
  await page.goto(
    "https://https://www.linkedin.com/in/vinicius-maggiotto-justen/"
  );

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/linkedin/);
});
