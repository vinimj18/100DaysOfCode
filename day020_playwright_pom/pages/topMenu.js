import { Locator, Page } from "@playwright/test";

export class TopMenu {
  constructor(page) {
    this.page = page;
    this.getNodeJsButton = page.getByRole("button", { name: "Node.js" });
    this.getJavaButton = page
      .getByRole("navigation", { name: "Main" })
      .getByText("Java");
  }
  async hoverNodeJsButton() {
    await this.getNodeJsButton.hover();
  }
  async clickJavaButton() {
    await this.getJavaButton.click();
  }
}

export default TopMenu;
