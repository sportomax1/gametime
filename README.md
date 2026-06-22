# Gametime Basketball

Gametime Basketball is a slow-build basketball game project. The long-term target is a realistic-arcade, broadcast-style 5v5 basketball simulator with fake teams, fake players, multiple camera angles, desktop/mobile controls, team selection, realistic basketball outcomes, rebound battles, box-out timing, foul logic, live team statistics, end-of-game summaries, shot-contest whistles, playable free throws, timed free throw release feedback, live free-throw rebound outcomes, bonus free throws after team-foul thresholds, toggleable one-and-one bonus rules, and an eventual path to 3D.

## Play

Open `index.html` or `latest.html` in a browser.

Current playable version:

- `versions/gametime_v024.html`

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
- Final missed free throws should stay live and create lane-line rebound battles instead of becoming automatic possession flips
- Rebounds should become readable and skill-based through timing rings, inside position, box-out leverage, and realistic foul risk
- Late block attempts and aggressive contests should carry realistic whistle risk, while verticality should be rewarded
- Shooting fouls should produce playable free throws and update the box score
- Team-foul bonus rules should make late sloppy defense produce realistic free throws
- Bonus rules should support both two-shot arcade/NBA-style handling and one-and-one college-style pressure where the first make earns the second shot
- Free throws should reward timing instead of resolving as invisible dice rolls
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

## Controls in v024

| Control | Action |
|---|---|
| WASD / Arrow Keys | Move controlled player |
| Shift | Sprint / aggressive contest lean |
| Space | Smart pass or request pass when controlling an off-ball teammate |
| J | Shoot |
| K | Jump / rebound / box-out / block contest with late-whistle risk |
| F | Release current free throw / open practice free-throw flow |
| L | Defensive poke attempt with reach-in risk |
| B | Force a bonus-rule test foul |
| N | Toggle bonus rule between two-shot and one-and-one |
| Tab | Switch controlled player |
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
| Mobile Jump / Block / Poke / FT / Bonus / Rule | Quick defensive, rebound, box-out, contest, foul-risk, free-throw, bonus-rule, and rule-toggle actions |
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
- Contest Whistle panel tracks timing, verticality, distance, and whistle result for block/contest attempts
- Late or leaning shot contests can create shooting-foul / side-out outcomes instead of always being free blocks
- Clean vertical contests can create block credit or pressure without a whistle
- Free Throw Timing panel tracks shooter, trip progress, live meter position, release timing, make chance, and result
- Shooting fouls can create playable free-throw trips
- Free throws update score, FT made/attempted splits, scoreboard, live stat panel, and end summary
- The free throw meter rewards pressing F / FT near the green release window
- Lane-line player alignment during free throws
- Final missed free throws stay live and turn into offensive or defensive rebound outcomes
- Bonus Watch feedback tracks home bonus, away bonus, current bonus rule, and outcome
- Non-shooting fouls are side-out fouls before bonus, then bonus free throws once the defending team reaches 5 team fouls
- v024 adds a Bonus Rule toggle and `N` shortcut for switching between two-shot and one-and-one bonus formats
- v024 adds a Force 1+1 test button so the one-and-one make-first-to-earn-second flow can be checked quickly
- Missed shots now trigger a rebound/loose-ball state instead of instant possession changes
- Rebound Battle panel tracks timing, battle density, loose-ball type, and outcome
- Box-Out Timing panel tracks timing window, leverage, ring progress, and rebound bonus
- Foul Watch panel tracks contact type, whistle risk, team fouls, and foul outcome
- Rebound crashes can trigger over-the-back or loose-ball foul outcomes
- Reach-in steal attempts can trigger a foul instead of always being free poke attempts
- Game Stats panel tracks field goals, 3PT rate, free throws, rebounds, offensive rebounds, turnovers, steals, blocks, and fouls during play
- Shot makes, misses, interceptions, shot-clock violations, steals, rebounds, blocks, fouls, and free throws feed the live team stat model
- End-of-game summary overlay explains the final score with FG, 3PT, FT, rebounds, offensive rebounds, turnovers, steals, blocks, fouls, bonus status, bonus rule, and why-they-won text
- On-court rebound timing rings show when to build position and when to jump
- Offensive rebounds reset the shot clock to 14; defensive rebounds reset it to 24
- Jumping near the loose-ball marker can claim the rebound with better timing
- Passing-lane preview, pass-risk feedback, pass requests, and interceptions
- Off-ball cuts that create timed passing windows toward the rim
- Basic play-call system: Cut, Screen, Space, and Iso
- Screen call creates physical screen contact: defenders slow when clipping an active screener
- Defense Coverage panel tracks screen response, pressure, contest behavior, and rebound outcomes
- Live realism tuning panel for 2PT%, 3PT%, FT%, offensive rebound rate, foul pace, bonus threshold, and sample notes
- Possession direction arrow and attacking-hoop indicator
- Collapsible feedback HUD so mobile players can keep the court visible
- Multiple camera modes with actual display changes
- Desktop and mobile control paths

## Fake league clubs in v024

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

The current test checks that the latest playable HTML launches, renders the canvas, exposes the scoreboard/HUD, includes team select, mobile joystick controls, action controls, shot/pass/realism/play-call/screen/defense/rebound/box-out/foul/free-throw/bonus feedback, bonus rule toggles, HUD collapse behavior, team drawer behavior, matchup changes, Auto Offense, camera display, core keyboard actions, practice FT, bonus-rule behavior, one-and-one behavior, and summary overlay without page errors.
