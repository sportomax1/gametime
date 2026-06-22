# Changelog

## v027 - Stamina and turbo affect ratings

Built the next small playable iteration on top of v026.

### Added

- New versioned playable file at `versions/gametime_v027.html`
- Stamina / Turbo feedback panel showing controlled-player energy, turbo state, fatigue effect, and recovery state
- Sprint movement with `Shift` that boosts speed but drains stamina faster
- Stamina drain for shots, passes, jumps, steals, free throws, and rebound attempts
- Off-ball stamina recovery so switching and spacing have a gameplay reason
- Fatigue-adjusted effective SHO, PAS, REB, DEF, FT, and SPD outcomes
- Stamina bars under players on the court so tired legs are visible during play
- End-of-game summary now includes average team stamina
- `latest.html` now points to v027
- `index.html`, README, and Playwright smoke test updated for v027

### Why this was chosen

v026 made fake-player ratings matter. The next best foundation step was adding stamina so those ratings are not static all game. v027 makes sprinting, repeated jumps, reach attempts, shots, passes, rebounds, and free throws carry a realistic arcade cost: fresh players pop, tired players lose efficiency. That is a core sports-game loop before deeper AI, rotations, and matchup logic.

### Recommended next improvements

- Add individual fake-player box-score rows for points, rebounds, assists, steals, blocks, fouls, and stamina at the final buzzer
- Add visible matchup labels for who is guarding the ball handler
- Add a practice/free-shoot mode for testing rating and stamina effects quickly
- Move league/team/player/rule data out of the single HTML file into shared JavaScript modules
- Add fatigue-aware AI substitutions later only if the project eventually expands beyond short arcade games

## v026 - Player ratings drive basketball outcomes

Built the next small playable iteration on top of v025.

### Added

- New versioned playable file at `versions/gametime_v026.html`
- Player Ratings panel showing the controlled player's SHO, PAS, REB, DEF, FT, and SPD
- Position-based fake player ratings for guards, wings, forwards, and centers
- Fictional team identity modifiers so fake clubs feel different without using real teams or players
- Shot chance now uses the shooter's SHO rating, shot type, and play-call context
- Pass risk now uses passer PAS rating and can create rating-driven turnovers/interceptions
- Rebound outcomes now use REB rating instead of being mostly pure random resolution
- Defensive contests, steals, and whistle risk now use DEF rating
- Free throws now use the player's FT rating plus timing-meter release quality
- Movement speed now scales from the controlled player's SPD rating
- End-of-game summary now includes average team SHO / DEF ratings
- `latest.html` now points to v026
- `index.html`, README, and Playwright smoke test updated for v026

### Why this was chosen

v025 made game rules easier to test. The next best foundation step was making fake players matter. v026 adds a lightweight rating model so Denver Peaks players, opposing fake teams, guards, wings, and bigs no longer feel like identical circles wearing different shoes. This is a key bridge toward a real 5v5 simulator because future AI, shot selection, rotations, and matchups need player attributes underneath them.

### Recommended next improvements

- Move league/team/player/rule data out of the single HTML file into shared JavaScript modules
- Add visible matchup labels for who is guarding the ball handler
- Add a practice/free-shoot mode for testing rating effects on shots, passes, rebounds, fouls, bonus, and free throws
- Add stamina drain/recovery tied to speed, sprinting, and repeated actions
- Add a box-score roster table so individual fake-player stats can be shown at the final buzzer

## v025 - Compact Rules drawer and game presets

Built the next small playable iteration on top of v024.

### Added

- New versioned playable file at `versions/gametime_v025.html`
- Compact Rules drawer separated from the Teams drawer so mobile players can adjust rules without burying the court
- Game length presets for 2:00 Quick, 3:00 Arcade, and 5:00 Showcase
- Shot-clock presets for 14, 18, and 24 seconds
- Team-foul bonus limit presets for 4, 5, and 6 fouls
- Bonus format selector for two-shot bonus or one-and-one behavior
- `G` keyboard shortcut, Rules button, mobile Rules button, and Apply Rules button
- Scoreboard and end summary now surface the active rules preset alongside score, shot clock, fouls, bonus, and FT splits
- `latest.html` now points to v025
- `index.html`, README, and Playwright smoke test updated for v025

### Why this was chosen

v024 made bonus behavior configurable. The next best foundation step was moving rule configuration into its own compact drawer instead of cramming every setup control into Matchup Builder. v025 makes short arcade game tuning easier to test while protecting the playable court view on mobile.

### Recommended next improvements

- Reconnect the full v024 free-throw lane and box-out systems into the v025 rules preset structure
- Add lane-violation timing risk on early free-throw rebounds
- Move league/team/player/rule data out of the single HTML file
- Add a practice/free-shoot mode for testing shot, rebound, foul, bonus, and free-throw systems quickly
- Add modular shared JavaScript so future versions can evolve without copying giant HTML files

## v024 - Toggleable one-and-one bonus rules

Built the next small playable iteration on top of v023.

### Added

- New versioned playable file at `versions/gametime_v024.html`
- Bonus Rule toggle that switches between two-shot bonus and one-and-one / double-bonus style handling
- `N` keyboard shortcut, Matchup Builder Bonus Rule button, Force 1+1 button, and mobile Rule button for quick rule testing
- One-and-one free throw logic: the first make earns a second shot; a first miss becomes a live lane rebound
- Bonus Watch panel now shows the active bonus rule instead of only a fixed threshold
- Scoreboard and end summary now surface the bonus rule so late-game foul context is visible
- `latest.html` now points to v024
- `index.html`, README, and Playwright smoke test updated for v024

### Why this was chosen

v023 made team fouls matter by awarding bonus free throws after the foul limit. The next best rules-engine step was making the bonus system configurable. v024 adds one-and-one behavior alongside the simple two-shot bonus so the arcade game can support different realistic basketball rule flavors without turning into franchise-management soup.

### Recommended next improvements

- Add a compact Rules drawer for game length, foul limit, bonus format, and shot clock presets
- Add clearer lane-violation timing risk on early free-throw rebounds
- Add a dedicated mobile viewport Playwright test that taps Rule, Bonus, and FT controls
- Move league/team/player data out of the single HTML file
- Add a practice/free-shoot mode for testing shot, rebound, foul, bonus, and free-throw systems quickly

## v023 - Bonus free throws after team-foul threshold

Built the next small playable iteration on top of v022.

### Added

- New versioned playable file at `versions/gametime_v023.html`
- Bonus Watch feedback panel showing home bonus, away bonus, threshold, and foul outcome
- Team-foul bonus rule: non-shooting fouls are side-out fouls before bonus, then become bonus free throws after 5 defending-team fouls
- Force Bonus button, mobile Bonus button, and `B` shortcut for quick rules testing
- Scoreboard now calls out bonus status alongside fouls and free throws
- End-of-game summary now includes bonus status as part of the rules/stat recap
- `latest.html` now points to v023
- `index.html`, README, and Playwright smoke test updated for v023

### Why this was chosen

v022 connected final missed free throws to live lane rebounds. The next best basketball step was making accumulated fouls matter. v023 adds a simple bonus threshold so defensive mistakes have realistic arcade consequences: early non-shooting fouls are side-outs, but once a team reaches the limit, the offense gets free throws. That turns team fouls from scoreboard decoration into actual game pressure.

### Recommended next improvements

- Add one-and-one versus two-shot bonus variations as game rules mature
- Add a dedicated mobile viewport test that drags the joystick and taps Bonus / FT
- Add clearer lane-violation timing risk on early rebounds
- Move league/team/player data out of the single HTML file
- Add a practice/free-shoot mode for testing shot, rebound, foul, bonus, and free-throw systems quickly

## v022 - Live lane rebounds on final missed free throws

Built the next small playable iteration on top of v021.

### Added

- New versioned playable file at `versions/gametime_v022.html`
- Final missed free throws now stay live instead of becoming automatic possession flips
- Lane-line player alignment during free throws so the court visually prepares for a possible rebound
- Rebound Battle and Box-Out Timing feedback now call out lane release, lane players, final FT misses, and offensive/defensive board outcomes
- Game Stats and end summary now surface rebound / offensive rebound results alongside free throws
- `latest.html` now points to v022
- `index.html`, README, and Playwright smoke test updated for v022

### Why this was chosen

v021 made free throws skill-based with a timing meter. The next best basketball step was handling what happens after the final miss. v022 keeps the ball live, positions lane rebounders, and lets final missed free throws create offensive or defensive board outcomes. That makes foul shots feel connected to real basketball possessions instead of isolated mini coin flips.

### Recommended next improvements

- Add bonus / one-and-one behavior once team fouls matter late in games
- Add a dedicated mobile viewport test that drags the joystick and taps FT
- Move league/team/player data out of the single HTML file
- Add clearer lane-violation timing risk on early rebounds
- Add a practice/free-shoot mode for testing shot, rebound, foul, and free-throw systems quickly

## v021 - Timed free throw release meter

Built the next small playable iteration on top of v020.

### Added

- New versioned playable file at `versions/gametime_v021.html`
- Free Throw Timing feedback panel showing shooter, trip progress, live meter position, and result
- Green-window free throw release meter on the canvas so pressing `F` / mobile `FT` is skill-based instead of only random
- Free throw chance now changes with release quality: Perfect, Good, Early, or Late
- Matchup Builder `Practice FT` and `Release FT` buttons remain available for quick testing
- FT made/attempted stats continue to update the scoreboard, live stat panel, and end-of-game summary
- `latest.html` now points to v021
- `index.html`, README, and Playwright smoke test updated for v021

### Why this was chosen

v020 connected shooting fouls to free throws, which was the right rules-engine step. The next best improvement was making those free throws playable. v021 adds a simple timing meter so the user has a real input moment at the line, while still preserving realistic arcade make percentages and visible FT stats.

### Recommended next improvements

- Add lane-line rebound positioning for missed final free throws
- Add a dedicated mobile viewport test that drags the joystick and taps FT
- Move league/team/player data out of the single HTML file
- Add one-and-one / bonus behavior once team fouls matter late in games
- Add a practice/free-shoot mode for testing shot, rebound, foul, and free-throw systems quickly

## v020 - Playable free throw flow after shooting fouls

Built the next small playable iteration on top of v019.

### Added

- New versioned playable file at `versions/gametime_v020.html`
- Free Throw Flow feedback panel showing shooter, trip progress, free-throw rate, and result
- Shooting fouls can now create playable two-shot free-throw trips instead of only showing a whistle message
- `F` keyboard shortcut, mobile `FT` button, and Matchup Builder practice/shoot buttons for testing free throws quickly
- Free throws update score, FT made/attempted stats, scoreboard FT splits, and the end-of-game summary table
- Realism Tuning panel now includes a visible FT% target range
- `latest.html` now points to v020
- `index.html`, README, and Playwright smoke test updated for v020

### Why this was chosen

v019 made shot defense more realistic by adding late-contest whistle risk and verticality feedback. The next best basketball step was finishing that loop: a shooting foul should lead to free throws, not just a panel update. v020 adds a small but important payoff system so aggressive contests have scoreboard consequences and the game moves closer to a full arcade basketball rules engine.

### Recommended next improvements

- Add a dedicated mobile viewport test that drags the joystick and confirms movement
- Move league/team/player data out of the single HTML file
- Add a practice/free-shoot mode for testing shot, rebound, foul, and free-throw systems quickly
- Add lane-line rebound positioning during free throws
- Add one-and-one / bonus behavior once team fouls matter late in games

## v019 - Shot contest whistle risk and verticality feedback

Built the next small playable iteration on top of v018.

### Added

- New versioned playable file at `versions/gametime_v019.html`
- Contest Whistle feedback panel showing timing, verticality, distance, and whistle result
- Late block / shot-contest logic where aggressive or late contests can create foul outcomes
- Clean vertical contests can generate pressure or block credit without automatically becoming a foul
- Shot-contest fouls now feed team foul totals and the end-of-game stat summary
