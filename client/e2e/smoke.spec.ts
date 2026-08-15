import { test, expect } from '@playwright/test';

test('home page renders hero', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: /Building a more Human Future for AI/i })).toBeVisible();
  await expect(page.getByRole('navigation', { name: 'Primary' })).toBeVisible();
});

test('navigation reaches about page', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: 'About' }).click();
  await expect(page).toHaveURL(/\/about$/);
  await expect(page.getByRole('heading', { name: /Humanity at the Heart of AI/i })).toBeVisible();
});
