import { test, expect } from "@playwright/test";
import { ApiClient } from "../../core/apiClient.js";

test("API test: fetch posts", async () => {
    const client = new ApiClient();
    const response = await client.get("/posts");

    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);
    expect(response.data.length).toBeGreaterThan(0);

    // Optional: verify a specific post property
    expect(response.data[0]).toHaveProperty("id");
    expect(response.data[0]).toHaveProperty("title");
});