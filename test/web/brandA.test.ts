import { test, expect } from "@playwright/test";
import { BrowserManager } from "../../core/browser.js";

test("UI test: check Add/Remove Elements page", async () => {
    const browserManager = new BrowserManager();
    const page = await browserManager.launch();

    // Navigate to Add/Remove Elements page
    await page.goto(`${process.env.BASE_URL_BRANDA}add_remove_elements/`);

    // Click the "Add Element" button
    const addButton = page.locator('button', { hasText: 'Add Element' });
    await addButton.click();

    // Verify "Delete" button appears
    const deleteButton = page.locator('button', { hasText: 'Delete' });
    await expect(deleteButton).toHaveCount(1);

    await browserManager.close();
});