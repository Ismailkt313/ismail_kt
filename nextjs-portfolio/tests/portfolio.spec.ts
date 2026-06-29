import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test.describe("Portfolio E2E Verification Suite", () => {
	test("should load home page and verify headers", async ({ page }) => {
		await page.goto("/");
		await expect(page).toHaveTitle(/Muhammed Ismail KT/);

		// Verify Pulsing Status Pill exists
		const statusPill = page.locator(".hero-status-pill");
		await expect(statusPill).toBeVisible();
		await expect(statusPill).toContainText("Available for opportunities");
	});

	test("should navigate page routes cleanly", async ({ page }) => {
		await page.goto("/");

		// About page navigation
		await page.goto("/about");
		await expect(page.locator("h1.about-title")).toBeVisible();

		// Projects page navigation
		await page.goto("/projects");
		await expect(page.locator(".all-projects-container")).toBeVisible();
	});

	test("should check dynamic case study routes and details", async ({ page }) => {
		// Go directly to ErrorLens case study
		await page.goto("/projects/errorlens");

		// Verify case study title & structural sections
		await expect(page.locator(".case-study-title")).toContainText("ErrorLens");
		await expect(page.locator("h2:has-text('Problem Statement')")).toBeVisible();
		await expect(page.locator(".architecture-diagram")).toBeVisible();
	});

	test("should trigger contact form validations on bad inputs", async ({ page }) => {
		await page.goto("/contact");
		await page.waitForLoadState("networkidle");

		// Wait for the form to be fully rendered and hydrated
		await page.waitForSelector(".contact-form", { state: "visible" });
		// Small delay to ensure React hydration completes in WebKit
		await page.waitForTimeout(500);

		// Try submitting empty form
		await page.click(".form-submit-btn");

		// Wait for validation errors to appear
		await expect(page.locator("#name-error")).toBeVisible({ timeout: 5000 });
		await expect(page.locator("#email-error")).toBeVisible({ timeout: 5000 });

		// Fill in invalid email format
		await page.fill("#contact-name", "John Doe");
		await page.fill("#contact-email", "bad-email");
		await page.fill("#contact-subject", "Test Subject");
		await page.fill("#contact-message", "This is a test message that has enough characters.");
		await page.click(".form-submit-btn");

		// Wait for re-validation, then verify email syntax validation alert
		await expect(page.locator("#email-error")).toBeVisible({ timeout: 5000 });
		await expect(page.locator("#email-error")).toContainText("Invalid email");
	});

	test("should pass Axe core accessibility checks on home", async ({ page }) => {
		await page.goto("/");
		await page.waitForLoadState("networkidle");

		const results = await new AxeBuilder({ page }).analyze();
		expect(results.violations).toEqual([]);
	});

	test("should pass Axe core accessibility checks on contact", async ({ page }) => {
		await page.goto("/contact");
		await page.waitForLoadState("networkidle");

		const results = await new AxeBuilder({ page }).analyze();
		expect(results.violations).toEqual([]);
	});
});
