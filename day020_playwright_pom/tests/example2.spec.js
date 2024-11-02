const { test, expect } = require("@playwright/test");
import { Homepage } from "../pages/homepage";
import { TopMenu } from "../pages/topMenu";

// AAA
// Arrange, Act, Assert

const URL = "https://playwright.dev/";
let homepage;
let topMenu;

test.beforeEach("Load website", async ({ page }) => {
  homepage = new Homepage(page);
  topMenu = new TopMenu(page);
  await page.goto(URL);
});

////////////////////////////////////////////////////////////////////////////////

test.describe("Playwright website", () => {
  test("has title", async ({ page }) => {
    await expect(page).toHaveTitle(/Playwright/);
  });

  test("get started link", async ({ page }) => {
    await homepage.clickStartedButton();

    // Assertion
    await expect(
      page.getByRole("heading", { name: "Installation" })
    ).toBeVisible();
  });

  test("check Java page", async ({ page }) => {
    await homepage.clickStartedButton();
    await topMenu.hoverNodeJsButton();
    await topMenu.clickJavaButton();

    // Assertion
    await expect(page).toHaveURL("https://playwright.dev/java/docs/intro");
    await expect(
      page.getByText("Installing Playwright", { exact: true })
    ).not.toBeVisible();
    const javaDescription = `Playwright is distributed as a set of Maven modules. The easiest way to use it is to add one dependency to your project's pom.xml as described below. If you're not familiar with Maven please refer to its documentation.`;
    await expect(page.getByText(javaDescription)).toBeVisible();
  });
});
