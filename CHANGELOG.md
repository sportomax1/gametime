# Changelog

## v028 - Defensive matchup reads and on-ball pressure

Built the next small playable iteration on top of v027.

### Added

- New versioned playable file at `versions/gametime_v028.html`
- Matchup Read feedback panel showing current handler, primary defender, pressure level, and creator edge
- On-court dashed defender tether that highlights who is guarding the ball handler
- Shot feedback now accounts for matchup pressure, so heavy on-ball pressure lowers make chance
- Pass feedback now accounts for matchup pressure, so crowded reads carry higher turnover risk
- End summary now includes matchup context so pressure can be interpreted after the game
- `latest.html` now points to v028
- `index.html`, README, and Playwright smoke test updated for v028

### Why this was chosen

v027 made stamina and turbo affect player effectiveness. The next best foundation step was making defensive assignments readable. v028 tells the player who is guarding the ball, how much pressure that defender creates, and whether the ball handler has an athletic/scoring edge. That is a small but important bridge toward real 5v5 basketball because future AI, screens, switches, mismatches, help defense, and shot selection all need visible matchup context.

### Recommended next improvements

- Add screen-switch matchup updates so the Matchup Read panel reacts after picks
- Add help-defense tags for the nearest second defender in the passing lane
- Add a compact individual box-score table for fake-player points, rebounds, assists, fouls, and stamina
- Move league/team/player/rule data out of the single HTML file into shared JavaScript modules
- Add a practice/free-shoot mode for testing shots, passes, stamina, free throws, and matchup pressure quickly

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

## v023 and earlier

Older preserved versions remain available through the versioned HTML files and the landing page. See `versions/gametime_v001.html` through `versions/gametime_v023.html` for earlier playable milestones.
