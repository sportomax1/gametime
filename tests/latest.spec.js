const { test, expect } = require('@playwright/test');
const path = require('path');
const { pathToFileURL } = require('url');

test('latest Gametime build renders without console errors', async ({ page }) => {
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  page.on('console', msg => {
    if (msg.type() === 'error') errors.push(msg.text());
  });

  const latestPath = path.join(__dirname, '..', 'latest.html');
  await page.goto(pathToFileURL(latestPath).href);
  await expect(page).toHaveTitle(/Gametime Basketball v001|Gametime Latest/);
  await expect(page.getByTestId('game-canvas')).toBeVisible();
  await expect(page.getByTestId('scoreboard')).toContainText(/Metro|Canyon/);
  await page.keyboard.press('KeyC');
  await page.keyboard.press('Tab');
  await page.keyboard.press('Space');
  await page.waitForTimeout(500);

  expect(errors).toEqual([]);
});
