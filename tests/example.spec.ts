import { test, expect } from "@playwright/test";

test("example test", async ({ page }) => {
  await page.goto("/");
  const title = page.locator("h1");
  await expect(title).toHaveText(
    "Playwright: Run E2E Tests against your Vercel Deployment using GitHub Actions"
  );
});
