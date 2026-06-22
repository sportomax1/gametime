# Gametime Basketball

Gametime Basketball is a slow-build basketball game project. The long-term target is a realistic-arcade, broadcast-style 5v5 basketball simulator with fake teams, fake players, multiple camera angles, desktop/mobile controls, team selection, and an eventual path to 3D.

## Play

Open `index.html` or `latest.html` in a browser.

Current playable version:

- `versions/gametime_v009.html`

## Current design direction

- Fake teams and fake players only
- Denver Peaks included as a core fictional team
- More fictional teams can be added gradually over time
- Short arcade-style games
- One controlled player at a time
- Player switching over time
- Realistic arcade feel with visible probability tuning
- Desktop keyboard controls and mobile-friendly touch controls
- Mobile layout should keep the playing area readable, with collapsible HUD panels
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

## Controls in v009

| Control | Action |
|---|---|
| WASD / Arrow Keys | Move controlled player |
| Shift | Sprint |
| Space | Smart pass using passing-lane risk and cutter priority |
| J | Shoot |
| Tab | Switch controlled player |
| C | Change camera |
| H / HUD button | Collapse or expand feedback panels |
| 1 | Call Cut |
| 2 | Call Screen |
| 3 | Call Space |
| 4 | Call Iso |
| T | Minimize or reopen the team selector |
| R | Reset game |
| Mobile D-pad | Move controlled player |
| Mobile Run | Sprint |
| Mobile Pass / Shoot / Switch / Cam | Main basketball actions |
| Mobile Cut / Screen / Space / Iso | Play-call actions |

## Current gameplay systems

- Fictional team select with 10 fake clubs
- Denver Peaks remain the default user-controlled team
- Selectable fake opponents and home teams through the Matchup Builder
- Team identity panel showing user team, opponent, roster setup, and fake-league context
- One-player control with teammate/opponent AI
- Shot feedback for release, contest, zone, and make chance
- Tuned realistic-arcade shot probability ranges for paint, close, midrange, and threes
- Passing-lane preview, pass-risk feedback, and interceptions
- Off-ball cuts that create timed passing windows toward the rim
- Basic play-call system: Cut, Screen, Space, and Iso
- Screen call sends a big teammate toward the ball handler and can reduce shot contest pressure
- Space and Iso alter teammate spacing so user-controlled possessions have clearer intent
- Live realism tuning panel for 2PT%, 3PT%, turnover rate, rebounds, and sample size
- Possession direction arrow and attacking-hoop indicator
- Collapsible feedback HUD so mobile players can keep the court visible
- Multiple camera modes
- Desktop and mobile control paths

## Fake league clubs in v009

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

The current test checks that the latest playable HTML launches, renders the canvas, exposes the scoreboard/HUD, includes the team selector, includes mobile controls and play-call controls, shows shot/pass/realism/play-call/team feedback, includes HUD collapse behavior, supports changing the matchup, and handles basic keyboard actions without page errors.
