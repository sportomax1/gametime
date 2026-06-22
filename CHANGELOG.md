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

### Why this was chosen

v026 made fake-player ratings matter. The next best foundation step was adding stamina so those ratings are not static all game. v027 makes sprinting, repeated jumps, reach attempts, shots, passes, rebounds, and free throws carry a realistic arcade cost: fresh players pop, tired players lose efficiency. That is a core sports-game loop before deeper AI, rotations, and matchup logic.

### Recommended next improvements

- Add individual fake-player box-score rows for points, rebounds, assists, steals, blocks, fouls, and stamina at the final buzzer
- Add visible matchup labels for who is guarding the ball handler
- Add a practice/free-shoot mode for testing rating and stamina effects quickly
- Move league/team/player/rule data out of the single HTML file into shared JavaScript modules
- Add fatigue-aware AI substitutions later only if the project eventually expands beyond short arcade games

## v026 - Player ratings drive basketball outcomes

Built the next small playable iteration on top of v025.

### Added

- New versioned playable file at `versions/gametime_v026.html`
- Player Ratings panel showing the controlled player's SHO, PAS, REB, DEF, FT, and SPD
- Position-based fake player ratings for guards, wings, forwards, and centers
- Fictional team identity modifiers so fake clubs feel different without using real teams or players
- Shot chance now uses the shooter’s SHO rating, shot type, and play-call context
- Pass risk now uses passer PAS rating and can create rating-driven turnovers/interceptions
- Rebound outcomes now use REB rating instead of being mostly pure random resolution
- Defensive contests, steals, and whistle risk now use DEF rating
- Free throws now use the player's FT rating plus timing-meter release quality
- Movement speed now scales from the controlled player's SPD rating
- End-of-game summary now includes average team SHO / DEF ratings
- `latest.html` now points to v026
- `index.html`, README, and Playwright smoke test updated for v026

### Why this was chosen

v025 made rule presets easier to test. v026 moved another key sports-game foundation from random-feeling outcomes toward basketball attributes. Guards should feel different from wings and bigs, team identities should matter, and shot/pass/rebound/defense/free-throw outcomes should be explainable. This gives future AI and roster growth a ratings spine.

### Recommended next improvements

- Add stamina and fatigue so ratings degrade with sprinting and repeated actions
- Add individual fake-player box-score rows at the final buzzer
- Add a Matchup Read panel showing the current ball handler vs closest defender
- Add a practice/free-shoot mode for testing rating effects quickly
- Move league/team/player/rule data out of the single HTML file into shared JavaScript modules
