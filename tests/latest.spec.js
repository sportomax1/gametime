const { test, expect } = require('@playwright/test');
const path = require('path');
const { pathToFileURL } = require('url');

function latestUrl() {
  return pathToFileURL(path.join(__dirname, '..', 'latest.html')).href;
}

test('latest Gametime build renders v029 coach overlay', async ({ page }) => {
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  page.on('console', msg => {
    if (msg.type() === 'error') errors.push(msg.text());
  });

  await page.goto(latestUrl());
  await expect(page).toHaveTitle(/Gametime Basketball v029|Gametime Latest/);
  await expect(page.getByTestId('version-pill')).toContainText(/v029/);
  await expect(page.getByTestId('screen-switch-coach')).toContainText(/Coverage|Pressure|Matchup|Next Read/);
  await expect(page.getByTestId('game-frame')).toBeVisible();

  const game = page.frameLocator('[data-testid="game-frame"]');
  await expect(game.getByTestId('game-canvas')).toBeVisible();
  await expect(game.getByTestId('scoreboard')).toContainText(/SHOT|FOULS|FT|BONUS/);
  await expect(game.getByTestId('touch-controls')).toBeAttached();
  await expect(game.getByTestId('team-panel')).toContainText(/Matchup Builder/);
  await expect(game.getByTestId('rules-drawer')).toContainText(/Rules Drawer/);
  await expect(game.getByTestId('matchup-feedback')).toContainText(/Matchup Read/);

  await page.getByTestId('cycle-coverage').click();
  await expect(page.getByTestId('screen-switch-coach')).toContainText(/Switch/);
  await page.getByTestId('hide-coach').click();
  await expect(page.getByTestId('screen-switch-coach')).toHaveClass(/hidden/);

  expect(errors).toEqual([]);
});
