# Changelog

## v001 - First playable foundation

Created the first playable Gametime Basketball prototype.

### Added

- Single-file HTML Canvas SPA at `versions/gametime_v001.html`
- Fictional teams: Metro Meteors and Canyon Comets
- Fictional 5-player rosters with position-based ratings
- Short 3-minute arcade game clock
- Shot clock
- Scoreboard and broadcast-inspired HUD
- One-player control model with player switching
- Passing, shooting, rebounding, steals, made/missed shot outcomes
- Basic teammate spacing and opponent defensive tracking
- Four camera modes: Full Court, Broadcast, Player Follow, Half Court
- `latest.html` pointer to the current playable version
- Project landing page at `index.html`
- Lightweight Playwright smoke-test setup

### Why this was chosen

The repo was empty, so the most valuable first step was establishing a playable foundation instead of adding isolated systems. v001 creates the first comparable build and gives future runs a clear file/version structure.

### Recommended next improvements

- Improve ball handling feel and player acceleration
- Add cleaner possession transitions after rebounds and steals
- Add visible shot feedback meter or shot quality label
- Improve AI spacing so off-ball players cut and relocate more intelligently
- Expand camera polish before moving toward 3D
