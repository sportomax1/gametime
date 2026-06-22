const { test, expect } = require('@playwright/test');
const path = require('path');
const { pathToFileURL } = require('url');

test('latest Gametime build loads and supports v027 stamina systems', async ({ page }) => {
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  page.on('console', msg => {
    if (msg.type() === 'error') errors.push(msg.text());
  });

  const latestUrl = pathToFileURL(path.join(__dirname, '..', 'latest.html')).href;
  await page.goto(latestUrl);
  await expect(page).toHaveTitle(/Gametime Basketball v027/);

  await expect(page.getByTestId('game-canvas')).toBeVisible();
  await expect(page.getByTestId('scoreboard')).toContainText('SHOT');
  await expect(page.getByTestId('team-panel')).toContainText('Matchup Builder');
  await expect(page.getByTestId('rules-drawer')).toContainText('Rules Drawer');
  await expect(page.getByTestId('rating-panel')).toContainText('Player Ratings');
  await expect(page.getByTestId('stamina-panel')).toContainText('Stamina / Turbo');
  await expect(page.getByTestId('touch-controls')).toHaveCount(1);

  await page.getByTestId('hud-toggle').click();
  await page.keyboard.press('Tab');
  await expect(page.locator('#ratingName')).not.toHaveText('--');
  await expect(page.locator('#staminaName')).not.toHaveText('--');

  await page.keyboard.down('Shift');
  await page.keyboard.down('ArrowRight');
  await page.waitForTimeout(350);
  await page.keyboard.up('ArrowRight');
  await page.keyboard.up('Shift');
  await expect(page.locator('#turboState')).not.toHaveText('Ready', { timeout: 2000 });

  await page.keyboard.press('j');
  await expect(page.locator('#shotChance')).not.toHaveText('--');
  await page.keyboard.press(' ');
  await expect(page.locator('#passRisk')).toContainText('%');
  await page.keyboard.press('k');
  await page.keyboard.press('l');
  await expect(page.locator('#foulRisk')).toContainText('%');

  await page.keyboard.press('g');
  await page.getByTestId('game-length-select').selectOption('120');
  await page.getByTestId('shot-clock-select').selectOption('18');
  await page.getByTestId('bonus-format-select').selectOption('oneAndOne');
  await page.getByTestId('apply-rules').click();
  await expect(page.locator('#ruleLength')).toHaveText('2:00');
  await expect(page.locator('#ruleShotClock')).toHaveText('18');
  await expect(page.locator('#ruleBonus')).toHaveText('One-and-one');

  await page.getByTestId('practice-ft').click();
  await page.getByTestId('shoot-ft').click();
  await expect(page.locator('#ftResult')).not.toHaveText('Practice FT');
  await page.getByTestId('bonus-demo').click();
  await expect(page.locator('#bonusOutcome')).toHaveText(/Forced|Side-out|Bonus|test/i);

  await page.getByTestId('summary-button').click();
  await expect(page.getByTestId('end-summary')).toContainText('Avg stamina');

  const userSelect = await page.evaluate(() => getComputedStyle(document.body).userSelect);
  expect(userSelect).toBe('none');
  expect(errors).toEqual([]);
});
