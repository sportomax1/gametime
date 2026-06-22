const { test, expect } = require('@playwright/test');
const path = require('path');
const { pathToFileURL } = require('url');

function latestUrl() {
  return pathToFileURL(path.join(__dirname, '..', 'latest.html')).href;
}

test('latest Gametime build renders v028 matchup read systems', async ({ page }) => {
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  page.on('console', msg => {
    if (msg.type() === 'error') errors.push(msg.text());
  });

  await page.addInitScript(() => {
    Math.random = () => 0.99;
  });

  await page.goto(latestUrl());
  await expect(page).toHaveTitle(/Gametime Basketball v028|Gametime Latest/);
  await expect(page.getByTestId('game-canvas')).toBeVisible();
  await expect(page.getByTestId('scoreboard')).toContainText(/Denver|Canyon|SHOT|FOULS|FT|BONUS|2FT/);
  await expect(page.locator('#playerPanel')).toContainText(/Control|Ball|Stamina|SHO|PAS|REB|DEF|Camera|Auto O/);
  await expect(page.getByTestId('touch-controls')).toBeAttached();
  await expect(page.getByTestId('joystick')).toBeAttached();
  await expect(page.locator('#joyBase')).toBeAttached();
  await expect(page.locator('#touchControls button')).toHaveCount(16);
  await expect(page.getByTestId('camera-pill')).toContainText(/Camera: Full Court/);
  await expect(page.getByTestId('action-pill')).toContainText(/Ready/);
  await expect(page.getByTestId('auto-offense-toggle')).toContainText(/Auto Offense: On/);
  await expect(page.getByTestId('hud-toggle')).toBeVisible();
  await expect(page.getByTestId('team-toggle')).toBeAttached();
  await expect(page.getByTestId('rules-toggle')).toBeAttached();
  await expect(page.getByTestId('team-panel')).toContainText(/Matchup Builder|League|Start|Auto Offense|Next Camera|Show Summary|End Game/i);
  await expect(page.getByTestId('rules-drawer')).toContainText(/Rules Drawer|Length|Shot Clock|Foul Limit|Bonus|Apply Rules|Force Bonus|Practice FT|Release FT/i);
  await expect(page.locator('#homeSelect option')).toHaveCount(10);
  await expect(page.locator('#awaySelect option')).toHaveCount(10);
  await expect(page.getByTestId('rating-panel')).toContainText(/Player Ratings|Controlled|SHO \/ PAS|REB \/ DEF|FT \/ SPD|Ratings drive outcomes/);
  await expect(page.getByTestId('stamina-panel')).toContainText(/Stamina \/ Turbo|Controlled|Turbo|Fatigue|Recovery/);
  await expect(page.getByTestId('matchup-feedback')).toContainText(/Matchup Read|Handler|Primary Defender|Pressure|Edge/);
  await expect(page.getByTestId('shot-feedback')).toContainText(/Shot Feedback|Make Chance|Release|Zone/);
  await expect(page.getByTestId('pass-feedback')).toContainText(/Pass Feedback|Risk|Lane/);
  await expect(page.getByTestId('realism-panel')).toContainText(/Realism Tuning|2PT FG|3PT FG|FT%|Matchups/);
  await expect(page.getByTestId('playcall-panel')).toContainText(/Play Call|Cut|Screen|Space|Iso/);
  await expect(page.getByTestId('stat-summary')).toContainText(/Game Stats|Home FG|Away FG|FT|Free throws|REB|OREB|Boards/);
  await expect(page.getByTestId('free-throw-feedback')).toContainText(/Free Throw Timing|Shooter|Trip|Meter|Result|Practice FT/);
  await expect(page.getByTestId('bonus-feedback')).toContainText(/Bonus Watch|Home Bonus|Away Bonus|Rule|Two-shot bonus|Outcome|Side-out before bonus/);
  await expect(page.getByTestId('rebound-feedback')).toContainText(/Rebound Battle|Timing|Battle|Loose Ball|Outcome/);
  await expect(page.getByTestId('foul-feedback')).toContainText(/Foul Watch|Type|Risk|Team Fouls|Outcome/);
  await expect(page.getByTestId('end-summary')).toBeAttached();

  await page.selectOption('#homeSelect', '2');
  await page.selectOption('#awaySelect', '3');
  await page.locator('#startMatch').click();
  await expect(page.getByTestId('scoreboard')).toContainText(/Metro|Bay City|SHOT|FOULS|FT|BONUS/);
  await expect(page.locator('body')).toHaveClass(/teamCollapsed/);
  await expect(page.locator('#teamBadge')).toContainText(/Match started|Tap Teams|press T/i);
  await page.getByTestId('team-toggle').click();
  await expect(page.locator('body')).toHaveClass(/teamOpen/);

  await page.getByTestId('rules-toggle').click();
  await expect(page.locator('body')).toHaveClass(/rulesOpen/);
  await page.selectOption('#gameLengthSelect', '120');
  await page.selectOption('#shotClockSelect', '18');
  await page.selectOption('#foulLimitSelect', '4');
  await page.selectOption('#bonusFormatSelect', 'oneAndOne');
  await page.getByTestId('apply-rules').click();
  await expect(page.getByTestId('rules-drawer')).toContainText(/2:00|18|4|One-and-one/);
  await expect(page.getByTestId('scoreboard')).toContainText(/SHOT|18|LIMIT 4|1\+1/);

  await page.getByTestId('hud-toggle').click();
  await expect(page.locator('body')).toHaveClass(/hudExpanded/);
  await page.keyboard.press('Digit1');
  await expect(page.getByTestId('playcall-panel')).toContainText(/Cut|Spacing|Read/);
  await page.keyboard.press('Digit2');
  await expect(page.getByTestId('playcall-panel')).toContainText(/Screen|Create advantage/);
  await page.keyboard.press('Digit3');
  await expect(page.getByTestId('playcall-panel')).toContainText(/Space/);
  await page.keyboard.press('Digit4');
  await expect(page.getByTestId('playcall-panel')).toContainText(/Iso/);

  await page.getByTestId('auto-offense-toggle').click();
  await expect(page.getByTestId('auto-offense-toggle')).toContainText(/Auto Offense: Off/);
  await page.getByTestId('auto-offense-toggle').click();
  await expect(page.getByTestId('auto-offense-toggle')).toContainText(/Auto Offense: On/);
  await page.keyboard.press('KeyC');
  await expect(page.getByTestId('camera-pill')).toContainText(/Broadcast|Player Follow|Half Court|Full Court/);
  await page.keyboard.press('Tab');
  await expect(page.getByTestId('action-pill')).toContainText(/Control:/);
  await expect(page.getByTestId('rating-panel')).toContainText(/SHO|PAS|REB|DEF|FT|SPD/);
  await expect(page.getByTestId('matchup-feedback')).toContainText(/Primary Defender|creator edge|Heavy|Moderate|Soft/);
  await page.keyboard.press('Space');
  await expect(page.getByTestId('pass-feedback')).toContainText(/Complete|Deflected|Risk|Lane|PAS|Crowded/);
  await page.keyboard.press('KeyJ');
  await expect(page.getByTestId('shot-feedback')).toContainText(/Make Chance|Two|Three|SHO|Heavy|Moderate|Light/);
  await expect(page.getByTestId('rebound-feedback')).toContainText(/Rebound Battle|Ratings matter|Press K|Miss/i);
  await page.keyboard.press('KeyK');
  await expect(page.getByTestId('rebound-feedback')).toContainText(/Offensive rebound|Defensive rebound|Secured|REB/i);

  await page.getByTestId('practice-ft').click();
  await expect(page.getByTestId('free-throw-feedback')).toContainText(/Free Throw Timing|1 of 2|Practice FT|FT/);
  await page.waitForTimeout(150);
  await expect(page.getByTestId('free-throw-feedback')).toContainText(/Meter \d+%/);
  await page.getByTestId('shoot-ft').click();
  await expect(page.getByTestId('free-throw-feedback')).toContainText(/Perfect|Good|Early|Late|Made|Miss|2 of 2|Next FT|Trip complete/);

  await page.getByTestId('bonus-demo').click();
  await expect(page.getByTestId('bonus-feedback')).toContainText(/Bonus Watch|Yes|One-and-one|Bonus|Outcome/);
  await expect(page.getByTestId('scoreboard')).toContainText(/BONUS|FOULS|FT|1\+1/);
  await page.keyboard.press('KeyN');
  await expect(page.getByTestId('bonus-feedback')).toContainText(/Two-shot bonus|Outcome|Rule toggled/);

  await page.getByTestId('summary-button').click();
  await expect(page.getByTestId('end-summary')).toHaveClass(/show/);
  await expect(page.getByTestId('end-summary')).toContainText(/Game Summary|Score|FG|3PT|FT|REB|OREB|FOULS|AVG SHO \/ DEF|RULES|MATCHUP READ/);
  await page.locator('#closeSummary').click();
  await page.getByTestId('quick-end').click();
  await expect(page.getByTestId('end-summary')).toHaveClass(/show/);
  await expect(page.getByTestId('end-summary')).toContainText(/Final Buzzer|Ratings|matchups|wins|Tie game/);

  expect(errors).toEqual([]);
});

test('mobile joystick responds without text selection artifacts', async ({ browser }) => {
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
  await expect(page).toHaveTitle(/Gametime Basketball v028|Gametime Latest/);
  await expect(page.getByTestId('touch-controls')).toBeVisible();
  await expect(page.locator('body')).toHaveCSS('user-select', /none/);
  await expect(page.locator('#touchControls button')).toHaveCount(16);
  await page.locator('[data-action="rules"]').click();
  await expect(page.locator('body')).toHaveClass(/rulesOpen|rulesCollapsed/);
  await page.locator('[data-action="bonusRule"]').click();
  await expect(page.getByTestId('bonus-feedback')).toContainText(/One-and-one|Two-shot bonus|Outcome|Rule toggled/);

  const box = await page.locator('#joyBase').boundingBox();
  expect(box).not.toBeNull();
  await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
  await page.mouse.down();
  await page.mouse.move(box.x + box.width * 0.85, box.y + box.height / 2, { steps: 4 });
  await expect(page.locator('#joyKnob')).not.toHaveCSS('transform', 'matrix(1, 0, 0, 1, 0, 0)');
  await page.mouse.up();

  await expect(page.getByTestId('scoreboard')).toContainText(/SHOT|FT|BONUS/);
  expect(errors).toEqual([]);
  await context.close();
});
