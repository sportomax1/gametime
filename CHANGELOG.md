# Changelog

## v015 - Box-out timing rings and rebound leverage

Built the next small playable iteration on top of v014.

### Added

- New versioned playable file at `versions/gametime_v015.html`
- Box-Out Timing feedback panel showing timing window, leverage, ring progress, and rebound bonus
- On-court rebound timing ring that grows during live loose-ball states
- Box-out / jump timing logic that rewards inside position and better timing near the loose ball
- Rebound resolution now accounts for size, distance, timing, and box-out bonus rather than only proximity
- Updated mobile/desktop control copy so `K` and Jump clearly support rebound box-out timing
- `latest.html` now points to v015
- `index.html`, README, and Playwright smoke test updated for v015

### Why this was chosen

v014 made missed shots continue into live rebound battles. The next best step was making those board battles more readable and more skill-based. v015 gives the user a visible timing ring, a box-out feedback panel, and a small reward loop for getting inside position before jumping.

### Recommended next improvements

- Add a dedicated mobile viewport Playwright test that drags the joystick and verifies movement
- Add basic foul/over-the-back outcomes around bad rebound contact
- Add simple end-of-game box score and team stat summary
- Move league/team/player data out of the single HTML file
- Add a practice/free-shoot mode for testing shot and rebound systems quickly

## v014 - Rebound battles and loose-ball pickups

Built the next small playable iteration on top of v013.

### Added

- New versioned playable file at `versions/gametime_v014.html`
- Missed shots now create a live rebound / loose-ball state instead of immediately swapping possession
- Rebound Battle feedback panel showing timing, board battle density, loose-ball type, and result
- On-court rebound marker so players can chase the ball after misses
- Jump timing near the loose-ball marker can secure a rebound
- Offensive rebounds reset the shot clock to 14; defensive rebounds reset it to 24
- Camera logic can track a loose ball while rebound play is active
- `latest.html` now points to v014
- `index.html`, README, and Playwright smoke test updated for v014

### Why this was chosen

v013 improved hands-on control with joystick movement, auto offense, and faster input feedback. The next best basketball foundation step was missed-shot continuation. Rebounds make possessions feel alive, create second-chance offense, and prevent every miss from feeling like an automatic hard reset.

### Recommended next improvements

- Add a dedicated mobile viewport Playwright test that drags the joystick and verifies movement
- Add clearer rebound timing rings and box-out indicators
- Add simple end-of-game box score and team stat summary
- Move league/team/player data out of the single HTML file
- Add basic fouls/whistles around heavy shot contests and rebound contact

## v013 - Mobile joystick, auto offense, and quick action response

Built the next small playable iteration on top of v012.

### Added

- New versioned playable file at `versions/gametime_v013.html`
- Mobile analog joystick movement, replacing the older button-only movement pad foundation
- No-highlight/tap-cleanup CSS to reduce accidental mobile text selection and touch artifacts
- Auto Offense toggle so AI can keep the possession moving when the user switches to an off-ball teammate
- Off-ball pass request behavior: pressing pass while controlling a teammate can ask the ball handler to pass to that player
- Quick camera display pill and actual zoom/center changes for Full Court, Broadcast, Player Follow, and Half Court
- Jump/block and steal actions on desktop and mobile
- Action feedback pill and on-court action pulses for quicker pass, shoot, switch, jump/block, and steal response
- `latest.html` now points to v013
- `index.html`, README, and Playwright smoke test updated for v013

### Why this was chosen

v012 made screen defense more basketball-aware. The next best step was improving feel and control clarity, especially on mobile: analog movement, no accidental text highlighting, a clear Auto Offense setting, and faster visual response to camera/action inputs. This keeps the game playable while pushing it closer to a responsive realistic-arcade sports game.

### Recommended next improvements

- Add a dedicated mobile viewport Playwright test that drags the joystick and verifies movement
- Add clearer button cooldowns for steal/block so defensive inputs feel skill-based instead of spammable
- Add rebound timing and loose-ball pickup after missed shots
- Move league/team/player data out of the single HTML file
- Add a simple end-of-game box score and team stat summary

## v012 - Defensive switching and hedge coverage

Built the next small playable iteration on top of v011.

### Added

- New versioned playable file at `versions/gametime_v012.html`
- Defense Coverage panel showing scheme, action, pressure, and result
- Basic screen-response logic where defenders can hedge or switch against a called screen
- Screen coverage feedback connected to the existing Screen Feedback panel
- On-court coverage rings/colors so hedge and switch defenders are easier to read
- `latest.html` now points to v012
- `index.html`, README, and Playwright smoke test updated for v012

### Why this was chosen

v011 made the court easier to see on mobile. The next best basketball foundation step was making the defense react to the screen system added in v010. Screens now create a defensive decision instead of only creating offensive advantage, which moves the game closer to realistic arcade basketball.

### Recommended next improvements

- Add clearer on-court screen arrows and ball-handler path hints
- Add a simple end-of-game box score and team stat summary
- Move league/team/player data out of the single HTML file
- Add mobile viewport Playwright coverage for HUD and controls
- Add basic fouls/whistles around heavy screen contact and shot contests

## v011 - Compact Teams drawer and clear-court mobile flow

Built the next small playable iteration on top of v010.

### Added

- New versioned playable file at `versions/gametime_v011.html`
- Compact Teams drawer behavior focused on keeping the playing area readable
- Teams drawer now starts open for setup, then auto-hides after pressing Start
- New Teams button reopens or hides the matchup drawer without needing the keyboard
- `T` now uses the same drawer state as the Teams button
- Player HUD now shows whether the Teams drawer is open or hidden
- Landing page, latest pointer, README, and Playwright smoke test updated for v011

### Why this was chosen

v010 made screens matter physically, which improved basketball feel. The next best step was not another gameplay feature; it was protecting the court view, especially on mobile. Team select is useful, but it should not sit on top of the action forever. v011 keeps setup accessible while making the actual game area clearer after tip-off.

### Recommended next improvements

- Add defensive switching or hedge behavior against screens
- Add clearer on-court screen arrows and ball-handler path hints
- Move league/team/player data out of the single HTML file
- Add a dedicated mobile viewport Playwright test for clear-court behavior
- Add simple end-of-game box score and team stat summary

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
- Add a mobile viewport test for team select plus clear-court HUD behavior

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
- Established preserved version files, `latest.html`, landing page, changelog, and Playwright smoke test foundation
