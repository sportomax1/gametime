# Gametime Basketball

Gametime Basketball is a slow-build basketball game project. The long-term target is a realistic-arcade, broadcast-style 5v5 basketball simulator with fake teams, fake players, multiple camera angles, desktop/mobile controls, team selection, realistic basketball outcomes, rebound battles, box-out timing, foul logic, live team statistics, end-of-game recap summaries, and an eventual path to 3D.

## Play

Open `index.html` or `latest.html` in a browser.

Current playable version:

- `versions/gametime_v018.html`

## Current design direction

- Fake teams and fake players only
- Denver Peaks included as a core fictional team
- More fictional teams can be added gradually over time
- Short arcade-style games
- One controlled player at a time
- Player switching over time
- Auto offense can keep teammates moving unless the setting is turned off
- Realistic arcade feel with visible probability tuning and live stat checks
- Desktop keyboard controls and mobile-friendly touch controls
- Mobile layout should keep the playing area readable, with collapsible HUD panels, a compact Teams drawer, joystick control, and clean touch behavior
- Missed shots should create realistic rebound / loose-ball events instead of instantly flipping possession
- Rebounds should become readable and skill-based through timing rings, inside position, box-out leverage, and realistic foul risk
- Team stats should surface whether the arcade systems are producing believable basketball outcomes
- Final summaries should explain the result using score, efficiency, rebounds, turnovers, steals, blocks, fouls, and paint points
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

## Controls in v018

| Control | Action |
|---|---|
| WASD / Arrow Keys | Move controlled player |
| Shift | Sprint |
| Space | Smart pass or request pass when controlling an off-ball teammate |
| J | Shoot |
| K | Jump / rebound / box-out / block contest |
| L | Defensive poke attempt with reach-in risk |
| Tab | Switch controlled player |
| C | Change camera with quick camera display update |
| O | Toggle Auto Offense |
| E / Show Summary | Open the live or final game summary overlay |
| H / HUD button | Collapse or expand feedback panels |
| 1 | Call Cut |
| 2 | Call Screen |
| 3 | Call Space |
| 4 | Call Iso |
| T / Teams button | Hide or reopen the compact Teams drawer |
| R | Reset game |
| Mobile joystick | Analog movement for the controlled player |
| Mobile Pass / Shoot / Switch / Cam | Main basketball actions |
| Mobile Jump / Block / Poke | Quick defensive, rebound, box-out, and foul-risk actions |
| Mobile Auto O | Toggle Auto Offense |
| Mobile Cut / Screen / Space / Iso | Play-call actions |

## Current gameplay systems

- Fictional team select with 10 fake clubs
- Denver Peaks remain the default user-controlled team
- Selectable fake opponents and home teams through the Matchup Builder
- Compact Teams drawer starts open and auto-hides after tip-off to keep the court clearer on phones
- One-player control with teammate/opponent AI
- Auto Offense setting lets the AI continue the possession when the user switches to an off-ball teammate
- Mobile joystick movement
- Clean mobile touch CSS reduces accidental selection and tap artifacts
- Quick camera pill shows camera changes immediately
- Action pill and on-court pulses make actions more readable
- Shot feedback for release, contest, zone, and make chance
- Tuned realistic-arcade shot probability ranges for paint, close, midrange, and threes
- Missed shots now trigger a rebound/loose-ball state instead of instant possession changes
- Rebound Battle panel tracks timing, battle density, loose-ball type, and outcome
- Box-Out Timing panel tracks timing window, leverage, ring progress, and rebound bonus
- Foul Watch panel tracks contact type, whistle risk, team fouls, and foul outcome
- Rebound crashes can trigger over-the-back or loose-ball foul outcomes
- Reach-in steal attempts can trigger a foul instead of always being free poke attempts
- Game Stats panel tracks field goals, 3PT rate, rebounds, offensive rebounds, turnovers, and steals during play
- End-of-game recap overlay summarizes score, FG, 3PT, rebounds, offensive rebounds, turnovers, steals, blocks, fouls, and paint points
- Recap explanation calls out the likely reason for the result, such as shooting, glass control, ball security, steals, or foul discipline
- Shot makes, misses, interceptions, shot-clock violations, steals, rebounds, and fouls now feed the live team stat model
- On-court rebound timing rings show when to build position and when to jump
- Offensive rebounds reset the shot clock to 14; defensive rebounds reset it to 24
- Jumping near the loose-ball marker can claim the rebound with better timing
- Passing-lane preview, pass-risk feedback, pass requests, and interceptions
- Off-ball cuts that create timed passing windows toward the rim
- Basic play-call system: Cut, Screen, Space, and Iso
- Screen call creates physical screen contact: defenders slow when clipping an active screener
- Defense Coverage panel tracks screen response, pressure, and rebound outcomes
- Live realism tuning panel for 2PT%, 3PT%, offensive rebound rate, foul pace, and sample notes
- Possession direction arrow and attacking-hoop indicator
- Collapsible feedback HUD so mobile players can keep the court visible
- Multiple camera modes with actual display changes
- Desktop and mobile control paths

## Fake league clubs in v018

| Team | Identity |
|---|---|
| Denver Peaks | Default user team |
| Canyon Comets | Default opponent |
| Metro Meteors | Fast guard/shooting team |
| Bay City Breakers | Balanced coastal team |
| Desert Sparks | Shooting-heavy team |
| Harbor Knights | Defensive team |
| Prairie Cyclones | Speed and rebounding team |
| Summit Owls | Smart balanced team |
| River City Rooks | Physical balanced team |
| Mesa Mirage | Spacing and scoring team |

## Testing

A lightweight Playwright smoke test is included. After installing dependencies:

```bash
npm install
npx playwright install chromium
npm test
```

The current test checks that the latest playable HTML launches, renders the canvas, exposes the scoreboard/HUD, includes team select, mobile joystick controls, action controls, shot/pass/realism/play-call/screen/defense/rebound/box-out/foul/stat feedback, final summary overlay, HUD collapse behavior, team drawer behavior, matchup changes, Auto Offense, camera display, and core keyboard actions without page errors.
