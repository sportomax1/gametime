const { test, expect } = require('@playwright/test');
const path = require('path');
const { pathToFileURL } = require('url');

test('latest Gametime build renders v020 free throw systems', async ({ page }) => {
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  page.on('console', msg => {
    if (msg.type() === 'error') errors.push(msg.text());
  });

  const latestPath = path.join(__dirname, '..', 'latest.html');
  await page.goto(pathToFileURL(latestPath).href);
  await expect(page).toHaveTitle(/Gametime Basketball v020|Gametime Latest/);
  await expect(page.getByTestId('game-canvas')).toBeVisible();
  await expect(page.getByTestId('scoreboard')).toContainText(/Denver|Canyon|SHOT|FOULS|FT/);
  await expect(page.locator('#playerPanel')).toContainText(/Control|Ball|Energy|Speed|Camera|Auto O/);
  await expect(page.getByTestId('touch-controls')).toBeAttached();
  await expect(page.getByTestId('joystick')).toBeAttached();
  await expect(page.locator('#joyBase')).toBeAttached();
  await expect(page.locator('#touchControls button')).toHaveCount(13);
  await expect(page.getByTestId('camera-pill')).toContainText(/Camera: Full Court/);
  await expect(page.getByTestId('action-pill')).toContainText(/Ready/);
  await expect(page.getByTestId('auto-offense-toggle')).toContainText(/Auto Offense: On/);
  await expect(page.getByTestId('hud-toggle')).toBeVisible();
  await expect(page.getByTestId('team-toggle')).toBeAttached();
  await expect(page.getByTestId('team-panel')).toContainText(/Matchup Builder|League|Start|Auto Offense|Next Camera|Show Summary|End Game|Practice FT|Shoot FT/);
  await expect(page.locator('#homeSelect option')).toHaveCount(10);
  await expect(page.locator('#awaySelect option')).toHaveCount(10);
  await expect(page.getByTestId('shot-feedback')).toContainText(/Shot Feedback|Make Chance|Release|Zone/);
  await expect(page.getByTestId('pass-feedback')).toContainText(/Pass Feedback|Risk|Lane/);
  await expect(page.getByTestId('realism-panel')).toContainText(/Realism Tuning|2PT FG|3PT FG|FT%|Fouls/);
  await expect(page.getByTestId('playcall-panel')).toContainText(/Play Call|Cut|Screen|Space|Iso/);
  await expect(page.getByTestId('stat-summary')).toContainText(/Game Stats|Home FG|Away FG|FT|Free throws|TO|STL|Ball security/);
  await expect(page.getByTestId('screen-feedback')).toContainText(/Screen Feedback|Contact|Roll\/Pop|Separation/);
  await expect(page.getByTestId('defense-feedback')).toContainText(/Defense Coverage|Actions|Pressure|Result/);
  await expect(page.getByTestId('contest-feedback')).toContainText(/Contest Whistle|Timing|Verticality|Distance|Whistle/);
  await expect(page.getByTestId('free-throw-feedback')).toContainText(/Free Throw Flow|Shooter|Trip|Rate|Result/);
  await expect(page.getByTestId('rebound-feedback')).toContainText(/Rebound Battle|Timing|Battle|Loose Ball|Outcome/);
  await expect(page.getByTestId('boxout-feedback')).toContainText(/Box-Out Timing|Window|Leverage|Ring|Bonus/);
  await expect(page.getByTestId('foul-feedback')).toContainText(/Foul Watch|Type|Risk|Team Fouls|Outcome/);
  await expect(page.getByTestId('end-summary')).toBeAttached();

  await page.selectOption('#homeSelect', '2');
  await page.selectOption('#awaySelect', '3');
  await page.locator('#startMatch').click();
  await expect(page.getByTestId('scoreboard')).toContainText(/Metro|Bay City|SHOT|FOULS|FT/);
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
  await expect(page.getByTestId('rebound-feedback')).toContainText(/Rebound Battle|Ready|Track|Box out|Jump now|Waiting|Chase/);
  await expect(page.getByTestId('foul-feedback')).toContainText(/Foul Watch|Clean|Late shot contest|Shooting foul|Team Fouls|Play on|free throws/i);
  await page.keyboard.press('KeyK');
  await expect(page.getByTestId('action-pill')).toContainText(/Block|Jump|contest|Free throws|Whistle/i);
  await expect(page.getByTestId('contest-feedback')).toContainText(/Contest Whistle|Ready|On time|Late|Vertical|Forward lean|Whistle|Clean|Shooting foul/);

  await page.getByTestId('practice-ft').click();
  await expect(page.getByTestId('free-throw-feedback')).toContainText(/Free Throw Flow|Practice trip|1 of 2|%/);
  await page.getByTestId('shoot-ft').click();
  await expect(page.getByTestId('free-throw-feedback')).toContainText(/Made free throw|Missed free throw|Trip complete|2 of 2/);
  await page.keyboard.press('KeyF');
  await expect(page.getByTestId('scoreboard')).toContainText(/FT/);
  await expect(page.getByTestId('stat-summary')).toContainText(/FT|Free throws/);

  await page.getByTestId('summary-button').click();
  await expect(page.getByTestId('end-summary')).toHaveClass(/show/);
  await expect(page.getByTestId('end-summary')).toContainText(/Game Summary|Score|FG|3PT|FT|REB|OREB|TO|STL|BLK|FOULS/);
  await page.locator('#closeSummary').click();
  await page.getByTestId('quick-end').click();
  await expect(page.getByTestId('end-summary')).toHaveClass(/show/);
  await expect(page.getByTestId('end-summary')).toContainText(/Final Buzzer|FG|3PT|FT|REB|OREB|TO|STL|BLK|FOULS|wins|leads|Tie game/);

  expect(errors).toEqual([]);
});