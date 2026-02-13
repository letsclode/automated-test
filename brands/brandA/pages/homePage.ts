import type { Page } from "@playwright/test";

export class HomePage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigate() {
           await this.page.goto("https://the-internet.herokuapp.com/");
    }

    async getTitle() {
        return this.page.title();
    }
}