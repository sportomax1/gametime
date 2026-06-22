# Changelog

## v029 - Screen coverage coach overlay

Built the next small playable iteration on top of v028.

### Added

- New versioned playable file at `versions/gametime_v029.html`
- Screen Coverage Coach overlay that sits above the preserved v028 playable build
- Coverage read cycle for Switch, Hedge, Fight over, and No screen states
- Coverage readouts for pressure, matchup, and next offensive read
- Keyboard shortcut `2` and a touch/click button to cycle the screen coverage read
- Mobile-friendly overlay positioning so the readable court remains available
- `latest.html` now points to v029

### Why this was chosen

v028 made the on-ball defensive matchup readable. The next logical basketball step was explaining what happens when an offense calls a screen. v029 adds a small broadcast-style screen coverage coach so future builds can wire screens into real gameplay logic: switches, hedges, fight-over recoveries, mismatch creation, pass windows, and pressure changes.

### Recommended next improvements

- Move the screen coverage read from overlay coaching into the main game state so the Screen play-call changes the actual defender
- Add a real roll/pop receiver read after Hedge coverage
- Add a compact individual fake-player box-score table for points, rebounds, assists, fouls, and stamina
- Move league/team/player/rule data out of the single HTML file into shared JavaScript modules
- Add a practice/free-shoot mode for testing shots, passes, stamina, free throws, matchup pressure, and screen coverage quickly

## v028 - Defensive matchup reads and on-ball pressure

Built the next small playable iteration on top of v027.

### Added

- New versioned playable file at `versions/gametime_v028.html`
- Matchup Read feedback panel showing current handler, primary defender, pressure level, and creator edge
- On-court dashed defender tether that highlights who is guarding the ball handler
- Shot feedback now accounts for matchup pressure, so heavy on-ball pressure lowers make chance
- Pass feedback now accounts for matchup pressure, so crowded reads carry higher turnover risk
- End summary now includes matchup context so pressure can be interpreted after the game
- `latest.html` now points to v028
- `index.html`, README, and Playwright smoke test updated for v028

### Why this was chosen

v027 made stamina and turbo affect player effectiveness. The next best foundation step was making defensive assignments readable. v028 tells the player who is guarding the ball, how much pressure that defender creates, and whether the ball handler has an athletic/scoring edge. That is a small but important bridge toward real 5v5 basketball because future AI, screens, switches, mismatches, help defense, and shot selection all need visible matchup context.

### Recommended next improvements

- Add screen-switch matchup updates so the Matchup Read panel reacts after picks
- Add help-defense tags for the nearest second defender in the passing lane
- Add a compact individual box-score table for fake-player points, rebounds, assists, fouls, and stamina
- Move league/team/player/rule data out of the single HTML file into shared JavaScript modules
- Add a practice/free-shoot mode for testing shots, passes, stamina, free throws, and matchup pressure quickly

## v027 - Stamina and turbo affect ratings

Built the next small playable iteration on top of v026.

### Added

- New versioned playable file at `versions/gametime_v027.html`
- Stamina / Turbo feedback panel showing controlled-player energy, turbo state, fatigue effect, and recovery state
- Sprint movement with `Shift` that boosts speed but drains stamina faster
- Stamina drain for shots, passes, jumps, steals, free throws, and rebound attempts
- Off-ball stamina recovery so switching and spacing have a gameplay reason
- Fatigue-adjusted effective SHO, PAS, REB, DEF, FT, and SPD outcomes
- Stamina bars under players on the court so tired legs are visible during play
- End-of-game summary now includes average team stamina
- `latest.html` now points to v027
- `index.html`, README, and Playwright smoke test updated for v027

## v026 - Player ratings drive basketball outcomes

Built the next small playable iteration on top of v025.

### Added

- New versioned playable file at `versions/gametime_v026.html`
- Player Ratings panel showing the controlled player's SHO, PAS, REB, DEF, FT, and SPD
- Position-based fake player ratings for guards, wings, forwards, and centers
- Fictional team identity modifiers so fake clubs feel different without using real teams or players
- Shot chance now uses the shooter's SHO rating, shot type, and play-call context
- Pass risk now uses passer PAS rating and can create rating-driven turnovers/interceptions
- Rebound outcomes now use REB rating instead of being mostly pure random resolution
- Defensive contests, steals, and whistle risk now use DEF rating
- Free throws now use the player's FT rating plus timing-meter release quality
- Movement speed now scales from the controlled player's SPD rating
- End-of-game summary now includes average team SHO / DEF ratings
- `latest.html` now points to v026
- `index.html`, README, and Playwright smoke test updated for v026

## Earlier preserved versions

- v025 - Compact Rules drawer for game length, shot clock, foul limit, and bonus format presets
- v024 - Toggleable bonus rules with two-shot or one-and-one behavior
- v023 - Bonus Watch panel and team-foul threshold behavior
- v022 - Live final-missed-free-throw rebounds
- v021 - Free throw timing meter and release feedback
- v020 - Playable free throws after shooting fouls
- v019 - Shot-contest whistle risk
- v018 - Final buzzer recap overlay
- v017 - Live team stats
- v016 - Rebound foul risk and Foul Watch
- v015 - Box-out timing rings and rebound leverage
- v014 - Rebound timing and loose-ball battles
- v013 - Mobile joystick and clean touch behavior
- v012 - Defensive coverage reads
- v011 - Clear-court Teams drawer
- v010 - Screen contact and roll/pop reads
- v009 - Fictional team select
- v008 - Basic play-call controls
- v007 - Realistic percentage tuning
- v006 - Off-ball cuts and mobile HUD collapse
- v005 - Passing lane risk and interceptions
- v004 - Shot feedback and make-chance UI
- v003 - Denver Peaks and mobile controls
- v002 - Early basketball prototype
- v001 - First preserved playable version
