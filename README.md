# Gametime Basketball

Current playable version: `versions/gametime_v029.html`.

Gametime Basketball is a realistic-arcade basketball prototype with preserved playable versions, fictional teams, fictional players, mobile and desktop controls, player ratings, stamina, matchup reads, and screen coverage coaching.

Open `index.html` or `latest.html` in a browser.

## Direction

- Fictional teams and fictional players only
- Denver Peaks remain the default user team
- Short arcade-style games
- One controlled player at a time
- Mobile-friendly controls and readable court space
- Canvas-first foundation, with a path toward Three.js later
- Playable games only, not franchise management

## v029

- Adds `versions/gametime_v029.html`
- Adds a Screen Coverage Coach overlay
- Shows coverage, pressure, matchup, and next offensive read
- Keeps the v028 playable build available in the game frame

## Recent versions

- v028 — Defensive matchup reads and on-ball pressure
- v027 — Stamina and turbo affect ratings
- v026 — Player ratings drive basketball outcomes
- v025 — Compact Rules drawer
- v024 — Toggleable bonus rules
- v023 — Bonus Watch panel
- v022 — Live final-free-throw rebounds
- v021 — Free throw timing meter
- v020 — Playable free throws
- v019 — Shot-contest whistle risk
- v018 — Final buzzer recap overlay
- v017 — Live team stats
- v016 — Rebound foul risk and Foul Watch
- v015 and earlier — Preserved foundation builds

## Testing

```bash
npm install
npx playwright install chromium
npm test
```
