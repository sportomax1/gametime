# Changelog

## v007 - Realism tuning and possession direction

Built the next small playable iteration on top of v006.

### Added

- New versioned playable file at `versions/gametime_v007.html`
- Live Realism Tuning panel showing 2PT FG%, 3PT FG%, turnover rate, possession count, and shot sample size
- More visible target ranges for realistic arcade outcomes: 2PT, 3PT, and turnover rates
- Possession direction arrow in the scoreboard and on-court attacking-hoop indicator
- Shot feedback now reports shot zone instead of only raw distance, making the probability easier to understand
- Tuned shot, pass, steal, and cut probability caps to reduce extreme outcomes
- `latest.html` now points to v007
- `index.html` now links to v007 through v001
- README and Playwright smoke test updated for v007

### Why this was chosen

v006 added off-ball cuts and improved mobile court visibility. The next foundation step was making the game explain and police its own basketball math. A realistic-arcade game should show whether the action is producing believable 2PT, 3PT, and turnover rates instead of hiding everything behind invisible dice rolls. The possession arrow also makes direction easier to read, especially on mobile.

### Recommended next improvements

- Add basic play-call buttons such as Cut, Screen, Space, and Iso
- Add a simple team select screen using the fictional league directory
- Start separating rosters, ratings, and tuning constants from the single HTML file
- Add rebounds and steals to the live stats overlay
- Add mobile viewport Playwright coverage for the collapsed HUD state

## v006 - Off-ball cuts, mobile HUD collapse, and realistic arcade tuning

Built the next small playable iteration on top of v005.

### Added

- New versioned playable file at `versions/gametime_v006.html`
- Off-ball cuts that let teammates make timed rim runs instead of holding static spacing
- Cut-lane feedback panel showing cutter, lane, cut chance, and result
- Cut-lane indicators drawn on the court so the pass window is visible
- Smart pass target scoring now rewards active cutters and safer cutter lanes
- Collapsible HUD button plus `H` keyboard shortcut so mobile players can clear the court view
- Player HUD now shows active cut count
- Shot probability tuning for more realistic arcade percentages across layups, close shots, midrange, and threes
- Slightly lower pass interception and steal rates so turnovers feel earned instead of chaotic
- `latest.html` now points to v006
- `index.html` now links to v006, v005, v004, v003, v002, and v001
- README and Playwright smoke test updated for v006

### Why this was chosen

v005 made passing lanes meaningful. The next logical step was helping teammates create those lanes. Off-ball cuts make the 5v5 game feel more alive and give the user a basketball reason to pass instead of dribbling until a shot appears. The mobile HUD collapse also responds to the need to keep the playing area visible on phones.

### Recommended next improvements

- Add basic play-call buttons such as Cut, Screen, Space, and Iso
- Add a simple team select screen using the fictional league directory
- Begin separating shared roster/rating/game constants from the HTML file
- Add a small stats overlay for FG%, 3PT%, turnovers, rebounds, and steals
- Add mobile viewport Playwright coverage for the collapsed HUD state

## v005 - Passing lane risk and interceptions

Built the next small playable iteration on top of v004.

### Added

- New versioned playable file at `versions/gametime_v005.html`
- Pass feedback panel showing target, lane quality, interception risk, and outcome
- Passing lane preview drawn on the court for the user-controlled ball handler
- Defender proximity checks along the passing segment, not just near the passer or receiver
- Interception outcomes when a risky pass is thrown through a defender's lane
- Smarter pass target selection that weighs shooting value, spacing, advancement, target separation, and lane danger
- AI pass selection now avoids high-risk passes unless the shot clock is forcing action
- `latest.html` now points to v005
- `index.html` now links to v005, v004, v003, v002, and v001
- README and Playwright smoke test updated for v005

### Why this was chosen

v004 made shooting understandable with release, contest, distance, and make chance. The next best foundation step was doing the same for passing. Basketball feels more real when passing lanes matter, defenders can jump bad decisions, and the player understands why a pass was safe or risky.

### Recommended next improvements

- Add off-ball cuts so teammates actively create better passing lanes
- Add possession arrows and clearer offensive direction indicators
- Add a simple fictional team select screen using the league directory
- Begin separating shared rosters, ratings, and game constants from the HTML file
- Add a Playwright check for v005 pass feedback after pressing Space

## v004 - Shot feedback and make-chance UI

Built the next small playable iteration on top of v003.

### Added

- New versioned playable file at `versions/gametime_v004.html`
- Shot feedback panel showing release grade, contest level, shot distance, and expected make chance
- Make-chance bar that fills based on the computed shot probability
- Shot outcome copy that updates after makes and misses
- Dashed shot arc indicator while the ball is airborne
- `latest.html` now points to v004
- `index.html` now links to v004, v003, v002, and v001
- Playwright smoke test now verifies the v004 shot feedback panel and shoot action

### Why this was chosen

v003 made the game playable on desktop and mobile with the Denver Peaks identity in place. The next most valuable small improvement was explaining every shot. A realistic-arcade basketball game needs shots to feel earned, so v004 exposes the hidden calculation instead of making shooting feel like a mystery coin flip.

### Recommended next improvements

- Improve pass selection with safer passing lanes and interception risk
- Add off-ball cuts so teammates relocate instead of holding static spacing
- Add a simple team select screen using the fictional league directory
- Add clearer possession arrows and offensive direction indicators
- Begin separating shared game data from the HTML file once the SPA gets larger

## v003 - Denver Peaks and mobile controls

Built the next small playable iteration on top of v002.

### Added

- New versioned playable file at `versions/gametime_v003.html`
- Denver Peaks as the primary fictional user-controlled team
- A lightweight fictional league directory in code to support more fake teams over time
- Mobile-friendly touch controls with a movement pad, sprint button, pass, shoot, switch, and camera buttons
- Shared input handling so keyboard and touch controls drive the same player movement/actions
- Mobile layout refinements for the scoreboard, HUD, footer, and control overlay
- Center-court Denver Peaks branding
- `latest.html` now points to v003
- `index.html` now links to v003, v002, and v001
- README updated for v003 controls and team direction

### Why this was chosen

The newest project direction explicitly called for mobile-friendly controls and Denver Peaks. This was the best next foundation step because the game needs to be playable on phones before deeper basketball systems are layered on. It also establishes the preferred fictional-team identity early without locking the project into real NBA teams.

### Recommended next improvements

- Add shot feedback UI: release quality, contest level, and expected make chance
- Add a simple team select screen using the fictional league directory
- Improve pass selection with safer passing lanes and interception risk
- Add off-ball cuts so teammates do more than hold spacing spots
- Add Playwright mobile viewport coverage for the touch controls

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
