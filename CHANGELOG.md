# Changelog

## v002 - Movement and dribble polish

Built the next small playable iteration on top of v001.

### Added

- New versioned playable file at `versions/gametime_v002.html`
- Momentum-based movement with velocity, acceleration, friction, and softer stopping
- Sprint behavior tied more directly to energy and player speed ratings
- Live dribble bounce that follows the ball handler instead of sticking rigidly to the player
- Player body lean, foot movement, and shadows to make motion easier to read
- Speed readout and visual energy meter in the HUD
- Small moving-shot penalty so sprinting straight into a jumper is less automatic
- Slight possession cooldown after rebounds and steals to reduce instant chaos
- `latest.html` now points to v002
- `index.html` now links to v002 and v001

### Why this was chosen

v001 was already a playable 5v5 foundation. The next most valuable improvement was the core feel of controlling a player. Basketball games live or die on movement, momentum, and dribble feel, so v002 improves the foundation before adding flashier features.

### Recommended next improvements

- Add shot feedback UI: release quality, contest level, and expected make chance
- Improve pass selection with safer passing lanes and interception risk
- Add off-ball cuts so teammates do more than hold spacing spots
- Add clearer possession arrows and team direction indicators
- Add Playwright coverage for v002-specific HUD and camera behavior

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
