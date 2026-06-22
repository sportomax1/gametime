const { test, expect } = require('@playwright/test');
const path = require('path');
const { pathToFileURL } = require('url');

function latestUrl() {
  return pathToFileURL(path.join(__dirname, '..', 'latest.html')).href;
}

test('latest Gametime build renders v030 live matchup labels', async ({ page }) => {
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  page.on('console', msg => {
    if (msg.type() === 'error') errors.push(msg.text());
  });

  await page.addInitScript(() => {
    Math.random = () => 0.99;
  });

  await page.goto(latestUrl());
  await expect(page).toHaveTitle(/Gametime Basketball v030|Gametime Latest/);
  await expect(page.getByTestId('game-canvas')).toBeVisible();
  await expect(page.getByTestId('scoreboard')).toContainText(/DEN|CAN|SHOT/);
  await expect(page.locator('#playerPanel')).toContainText(/Control|Ball|Energy|Camera|Auto O/);
  await expect(page.getByTestId('touch-controls')).toBeAttached();
  await expect(page.getByTestId('joystick')).toBeAttached();
  await expect(page.locator('#joyBase')).toBeAttached();
  await expect(page.locator('#touchControls button')).toHaveCount(8);
  await expect(page.getByTestId('camera-pill')).toContainText(/Camera: Full Court/);
  await expect(page.getByTestId('action-pill')).toContainText(/Ready/);
  await expect(page.getByTestId('auto-offense-toggle')).toContainText(/Auto Offense: On/);
  await expect(page.getByTestId('team-panel')).toContainText(/Matchup Builder|League|Start|Auto Offense|Next Camera/i);
  await expect(page.locator('#homeSelect option')).toHaveCount(10);
  await expect(page.locator('#awaySelect option')).toHaveCount(10);
  await expect(page.getByTestId('matchup-panel')).toContainText(/Live Matchup|Handler|Defender|Pressure|Edge/);
  await expect(page.getByTestId('shot-feedback')).toContainText(/Shot Feedback|Make Chance|Release|Zone/);
  await expect(page.getByTestId('pass-feedback')).toContainText(/Pass Feedback|Risk|Lane/);
  await expect(page.getByTestId('stats-panel')).toContainText(/Realism Pulse|2PT|3PT|REB|TO/);

  await page.selectOption('#homeSelect', '2');
  await page.selectOption('#awaySelect', '3');
  await page.locator('#startMatch').click();
  await expect(page.getByTestId('scoreboard')).toContainText(/MET|BAY|SHOT/);
  await expect(page.locator('body')).toHaveClass(/teamCollapsed/);
  await expect(page.locator('#teamBadge')).toContainText(/Match started|Tap Teams/i);
  await page.getByTestId('team-toggle').click();
  await expect(page.locator('body')).toHaveClass(/teamOpen/);

  await page.getByTestId('hud-toggle').click();
  await expect(page.locator('body')).toHaveClass(/hudExpanded/);
  await expect(page.getByTestId('matchup-panel')).toContainText(/Handler|Defender|Pressure|Edge/);
  await page.keyboard.press('KeyC');
  await expect(page.getByTestId('camera-pill')).toContainText(/Broadcast|Player Follow|Half Court|Full Court/);
  await page.keyboard.press('Tab');
  await expect(page.getByTestId('action-pill')).toContainText(/Control switched/);
  await page.keyboard.press('Space');
  await expect(page.getByTestId('pass-feedback')).toContainText(/Complete|Turnover|Risk|Lane/);
  await page.keyboard.press('KeyJ');
  await expect(page.getByTestId('shot-feedback')).toContainText(/Make Chance|Paint|Close|Mid|Three/);
  await page.keyboard.press('KeyK');
  await expect(page.getByTestId('action-pill')).toContainText(/jumps|contests/i);
  await page.keyboard.press('KeyL');
  await expect(page.getByTestId('action-pill')).toContainText(/reaches|pokes/i);

  expect(errors).toEqual([]);
});

test('mobile joystick responds without text selection artifacts in v030', async ({ browser }) => {
  const context = await browser.newContext({
    viewport: { width: 390, height: 844 },
    isMobile: true,
    hasTouch: true
  });
  const page = await context.newPage();
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  page.on('console', msg => {
    if (msg.type() === 'error') errors.push(msg.text());
  });

  await page.goto(latestUrl());
  await expect(page).toHaveTitle(/Gametime Basketball v030|Gametime Latest/);
  await expect(page.getByTestId('touch-controls')).toBeVisible();
  await expect(page.locator('body')).toHaveCSS('user-select', /none/);
  await expect(page.locator('#touchControls button')).toHaveCount(8);
  await expect(page.getByTestId('matchup-panel')).toBeAttached();

  const box = await page.locator('#joyBase').boundingBox();
  expect(box).not.toBeNull();
  await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
  await page.mouse.down();
  await page.mouse.move(box.x + box.width * 0.85, box.y + box.height / 2, { steps: 4 });
  await expect(page.locator('#joyKnob')).not.toHaveCSS('transform', 'none');
  await page.mouse.up();

  await expect(page.getByTestId('scoreboard')).toContainText(/SHOT/);
  expect(errors).toEqual([]);
  await context.close();
});
