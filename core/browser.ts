import { chromium } from "@playwright/test";
import type { Browser, Page } from "@playwright/test";

export class BrowserManager {
    browser: Browser | undefined;
    page: Page | undefined;

    async launch() {
        this.browser = await chromium.launch({ headless: true });
        this.page = await this.browser.newPage();
        return this.page;
    }

    async close() {
        await this.browser?.close();
    }
}