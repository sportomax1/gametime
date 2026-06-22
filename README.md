# Gametime Basketball

Current playable version: `versions/gametime_v029.html`.

Gametime Basketball is a realistic-arcade basketball prototype with fake teams, fake players, preserved playable versions, mobile/desktop controls, player ratings, stamina, defensive matchup reads, and a new v029 screen coverage coach layered above the v028 playable foundation.

Open `index.html` or `latest.html` in a browser.

## v029

- Adds `versions/gametime_v029.html`
- Adds a Screen Coverage Coach overlay
- Cycles through Switch, Hedge, Fight over, and No screen reads
- Shows coverage, pressure, matchup, and next offensive read
- Keeps the v028 playable build available in the game frame

## Testing

```bash
npm install
npx playwright install chromium
npm test
```
