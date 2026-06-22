# Changelog

## v024 - Toggleable one-and-one bonus rules

Built the next small playable iteration on top of v023.

### Added

- New versioned playable file at `versions/gametime_v024.html`
- Bonus Rule toggle that switches between two-shot bonus and one-and-one / double-bonus style handling
- `N` keyboard shortcut, Matchup Builder Bonus Rule button, Force 1+1 button, and mobile Rule button for quick rule testing
- One-and-one free throw logic: the first make earns a second shot; a first miss becomes a live lane rebound
- Bonus Watch panel now shows the active bonus rule instead of only a fixed threshold
- Scoreboard and end summary now surface the bonus rule so late-game foul context is visible
- `latest.html` now points to v024
- `index.html`, README, and Playwright smoke test updated for v024

### Why this was chosen

v023 made team fouls matter by awarding bonus free throws after the foul limit. The next best rules-engine step was making the bonus system configurable. v024 adds one-and-one behavior alongside the simple two-shot bonus so the arcade game can support different realistic basketball rule flavors without turning into franchise-management soup.

### Recommended next improvements

- Add a compact Rules drawer for game length, foul limit, bonus format, and shot clock presets
- Add clearer lane-violation timing risk on early free-throw rebounds
- Add a dedicated mobile viewport Playwright test that taps Rule, Bonus, and FT controls
- Move league/team/player data out of the single HTML file
- Add a practice/free-shoot mode for testing shot, rebound, foul, bonus, and free-throw systems quickly

## v023 - Bonus free throws after team-foul threshold

Built the next small playable iteration on top of v022.

### Added

- New versioned playable file at `versions/gametime_v023.html`
- Bonus Watch feedback panel showing home bonus, away bonus, threshold, and foul outcome
- Team-foul bonus rule: non-shooting fouls are side-out fouls before bonus, then become bonus free throws after 5 defending-team fouls
- Force Bonus button, mobile Bonus button, and `B` shortcut for quick rules testing
- Scoreboard now calls out bonus status alongside fouls and free throws
- End-of-game summary now includes bonus status as part of the rules/stat recap
- `latest.html` now points to v023
- `index.html`, README, and Playwright smoke test updated for v023

### Why this was chosen

v022 connected final missed free throws to live lane rebounds. The next best basketball step was making accumulated fouls matter. v023 adds a simple bonus threshold so defensive mistakes have realistic arcade consequences: early non-shooting fouls are side-outs, but once a team reaches the limit, the offense gets free throws. That turns team fouls from scoreboard decoration into actual game pressure.

### Recommended next improvements

- Add one-and-one versus two-shot bonus variations as game rules mature
- Add a dedicated mobile viewport Playwright test that drags the joystick and taps Bonus / FT
- Add clearer lane-violation timing risk on early rebounds
- Move league/team/player data out of the single HTML file
- Add a practice/free-shoot mode for testing shot, rebound, foul, bonus, and free-throw systems quickly

## v022 - Live lane rebounds on final missed free throws

Built the next small playable iteration on top of v021.

### Added

- New versioned playable file at `versions/gametime_v022.html`
- Final missed free throws now stay live instead of becoming automatic possession flips
- Lane-line player alignment during free throws so the court visually prepares for a possible rebound
- Rebound Battle and Box-Out Timing feedback now call out lane release, lane players, final FT misses, and offensive/defensive board outcomes
- Game Stats and end summary now surface rebound / offensive rebound results alongside free throws
- `latest.html` now points to v022
- `index.html`, README, and Playwright smoke test updated for v022

### Why this was chosen

v021 made free throws skill-based with a timing meter. The next best basketball step was handling what happens after the final miss. v022 keeps the ball live, positions lane rebounders, and lets final missed free throws create offensive or defensive board outcomes. That makes foul shots feel connected to real basketball possessions instead of isolated mini coin flips.

### Recommended next improvements

- Add bonus / one-and-one behavior once team fouls matter late in games
- Add a dedicated mobile viewport Playwright test that drags the joystick and taps FT
- Move league/team/player data out of the single HTML file
- Add clearer lane-violation timing risk on early rebounds
- Add a practice/free-shoot mode for testing shot, rebound, foul, and free-throw systems quickly

## v021 - Timed free throw release meter

Built the next small playable iteration on top of v020.

### Added

- New versioned playable file at `versions/gametime_v021.html`
- Free Throw Timing feedback panel showing shooter, trip progress, live meter position, and result
- Green-window free throw release meter on the canvas so pressing `F` / mobile `FT` is skill-based instead of only random
- Free throw chance now changes with release quality: Perfect, Good, Early, or Late
- Matchup Builder `Practice FT` and `Release FT` buttons remain available for quick testing
- FT made/attempted stats continue to update the scoreboard, live stat panel, and end-of-game summary
- `latest.html` now points to v021
- `index.html`, README, and Playwright smoke test updated for v021

### Why this was chosen

v020 connected shooting fouls to free throws, which was the right rules-engine step. The next best improvement was making those free throws playable. v021 adds a simple timing meter so the user has a real input moment at the line, while still preserving realistic arcade make percentages and visible FT stats.

### Recommended next improvements

- Add lane-line rebound positioning for missed final free throws
- Add a dedicated mobile viewport Playwright test that drags the joystick and taps FT
- Move league/team/player data out of the single HTML file
- Add one-and-one / bonus behavior once team fouls matter late in games
- Add a practice/free-shoot mode for testing shot, rebound, foul, and free-throw systems quickly

## v020 - Playable free throw flow after shooting fouls

Built the next small playable iteration on top of v019.

### Added

- New versioned playable file at `versions/gametime_v020.html`
- Free Throw Flow feedback panel showing shooter, trip progress, free-throw rate, and result
- Shooting fouls can now create playable two-shot free-throw trips instead of only showing a whistle message
- `F` keyboard shortcut, mobile `FT` button, and Matchup Builder practice/shoot buttons for testing free throws quickly
- Free throws update score, FT made/attempted stats, scoreboard FT splits, and the end-of-game summary table
- Realism Tuning panel now includes a visible FT% target range
- `latest.html` now points to v020
- `index.html`, README, and Playwright smoke test updated for v020

### Why this was chosen

v019 made shot defense more realistic by adding late-contest whistle risk and verticality feedback. The next best basketball step was finishing that loop: a shooting foul should lead to free throws, not just a panel update. v020 adds a small but important payoff system so aggressive contests have scoreboard consequences and the game moves closer to a full arcade basketball rules engine.

### Recommended next improvements

- Add a dedicated mobile viewport Playwright test that drags the joystick and confirms movement
- Move league/team/player data out of the single HTML file
- Add a practice/free-shoot mode for testing shot, rebound, foul, and free-throw systems quickly
- Add lane-line rebound positioning during free throws
- Add one-and-one / bonus behavior once team fouls matter late in games

## v019 - Shot contest whistle risk and verticality feedback

Built the next small playable iteration on top of v018.

### Added

- New versioned playable file at `versions/gametime_v019.html`
- Contest Whistle feedback panel showing timing, verticality, distance, and whistle result
- Late block / shot-contest logic where aggressive or late contests can create foul outcomes
- Clean vertical contests can generate pressure or block credit without automatically becoming a foul
- Shot-contest fouls now feed team foul totals and the end-of-game stat summary
