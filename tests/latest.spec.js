const { test, expect } = require('@playwright/test');
const path = require('path');
const { pathToFileURL } = require('url');

test('latest Gametime build renders v006 basics', async ({ page }) => {
  const latestPath = path.join(__dirname, '..', 'latest.html');
  await page.goto(pathToFileURL(latestPath).href);
  await expect(page).toHaveTitle(/Gametime Basketball v006|Gametime Latest/);
  await expect(page.getByTestId('game-canvas')).toBeVisible();
  await expect(page.getByTestId('scoreboard')).toContainText(/Denver|Canyon/);
  await expect(page.locator('#playerPanel')).toContainText(/Energy|Speed|Cuts/);
  await expect(page.getByTestId('touch-controls')).toBeAttached();
  await expect(page.locator('#touchControls button')).toHaveCount(9);
  await expect(page.getByTestId('hud-toggle')).toBeVisible();
  await expect(page.getByTestId('shot-feedback')).toContainText(/Shot Feedback|Make Chance|Release/);
  await expect(page.getByTestId('pass-feedback')).toContainText(/Pass Feedback|Risk|Lane/);
  await expect(page.getByTestId('cut-feedback')).toContainText(/Off-Ball Cuts|Cut Chance|Lane/);

  await page.getByTestId('hud-toggle').click();
  await expect(page.locator('body')).toHaveClass(/hudExpanded/);
  await page.keyboard.press('KeyH');
  await expect(page.locator('body')).toHaveClass(/hudCollapsed/);
  await page.keyboard.press('KeyC');
  await page.keyboard.press('Tab');
  await page.keyboard.press('Space');
  await page.keyboard.press('KeyJ');
  await page.keyboard.down('Shift');
  await page.keyboard.down('ArrowRight');
  await page.waitForTimeout(300);
  await page.keyboard.up('ArrowRight');
  await page.keyboard.up('Shift');
});
