import { Locator, Page } from "@playwright/test";

export class Homepage {
  // Constructor
  constructor(page) {
    this.page = page;
    this.getStartedButton = page.getByRole("link", { name: "Get started" });
  }

  // Methods
  async clickStartedButton() {
    await this.getStartedButton.click();
  }
}

export default Homepage;
