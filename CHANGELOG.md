# Changelog

## v018 - Final buzzer recap and why-they-won summary

Built the next small playable iteration on top of v017.

### Added

- New versioned playable file at `versions/gametime_v018.html`
- End-of-game recap overlay that appears when the clock reaches 0:00
- Manual `Show Summary` / `End Game` controls for checking the recap without waiting through a full game
- Final summary table for score, FG, 3PT, rebounds, offensive rebounds, turnovers, steals, blocks, fouls, and paint points
- Why-they-won explanation that chooses the strongest visible edge from shooting, rebounding, ball security, steals, or foul discipline
- `E` keyboard shortcut for summary preview
- Debug hook for Playwright to force the final buzzer and verify the overlay
- `latest.html` now points to v018
- `index.html`, README, and Playwright smoke test updated for v018

### Why this was chosen

v017 made the game track basketball events like shots, rebounds, turnovers, steals, fouls, and blocks. The next best step was to cash those stats out into a game-ending presentation layer. v018 gives every short arcade game a payoff screen and starts moving the project toward broadcast-style context instead of ending with only a clock and score.

### Recommended next improvements

- Add shot-contest fouls for late block attempts
- Add a dedicated mobile viewport Playwright test that drags the joystick and confirms movement
- Move league/team/player data out of the single HTML file
- Add a practice/free-shoot mode for testing shot, rebound, and foul systems quickly
- Add team color/name styling to the final recap table

## v017 - Live team stat summary and box-score pacing

Built the next small playable iteration on top of v016.

### Added

- New versioned playable file at `versions/gametime_v017.html`
- Game Stats feedback panel showing live FG, 3PT, rebounds, offensive rebounds, turnovers, and steals
- Live stat model for field goals, threes, rebounds, offensive rebounds, turnovers, steals, blocks, fouls, and paint points
- Shot makes/misses now update shooting splits instead of only changing the score
- Interceptions and shot-clock violations now add turnovers; steals and rebounds update the box-score totals
- Rebound outcomes now feed live team rebound and offensive rebound counts
- `latest.html` now points to v017
- `index.html`, README, and Playwright smoke test updated for v017

### Why this was chosen

v016 added whistles and foul consequences around rebounds and reach-ins. The next best step was a lightweight team-stat layer so the game can start checking whether its arcade systems produce believable basketball outcomes over time. This also gives every small system a scoreboard-level footprint: shots affect percentages, rebounds affect possession quality, and bad passes show up as turnovers.

### Recommended next improvements

- Add a dedicated mobile viewport Playwright test that drags the joystick and confirms movement
- Add shot-contest fouls for late block attempts
- Add a simple end-of-game summary overlay using the new stat model
- Move league/team/player data out of the single HTML file
- Add a practice/free-shoot mode for testing shot, rebound, and foul systems quickly

## v016 - Rebound foul risk and whistle feedback

Built the next small playable iteration on top of v015.

### Added

- New versioned playable file at `versions/gametime_v016.html`
- Foul Watch feedback panel showing contact type, foul risk, team foul count, and outcome
- Rebound crash logic where late or out-of-position board attempts can become over-the-back or loose-ball fouls
- Reach-in steal attempts now carry foul risk instead of being free poke attempts every time
- Team fouls are shown in the scoreboard and tracked separately for both fake teams
- On-court rebound copy now warns when late crashes may trigger a whistle
- `latest.html` now points to v016
- `index.html`, README, and Playwright smoke test updated for v016

### Why this was chosen

v015 made rebounds skill-based with timing rings and inside-position bonuses. The next best basketball step was consequences for bad rebound attempts. v016 keeps the board battle playable but adds realistic arcade risk: crash from the wrong side or jump late and the whistle can punish you. That should make rebounds feel less like bumper cars and more like basketball contact.

### Recommended next improvements

- Add a small end-of-game team stat summary with fouls, turnovers, rebounds, and shooting splits
- Add a mobile viewport Playwright test that drags the joystick and confirms movement
- Add shot-contest fouls for late block attempts
- Move league/team/player data out of the single HTML file
- Add a practice/free-shoot mode for testing shot and rebound systems quickly

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
