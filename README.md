# Gametime Basketball

Gametime Basketball is a slow-build basketball game project. The long-term target is a realistic-arcade, broadcast-style 5v5 basketball simulator with fake teams, fake players, multiple camera angles, desktop/mobile controls, team selection, realistic basketball outcomes, and an eventual path to 3D.

## Play

Open `index.html` or `latest.html` in a browser.

Current playable version:

- `versions/gametime_v013.html`

## Current design direction

- Fake teams and fake players only
- Denver Peaks included as a core fictional team
- More fictional teams can be added gradually over time
- Short arcade-style games
- One controlled player at a time
- Player switching over time
- Auto offense can keep teammates moving unless the setting is turned off
- Realistic arcade feel with visible probability tuning
- Desktop keyboard controls and mobile-friendly touch controls
- Mobile layout should keep the playing area readable, with collapsible HUD panels, a compact Teams drawer, and no accidental text highlighting
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

## Controls in v013

| Control | Action |
|---|---|
| WASD / Arrow Keys | Move controlled player |
| Shift | Sprint |
| Space | Smart pass or request pass when controlling an off-ball teammate |
| J | Shoot |
| K | Jump / block contest |
| L | Steal attempt |
| Tab | Switch controlled player |
| C | Change camera with quick camera display update |
| O | Toggle Auto Offense |
| H / HUD button | Collapse or expand feedback panels |
| 1 | Call Cut |
| 2 | Call Screen |
| 3 | Call Space |
| 4 | Call Iso |
| T / Teams button | Hide or reopen the compact Teams drawer |
| R | Reset game |
| Mobile joystick | Analog movement for the controlled player |
| Mobile Pass / Shoot / Switch / Cam | Main basketball actions |
| Mobile Jump / Block / Steal | Quick defensive actions |
| Mobile Auto O | Toggle Auto Offense |
| Mobile Cut / Screen / Space / Iso | Play-call actions |

## Current gameplay systems

- Fictional team select with 10 fake clubs
- Denver Peaks remain the default user-controlled team
- Selectable fake opponents and home teams through the Matchup Builder
- Compact Teams drawer starts open and auto-hides after tip-off to keep the court clearer on phones
- Teams can be reopened with `T` or the Teams button without covering the whole game permanently
- One-player control with teammate/opponent AI
- Auto Offense setting lets the AI continue the possession when the user switches to an off-ball teammate
- Mobile joystick replaces the older button-only movement pad
- No-highlight mobile CSS reduces accidental text selection and tap artifacts
- Quick camera pill shows camera changes immediately
- Action pill and on-court pulses make pass, shoot, switch, jump/block, and steal reactions more readable
- Shot feedback for release, contest, zone, and make chance
- Tuned realistic-arcade shot probability ranges for paint, close, midrange, and threes
- Passing-lane preview, pass-risk feedback, pass requests, and interceptions
- Off-ball cuts that create timed passing windows toward the rim
- Basic play-call system: Cut, Screen, Space, and Iso
- Screen call creates physical screen contact: defenders slow when clipping an active screener
- Screen Feedback panel tracks screen action, contacts, roll/pop outcome, and separation
- Defense Coverage panel tracks basic screen response: man, hedge, switch, pressure, jump/block contests, and steal attempts
- Basic hedge/switch logic makes defenders react to screens instead of sliding through every pick the same way
- Live realism tuning panel for 2PT%, 3PT%, turnover rate, screen hits, and sample size
- Possession direction arrow and attacking-hoop indicator
- Collapsible feedback HUD so mobile players can keep the court visible
- Multiple camera modes with actual display changes
- Desktop and mobile control paths

## Fake league clubs in v013

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

The current test checks that the latest playable HTML launches, renders the canvas, exposes the scoreboard/HUD, includes the team selector and Teams toggle, includes the mobile joystick and action controls, shows shot/pass/realism/play-call/screen/defense feedback, includes HUD collapse behavior, auto-hides the team drawer after starting a matchup, supports reopening the drawer, supports changing the matchup, toggles Auto Offense, updates the camera display, and handles pass/shoot/jump/block/steal keyboard actions without page errors.
