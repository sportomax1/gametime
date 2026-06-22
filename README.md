# Gametime Basketball

Gametime Basketball is a slow-build basketball game project. The long-term target is a realistic-arcade, broadcast-style 5v5 basketball simulator with fake teams, fake players, multiple camera angles, desktop/mobile controls, team selection, realistic basketball outcomes, rebound battles, box-out timing, foul logic, live team statistics, end-of-game summaries, shot-contest whistles, playable free throws, timed free throw release feedback, live free-throw rebound outcomes, bonus free throws after team-foul thresholds, toggleable one-and-one bonus rules, compact game-rule presets, player ratings that influence outcomes, stamina/turbo fatigue that changes effective ratings, defensive matchup reads that explain pressure, individual fake-player box scores, live on-court matchup labels, help-defense lane tags, screen-switch coverage reads, roll/pop reads after screens, live in-game box-score tracking, and an eventual path to 3D.

## Play

Open `index.html` or `latest.html` in a browser.

Current playable version:

- `versions/gametime_v034.html`

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
- Live matchup labels should identify the ball handler, primary defender, pressure, and creator edge during play
- Help-defense tags should identify the nearest second defender, lane shrink, and rotation risk during passes
- Screen-switch reads should explain whether a pick creates a switch, hedge, drop, fight-over, or trap result
- Roll/pop reads should make the screener a live scoring or passing target after a screen
- Individual fake-player box scores should show who created points, boards, assists, steals, blocks, fouls, turnovers, and tired-leg value
- Live in-game box-score reads should show production before the final buzzer, not only in an end summary
- Realistic arcade feel with visible probability tuning and live stat checks
- Desktop keyboard controls and mobile-friendly touch controls
- Mobile layout should keep the playing area readable, with collapsible HUD panels, a compact Teams drawer, a compact Rules drawer, joystick control, and clean touch behavior
- Missed shots should create realistic rebound / loose-ball events instead of instantly flipping possession
- Final missed free throws should stay live and create lane-line rebound battles instead of becoming automatic possession flips
- Rebounds should become readable and skill-based through timing rings, inside position, box-out leverage, realistic foul risk, rebounding attributes, and stamina
- Late block attempts and aggressive contests should carry realistic whistle risk, while defensive ratings and stamina should matter
- Shooting fouls should produce playable free throws and update the box score
- Team-foul bonus rules should make late sloppy defense produce realistic free throws
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

## Controls in v034

| Control | Action |
|---|---|
| WASD / Arrow Keys | Move controlled player, scaled by speed rating and stamina |
| Shift | Sprint / turbo burst that drains stamina faster |
| Space | Smart pass or request pass when controlling an off-ball teammate |
| J | Shoot with shot rating, stamina, on-ball pressure, help-defense, screen coverage, and roll/pop influence |
| K | Jump / contest |
| L | Defensive poke attempt with defensive rating, stamina, and help-position context |
| 2 / Screen button | Call a screen and generate a switch / hedge / drop / fight-over / trap read |
| 3 / Roll button | Hit the screener on a roll, pop, or slip read after the screen |
| B / Box button | Toggle the in-game player box-score panel between full and compact |
| Tab | Switch controlled player and update live context |
| C | Change camera with quick camera display update |
| O | Toggle Auto Offense |
| H / HUD button | Collapse or expand feedback panels |
| T / Teams button | Hide or reopen the compact Teams drawer |
| Mobile joystick | Analog movement for the controlled player |
| Mobile Pass / Shoot / Switch / Cam | Main basketball actions |
| Mobile Jump / Steal / Screen / Roll / Box / HUD | Quick action controls |

## Current gameplay systems

- Fictional team select with 10 fake clubs
- Denver Peaks remain the default user-controlled team
- Selectable fake opponents and home teams through the Matchup Builder
- Compact Teams drawer starts open and can hide after tip-off to keep the court clearer on phones
- v034 adds a live In-Game Box Score panel while play continues
- Box Score panel tracks PTS, REB, AST, TO, and impact for every fake player
- Header now surfaces the controlled player's PTS / REB / AST line during play
- Box Panel button and `B` keyboard shortcut toggle the box score between full and compact views
- Canvas overlay highlights the current live box-score leader for quick broadcast-style context
- v033 adds Roll / Pop Read feedback after calling a screen
- Roll / Pop Read panel shows action, screener target, window percentage, and result
- The screener can become a roll, pop, or slip target after screen coverage is read
- Roll/pop results can create a made roll finish, pick-and-pop look, or help-defense deflection
- v032 adds screen-switch coverage reads after calling a pick
- Screen Switch panel shows coverage type, screener, new defender, and slip-risk percentage
- Screen coverage can change the live primary defender and recalculate the help defender
- v031 adds help-defense lane tags for the nearest second defender
- Help Defense panel shows helper, lane tag, help-risk percentage, and rotation read
- Live Matchup panel shows current handler, defender, pressure level, and creator edge
- On-court dashed matchup tether highlights the defender currently pressuring the ball handler
- On-court dashed help tether highlights the second defender currently shrinking the lane
- On-court purple screen tether highlights the screener path during active screen actions
- On-court orange roll/pop lane shows where the screener is attacking after the pick
- Shot chance and pass risk respond to the current matchup pressure read
- Pass risk now also responds to help-defense lane shrink so stunts and traps matter
- Realism Pulse panel tracks 2PT%, 3PT%, rebounds, and turnovers against realistic-arcade expectations
- Player movement speed uses each player's SPD rating and stamina
- Team identities modify fake-player ratings without using real teams or players
- One-player control with teammate/opponent AI
- Auto Offense setting lets the AI continue the possession when the user switches to an off-ball teammate
- Mobile joystick movement
- Clean mobile touch CSS reduces accidental selection and tap artifacts
- Quick camera pill shows camera changes immediately
- Action pill and on-court player labels make actions and ratings more readable

## Fake league teams

| Team | Identity |
|---|---|
| Denver Peaks | Altitude / balanced boards |
| Canyon Comets | Shooting |
| Metro Meteors | Pace |
| Bay City Breakers | Balanced |
| Desert Sparks | Range |
| Harbor Knights | Defense |
| Prairie Cyclones | Boards |
| Summit Owls | IQ / passing |
| River City Rooks | Power |
| Mesa Mirage | Spacing |

## Testing

```bash
npm install
npx playwright install chromium
npm test
```
