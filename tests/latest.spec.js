const { test, expect } = require('@playwright/test');
const path = require('path');
const { pathToFileURL } = require('url');

test('latest Gametime build renders v010 screen contact basics', async ({ page }) => {
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  page.on('console', msg => {
    if (msg.type() === 'error') errors.push(msg.text());
  });

  const latestPath = path.join(__dirname, '..', 'latest.html');
  await page.goto(pathToFileURL(latestPath).href);
  await expect(page).toHaveTitle(/Gametime Basketball v010|Gametime Latest/);
  await expect(page.getByTestId('game-canvas')).toBeVisible();
  await expect(page.getByTestId('scoreboard')).toContainText(/Denver|Canyon|SHOT/);
  await expect(page.locator('#playerPanel')).toContainText(/Energy|Speed|Team|Call|Screens/);
  await expect(page.getByTestId('touch-controls')).toBeAttached();
  await expect(page.locator('#touchControls button')).toHaveCount(13);
  await expect(page.getByTestId('hud-toggle')).toBeVisible();
  await expect(page.getByTestId('team-panel')).toContainText(/Matchup Builder|League|Start/);
  await expect(page.locator('#homeSelect option')).toHaveCount(10);
  await expect(page.locator('#awaySelect option')).toHaveCount(10);
  await expect(page.getByTestId('shot-feedback')).toContainText(/Shot Feedback|Make Chance|Release|Zone/);
  await expect(page.getByTestId('pass-feedback')).toContainText(/Pass Feedback|Risk|Lane/);
  await expect(page.getByTestId('realism-panel')).toContainText(/Realism Tuning|2PT FG|3PT FG|Turnover/);
  await expect(page.getByTestId('playcall-panel')).toContainText(/Play Call|Cut|Screen|Space|Iso/);
  await expect(page.getByTestId('screen-feedback')).toContainText(/Screen Feedback|Contact|Roll\/Pop|Separation/);

  await page.selectOption('#homeSelect', '2');
  await page.selectOption('#awaySelect', '3');
  await page.locator('#startMatch').click();
  await expect(page.getByTestId('scoreboard')).toContainText(/Metro|Bay City|SHOT/);

  await page.getByTestId('hud-toggle').click();
  await expect(page.locator('body')).toHaveClass(/hudExpanded/);
  await page.keyboard.press('Digit1');
  await expect(page.getByTestId('playcall-panel')).toContainText(/Cut|Attack rim/);
  await page.keyboard.press('Digit2');
  await expect(page.getByTestId('playcall-panel')).toContainText(/Screen|Free ball/);
  await expect(page.getByTestId('screen-feedback')).toContainText(/Screen Feedback|Set screen|Contact|Roll|Pop|Building/);
  await page.keyboard.press('Digit3');
  await expect(page.getByTestId('playcall-panel')).toContainText(/Space|Widen lanes/);
  await page.keyboard.press('Digit4');
  await expect(page.getByTestId('playcall-panel')).toContainText(/Iso|Clear side/);
  await page.keyboard.press('KeyT');
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

  expect(errors).toEqual([]);
});
