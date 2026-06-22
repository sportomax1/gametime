# Changelog

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
- Mobile/desktop `K` and Block/Jump behavior now supports contest timing as well as rebound/box-out actions
- `latest.html` now points to v019
- `index.html`, README, and Playwright smoke test updated for v019

### Why this was chosen

v018 added a final buzzer recap, which made the live stat model meaningful at the end of each short game. The next best basketball step was making shot defense less binary. v019 adds a readable risk/reward layer: jump straight up and you can contest cleanly; lunge late and the whistle can punish you. That keeps blocks exciting without letting the defense spam free superhero swats.

### Recommended next improvements

- Add a dedicated mobile viewport Playwright test that drags the joystick and confirms movement
- Move league/team/player data out of the single HTML file
- Add a practice/free-shoot mode for testing shot, rebound, and foul systems quickly
- Add team color/name styling to the final recap table
- Add foul-shot/free-throw handling after shooting fouls

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