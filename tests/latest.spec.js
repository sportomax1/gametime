const { test, expect } = require('@playwright/test');
const path = require('path');
const { pathToFileURL } = require('url');

test('latest Gametime build renders v018 final recap systems', async ({ page }) => {
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  page.on('console', msg => {
    if (msg.type() === 'error') errors.push(msg.text());
  });

  const latestPath = path.join(__dirname, '..', 'latest.html');
  await page.goto(pathToFileURL(latestPath).href);
  await expect(page).toHaveTitle(/Gametime Basketball v018|Gametime Latest/);
  await expect(page.getByTestId('game-canvas')).toBeVisible();
  await expect(page.getByTestId('scoreboard')).toContainText(/Denver|Canyon|SHOT|FOULS/);
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
  await expect(page.getByTestId('team-panel')).toContainText(/Matchup Builder|League|Start|Auto Offense|Next Camera|Show Summary|End Game/);
  await expect(page.locator('#homeSelect option')).toHaveCount(10);
  await expect(page.locator('#awaySelect option')).toHaveCount(10);
  await expect(page.getByTestId('shot-feedback')).toContainText(/Shot Feedback|Make Chance|Release|Zone/);
  await expect(page.getByTestId('pass-feedback')).toContainText(/Pass Feedback|Risk|Lane/);
  await expect(page.getByTestId('realism-panel')).toContainText(/Realism Tuning|2PT FG|3PT FG|OREB|Fouls/);
  await expect(page.getByTestId('playcall-panel')).toContainText(/Play Call|Cut|Screen|Space|Iso/);
  await expect(page.getByTestId('stat-summary')).toContainText(/Game Stats|Home FG|Away FG|REB|OREB|TO|STL|Board control|Ball security/);
  await expect(page.getByTestId('screen-feedback')).toContainText(/Screen Feedback|Contact|Roll\/Pop|Separation/);
  await expect(page.getByTestId('defense-feedback')).toContainText(/Defense Coverage|Actions|Pressure|Result/);
  await expect(page.getByTestId('rebound-feedback')).toContainText(/Rebound Battle|Timing|Battle|Loose Ball|Outcome/);
  await expect(page.getByTestId('boxout-feedback')).toContainText(/Box-Out Timing|Window|Leverage|Ring|Bonus/);
  await expect(page.getByTestId('foul-feedback')).toContainText(/Foul Watch|Type|Risk|Team Fouls|Outcome/);
  await expect(page.getByTestId('end-summary')).toBeAttached();

  await page.selectOption('#homeSelect', '2');
  await page.selectOption('#awaySelect', '3');
  await page.locator('#startMatch').click();
  await expect(page.getByTestId('scoreboard')).toContainText(/Metro|Bay City|SHOT|FOULS/);
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
  await expect(page.getByTestId('stat-summary')).toContainText(/0\/0|TO|STL|REB|FG/);
  await page.keyboard.press('KeyJ');
  await expect(page.getByTestId('shot-feedback')).toContainText(/Make Chance|Paint|Close|Mid|Three|Logo/);
  await expect(page.getByTestId('stat-summary')).toContainText(/FG|3PT|REB|OREB|TO|STL/);
  await expect(page.getByTestId('rebound-feedback')).toContainText(/Rebound Battle|Ready|Track|Box out|Jump now|Waiting|Chase|Secured/);
  await expect(page.getByTestId('boxout-feedback')).toContainText(/Box-Out Timing|Ready|Build position|Sweet spot|Late|Ring|Bonus/);
  await expect(page.getByTestId('foul-feedback')).toContainText(/Foul Watch|Clean|Rebound contact|Reach check|Over-the-back|Loose-ball|Reach-in|Team Fouls|Play on|Side out|Defense ball|Offense keeps/);
  await page.keyboard.press('KeyK');
  await expect(page.getByTestId('action-pill')).toContainText(/Block|Jump|Hop|Protect|Rebound jump|box-out|Whistle|Perfect/i);
  await page.keyboard.press('KeyL');
  await expect(page.getByTestId('action-pill')).toContainText(/steal|Reach|Protect|Rebound jump|box-out|Whistle|foul|Perfect/i);
  await page.keyboard.down('Shift');
  await page.keyboard.down('ArrowRight');
  await page.waitForTimeout(300);
  await page.keyboard.up('ArrowRight');
  await page.keyboard.up('Shift');

  await page.getByTestId('summary-button').click();
  await expect(page.getByTestId('end-summary')).toHaveClass(/show/);
  await expect(page.getByTestId('end-summary')).toContainText(/Live Game Summary|Score|FG|3PT|Rebounds|Turnovers|Fouls/);
  await page.locator('#closeSummary').click();
  await page.evaluate(() => window.__gametimeDebug.forceEndGame());
  await expect(page.getByTestId('end-summary')).toHaveClass(/show/);
  await expect(page.getByTestId('end-summary')).toContainText(/Final Buzzer Recap|Score|FG|3PT|Off\. Rebounds|Turnovers|Steals|Blocks|Fouls|Paint Points|won because|Tie game/);

  expect(errors).toEqual([]);
});
