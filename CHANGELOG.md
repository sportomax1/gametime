# Changelog

## v010 - Screen contact and pick-and-roll reads

Built the next small playable iteration on top of v009.

### Added

- New versioned playable file at `versions/gametime_v010.html`
- Screen Feedback panel showing screen action, defender contact count, roll/pop outcome, and separation
- Screen contact behavior: defenders are slowed when they clip an active screener instead of sliding through every pick cleanly
- Successful screen contact can turn the screener into a roll/pop passing target
- Passing target logic now rewards roll/pop targets created by screens
- Shot logic can reward screen-created separation without making percentages cartoonishly high
- Live realism panel now includes screen hits in the sample notes
- `latest.html` now points to v010
- `index.html` now links to v010 through v001
- README and Playwright smoke test updated for v010

### Why this was chosen

v009 added the fake-league matchup builder, but the Screen call still behaved more like a suggestion than basketball contact. The next best foundation step was making screens physically matter: defenders slow down when they run into a pick, the screener can roll or pop, and the pass system can recognize that new advantage. This keeps the project moving toward realistic arcade basketball before adding larger playbook systems.

### Recommended next improvements

- Add defensive switching or hedge behavior against screens
- Add clearer on-court screen arrows and ball-handler path hints
- Add a compact mobile-only team selector that hides automatically after tip-off
- Move league/team/player data out of the single HTML file
- Add a mobile viewport Playwright test for team select plus clear-court HUD behavior

## v009 - Fictional team select and matchup identity

- Added `versions/gametime_v009.html`
- Added Matchup Builder for choosing the user-controlled home team and fake opponent
- Expanded the fake league directory to 10 selectable fictional clubs
- Added team identity feedback and `T` to minimize/reopen the selector
- Updated latest pointer, landing page, README, and tests

## v008 - Basic play-call controls

- Added `versions/gametime_v008.html`
- Added Cut, Screen, Space, and Iso calls on desktop and mobile
- Added Play Call feedback panel with timer, intent, and result
- Space and Iso alter spacing; Cut accelerates cutter windows; Screen sends a big toward the ball handler

## v007 - Realism tuning and possession direction

- Added `versions/gametime_v007.html`
- Added live 2PT%, 3PT%, turnover, possession, and shot sample tracking
- Added possession direction arrows and clearer attacking-hoop indicators
- Tuned shot, pass, steal, and cut probability caps toward realistic arcade outcomes

## v006 - Off-ball cuts, mobile HUD collapse, and realistic arcade tuning

- Added `versions/gametime_v006.html`
- Added off-ball cuts with visible passing windows
- Added collapsible HUD behavior for keeping the mobile court readable
- Tuned shot/pass/steal/cut probability ranges

## v005 - Passing lane risk and interceptions

- Added `versions/gametime_v005.html`
- Added pass feedback, pass lane preview, defender lane checks, and interception outcomes
- Added smarter pass target scoring with shooting value, spacing, advancement, separation, and lane danger

## v004 - Shot feedback and make-chance UI

- Added `versions/gametime_v004.html`
- Added shot feedback for release, contest, zone/distance, and expected make chance
- Added shot outcome copy and dashed shot arc indicator

## v003 - Denver Peaks and mobile controls

- Added `versions/gametime_v003.html`
- Added Denver Peaks as the primary fictional user-controlled team
- Added a lightweight fictional league directory
- Added mobile touch controls and shared keyboard/touch input handling

## v002 - Movement and dribble polish

- Added `versions/gametime_v002.html`
- Added momentum-based movement, sprint/energy behavior, dribble bounce, body lean, and speed readout

## v001 - First playable foundation

- Added the first playable HTML Canvas basketball prototype
- Established preserved version files, `latest.html`, landing page, README, changelog, and Playwright smoke test foundation
