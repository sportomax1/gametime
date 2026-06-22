const { test, expect } = require('@playwright/test');
const path = require('path');
const { pathToFileURL } = require('url');

test('latest Gametime build renders v014 rebound and loose-ball systems', async ({ page }) => {
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  page.on('console', msg => {
    if (msg.type() === 'error') errors.push(msg.text());
  });

  const latestPath = path.join(__dirname, '..', 'latest.html');
  await page.goto(pathToFileURL(latestPath).href);
  await expect(page).toHaveTitle(/Gametime Basketball v014|Gametime Latest/);
  await expect(page.getByTestId('game-canvas')).toBeVisible();
  await expect(page.getByTestId('scoreboard')).toContainText(/Denver|Canyon|SHOT/);
  await expect(page.locator('#playerPanel')).toContainText(/Control|Ball|Energy|Speed|Camera|Auto O/);
  await expect(page.getByTestId('touch-controls')).toBeAttached();
  await expect(page.getByTestId('joystick')).toBeAttached();
  await expect(page.locator('#joyBase')).toBeAttached();
  await expect(page.locator('#touchControls button')).toHaveCount(12);
  await expect(page.getByTestId('camera-pill')).toContainText(/Camera: Full Court/);
  await expect(page.getByTestId('action-pill')).toContainText(/Ready/);
  await expect(page.getByTestId('auto-offense-toggle')).toContainText(/Auto Offense: On/);
  await expect(page.getByTestId('hud-toggle')).toBeVisible();
  await expect(page.getByTestId('team-toggle')).toBeAttached();
  await expect(page.getByTestId('team-panel')).toContainText(/Matchup Builder|League|Start|Auto Offense|Next Camera/);
  await expect(page.locator('#homeSelect option')).toHaveCount(10);
  await expect(page.locator('#awaySelect option')).toHaveCount(10);
  await expect(page.getByTestId('shot-feedback')).toContainText(/Shot Feedback|Make Chance|Release|Zone/);
  await expect(page.getByTestId('pass-feedback')).toContainText(/Pass Feedback|Risk|Lane/);
  await expect(page.getByTestId('realism-panel')).toContainText(/Realism Tuning|2PT FG|3PT FG|OREB|Turnover/);
  await expect(page.getByTestId('playcall-panel')).toContainText(/Play Call|Cut|Screen|Space|Iso/);
  await expect(page.getByTestId('screen-feedback')).toContainText(/Screen Feedback|Contact|Roll\/Pop|Separation/);
  await expect(page.getByTestId('defense-feedback')).toContainText(/Defense Coverage|Actions|Pressure|Result/);
  await expect(page.getByTestId('rebound-feedback')).toContainText(/Rebound Battle|Timing|Battle|Loose Ball|Outcome/);

  await page.selectOption('#homeSelect', '2');
  await page.selectOption('#awaySelect', '3');
  await page.locator('#startMatch').click();
  await expect(page.getByTestId('scoreboard')).toContainText(/Metro|Bay City|SHOT/);
  await expect(page.locator('body')).toHaveClass(/teamCollapsed/);
  await expect(page.locator('#teamBadge')).toContainText(/auto-hidden|Tap Teams|press T/i);
  await page.getByTestId('team-toggle').click();
  await expect(page.locator('body')).toHaveClass(/teamOpen/);

  await page.getByTestId('hud-toggle').click();
  await expect(page.locator('body')).toHaveClass(/hudExpanded/);
  await page.keyboard.press('Digit1');
  await expect(page.getByTestId('playcall-panel')).toContainText(/Cut|Rim pressure/);
  await page.keyboard.press('Digit2');
  await expect(page.getByTestId('playcall-panel')).toContainText(/Screen|Create advantage/);
  await expect(page.getByTestId('screen-feedback')).toContainText(/Screen Feedback|Set screen|Contact|Building/);
  await page.keyboard.press('Digit3');
  await expect(page.getByTestId('playcall-panel')).toContainText(/Space|Widen lanes/);
  await page.keyboard.press('Digit4');
  await expect(page.getByTestId('playcall-panel')).toContainText(/Iso|Clear side/);

  await page.getByTestId('auto-offense-toggle').click();
  await expect(page.getByTestId('auto-offense-toggle')).toContainText(/Auto Offense: Off/);
  await page.getByTestId('auto-offense-toggle').click();
  await expect(page.getByTestId('auto-offense-toggle')).toContainText(/Auto Offense: On/);
  await page.keyboard.press('KeyC');
  await expect(page.getByTestId('camera-pill')).toContainText(/Broadcast|Player Follow|Half Court|Full Court/);
  await page.keyboard.press('Tab');
  await expect(page.getByTestId('action-pill')).toContainText(/Control:/);
  await page.keyboard.press('Space');
  await expect(page.getByTestId('pass-feedback')).toContainText(/Complete|Intercepted|Risk|Lane/);
  await page.keyboard.press('KeyJ');
  await expect(page.getByTestId('shot-feedback')).toContainText(/Make Chance|Paint|Close|Mid|Three|Logo/);
  await expect(page.getByTestId('rebound-feedback')).toContainText(/Rebound Battle|Ready|Ball up|Track|Jump now|Waiting|Chase|Secured/);
  await page.keyboard.press('KeyK');
  await expect(page.getByTestId('action-pill')).toContainText(/Block|Jump|Hop|Protect|Rebound jump/);
  await page.keyboard.press('KeyL');
  await expect(page.getByTestId('action-pill')).toContainText(/steal|Reach|Protect|Rebound jump/i);
  await page.keyboard.down('Shift');
  await page.keyboard.down('ArrowRight');
  await page.waitForTimeout(300);
  await page.keyboard.up('ArrowRight');
  await page.keyboard.up('Shift');

  expect(errors).toEqual([]);
});
