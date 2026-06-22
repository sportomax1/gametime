# Gametime Basketball

Gametime Basketball is a slow-build basketball game project. The long-term target is a realistic-arcade, broadcast-style 5v5 basketball simulator with fake teams, fake players, multiple camera angles, desktop/mobile controls, team selection, realistic basketball outcomes, rebound battles, box-out timing, foul logic, live team statistics, end-of-game summaries, shot-contest whistles, playable free throws, timed free throw release feedback, live free-throw rebound outcomes, bonus free throws after team-foul thresholds, toggleable one-and-one bonus rules, compact game-rule presets, player ratings that influence outcomes, stamina/turbo fatigue that changes effective ratings, defensive matchup reads that explain pressure, and an eventual path to 3D.

## Play

Open `index.html` or `latest.html` in a browser.

Current playable version:

- `versions/gametime_v028.html`

## Current design direction

- Fake teams and fake players only
- Denver Peaks included as a core fictional team
- More fictional teams can be added gradually over time
- Short arcade-style games
- One controlled player at a time
- Player switching over time
- Auto offense can keep teammates moving unless the setting is turned off
- Player ratings should gradually drive believable basketball differences between guards, wings, bigs, and team identities
- Stamina should make turbo, repeated jumps, steals, shots, passes, and rebounds matter without turning the game into a pure sim
- Defensive matchups should become readable so pressure, contests, passing risk, and shot quality feel earned instead of random
- Realistic arcade feel with visible probability tuning and live stat checks
- Desktop keyboard controls and mobile-friendly touch controls
- Mobile layout should keep the playing area readable, with collapsible HUD panels, a compact Teams drawer, a compact Rules drawer, joystick control, and clean touch behavior
- Missed shots should create realistic rebound / loose-ball events instead of instantly flipping possession
- Final missed free throws should stay live and create lane-line rebound battles instead of becoming automatic possession flips
- Rebounds should become readable and skill-based through timing rings, inside position, box-out leverage, realistic foul risk, rebounding attributes, and stamina
- Late block attempts and aggressive contests should carry realistic whistle risk, while defensive ratings and stamina should matter
- Shooting fouls should produce playable free throws and update the box score
- Team-foul bonus rules should make late sloppy defense produce realistic free throws
- Bonus rules should support both two-shot arcade/NBA-style handling and one-and-one college-style pressure where the first make earns the second shot
- Rule settings should be easy to test without covering the court on mobile
- Free throws should reward timing and player FT rating instead of resolving as invisible dice rolls
- Team stats should surface whether the arcade systems are producing believable basketball outcomes
- End-of-game summaries should explain who won and why
- All useful basketball camera angles over time
- HTML Canvas foundation first
- Three.js / 3D path later when the 2D foundation is strong
- Playable games only, not franchise management

## Versioning rules

Each build should preserve old playable versions:

- New versions go in `versions/gametime_v###.html`
- `latest.html` points to the current version
- `CHANGELOG.md` explains what changed and why
- Avoid overwriting earlier playable versions

## Controls in v028

| Control | Action |
|---|---|
| WASD / Arrow Keys | Move controlled player, scaled by speed rating and stamina |
| Shift | Sprint / turbo burst that drains stamina faster |
| Space | Smart pass or request pass when controlling an off-ball teammate |
| J | Shoot with shot rating, stamina, and matchup pressure influence |
| K | Jump / rebound / box-out / block contest with defensive, rebound, and stamina influence |
| F | Release current free throw / open practice free-throw flow |
| L | Defensive poke attempt with defensive rating, stamina, and reach-in risk |
| B | Force a bonus-rule test foul |
| N | Toggle bonus rule between two-shot and one-and-one |
| G / Rules button | Hide or reopen the compact Rules drawer |
| Tab | Switch controlled player and update the Player Ratings, Stamina, and Matchup Read panels |
| C | Change camera with quick camera display update |
| O | Toggle Auto Offense |
| H / HUD button | Collapse or expand feedback panels |
| E / Summary button | Show end-of-game summary overlay |
| 1 | Call Cut |
| 2 | Call Screen |
| 3 | Call Space |
| 4 | Call Iso |
| T / Teams button | Hide or reopen the compact Teams drawer |
| R | Reset game |
| Mobile joystick | Analog movement for the controlled player |
| Mobile Pass / Shot / Switch / Cam | Main basketball actions |
| Mobile Jump / Block / Poke / FT / Bonus / Rule / Rules | Quick defensive, rebound, box-out, contest, foul-risk, free-throw, bonus-rule, and rules-drawer actions |
| Mobile Auto O | Toggle Auto Offense |
| Mobile Cut / Screen / Space / Iso | Play-call actions |

## Current gameplay systems

- Fictional team select with 10 fake clubs
- Denver Peaks remain the default user-controlled team
- Selectable fake opponents and home teams through the Matchup Builder
- Compact Teams drawer starts open and can hide after tip-off to keep the court clearer on phones
- Compact Rules drawer for game length, shot clock preset, team-foul limit, and bonus format
- Rules drawer supports 2:00, 3:00, and 5:00 game lengths
- Rules drawer supports 14, 18, and 24 second shot-clock presets
- Rules drawer supports 4, 5, and 6 team-foul bonus limits
- Rules drawer supports two-shot bonus and one-and-one bonus formats
- Scoreboard surfaces current shot-clock preset, foul limit, bonus status, bonus format, and FT splits
- End summary includes the active rules preset so game results can be interpreted against pace and foul settings
- Player Ratings for SHO, PAS, REB, DEF, FT, and SPD
- Player Ratings panel updates when the controlled player changes
- Stamina / Turbo panel for controlled-player energy, sprint state, fatigue effect, and recovery state
- Sprinting with Shift increases movement speed but drains stamina quickly
- Shots, passes, jumps, steals, free throws, and rebound attempts drain stamina in small amounts
- Off-ball players recover faster than ball handlers
- Fatigue lowers effective SHO, PAS, REB, DEF, FT, and SPD values for basketball outcomes
- v028 adds a Matchup Read panel for the current handler, primary defender, pressure level, and creator edge
- On-court dashed matchup tether highlights the defender currently pressuring the ball handler
- Shot chance and pass risk now respond to the current matchup pressure read
- End-of-game summary includes average team stamina so results can be read against tired legs
- Shooting chance uses the shooter rating, stamina/fatigue, shot type, play-call context, and matchup pressure
- Passing risk uses passer rating, stamina/fatigue, and matchup pressure and can create rating-driven turnovers/interceptions
- Rebound outcomes use rebounding rating and stamina instead of pure random choice
- Steal, contest, and foul risk use defensive rating and stamina
- Free throws use each player's FT rating, stamina/fatigue, and meter timing
- Player movement speed uses each player's SPD rating and stamina
- Team identities modify fake-player ratings without using real teams or players
- One-player control with teammate/opponent AI
- Auto Offense setting lets the AI continue the possession when the user switches to an off-ball teammate
- Mobile joystick movement
- Clean mobile touch CSS reduces accidental selection and tap artifacts
- Quick camera pill shows camera changes immediately
- Action pill and on-court player labels make actions and ratings more readable
- Shot feedback for release, contest, zone, make chance, shooter rating, stamina effect, and matchup pressure
- Tuned realistic-arcade shot probability ranges for paint, close, midrange, and threes
- Contest and foul feedback track whistle risk for block/contest attempts
- Shooting fouls can create playable free-throw trips
- Free throws update score, FT made/attempted splits, scoreboard, live stat panel, and end summary
- The free throw meter rewards pressing F / FT near the green release window
- Final missed free throws can turn into offensive or defensive rebound outcomes
- Bonus Watch feedback tracks home bonus, away bonus, current bonus rule, and outcome
- Non-shooting fouls are side-out fouls before bonus, then bonus free throws once the defending team reaches the selected foul limit
- Missed shots can trigger rebound/loose-ball states instead of instant possession changes
- Rebound Battle panel tracks timing, battle density, loose-ball type, rating influence, stamina influence, and outcome
- Foul Watch panel tracks contact type, whistle risk, team fouls, and foul outcome
- Game Stats panel tracks field goals, 3PT rate, free throws, rebounds, offensive rebounds, turnovers, steals, blocks, and fouls during play
- End-of-game summary overlay explains the final score with shooting, free throws, rebounds, fouls, active rules, team rating averages, team stamina averages, matchup read notes, and why-they-won text
- Passing-lane preview, pass-risk feedback, pass requests, and interceptions
- Basic play-call system: Cut, Screen, Space, and Iso
- Live realism tuning panel for 2PT%, 3PT%, FT%, offensive rebound rate, foul pace, bonus threshold, player ratings, stamina notes, and matchup pressure notes
- Collapsible feedback HUD so mobile players can keep the court visible
- Multiple camera modes with actual display changes
- Desktop and mobile control paths

## Fake league clubs in v028

| Team | Identity |
|---|---|
| Denver Peaks | Default user team, altitude balance and rebounding |
| Canyon Comets | Shooting guard team |
| Metro Meteors | Fast guard/passing team |
| Bay City Breakers | Balanced coastal team |
| Desert Sparks | Shooting-heavy team |
| Harbor Knights | Defensive team |
| Prairie Cyclones | Speed and rebounding team |
| Summit Owls | Smart passing/defense team |
| River City Rooks | Physical rebounding/defense team |
| Mesa Mirage | Spacing and scoring team |

## Testing

A lightweight Playwright smoke test is included. After installing dependencies:

```bash
npm install
npx playwright install chromium
npm test
```

The current test checks that the latest playable HTML launches, renders the canvas, exposes the scoreboard/HUD, includes team select, compact Rules drawer, Player Ratings panel, Stamina / Turbo panel, Matchup Read panel, mobile joystick controls, action controls, shot/pass/realism/play-call/rebound/foul/free-throw/bonus feedback, rule preset changes, rating-driven player switching, stamina-changing sprint/action behavior, matchup-pressure shot/pass feedback, HUD collapse behavior, team drawer behavior, rules drawer behavior, matchup changes, Auto Offense, camera display, core keyboard actions, practice FT, bonus behavior, summary overlay, and mobile no-selection behavior without page errors.
