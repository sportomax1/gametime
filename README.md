# Gametime Basketball

Gametime Basketball is a slow-build basketball game project. The long-term target is a realistic-arcade, broadcast-style 5v5 basketball simulator with fake teams, fake players, multiple camera angles, desktop/mobile controls, and an eventual path to 3D.

## Play

Open `index.html` or `latest.html` in a browser.

Current playable version:

- `versions/gametime_v005.html`

## Current design direction

- Fake teams and fake players only
- Denver Peaks included as a core fictional team
- More fictional teams can be added gradually over time
- Short arcade-style games
- One controlled player at a time
- Player switching over time
- Realistic arcade feel
- Desktop keyboard controls and mobile-friendly touch controls
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

## Controls in v005

| Control | Action |
|---|---|
| WASD / Arrow Keys | Move controlled player |
| Shift | Sprint |
| Space | Smart pass using passing-lane risk |
| J | Shoot |
| Tab | Switch controlled player |
| C | Change camera |
| R | Reset game |
| Mobile D-pad | Move controlled player |
| Mobile Run | Sprint |
| Mobile Pass / Shoot / Switch / Cam | Main basketball actions |

## Current gameplay systems

- Denver Peaks vs Canyon Comets playable short game
- One-player control with teammate/opponent AI
- Shot feedback for release, contest, distance, and make chance
- Passing-lane preview, pass-risk feedback, and interceptions
- Multiple camera modes
- Desktop and mobile control paths

## Testing

A lightweight Playwright smoke test is included. After installing dependencies:

```bash
npm install
npx playwright install chromium
npm test
```

The current test checks that the latest playable HTML launches, renders the canvas, exposes the scoreboard/HUD, includes mobile controls, shows shot/pass feedback, and handles basic keyboard actions without page errors.
