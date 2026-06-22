# Changelog

## v032 - Screen-switch coverage reads

Built the next small playable iteration on top of v031.

### Added

- New versioned playable file at `versions/gametime_v032.html`
- Screen Switch feedback panel showing coverage type, screener, new defender, and slip-risk percentage
- `2` keyboard control plus a Screen touch/control button to call a pick during live play
- Switch / Hedge / Drop / Fight Over / Trap coverage reads that can change the primary defender and recalculate help defense
- Purple on-court screen tether so the active screener is visible during the pick action
- Shot and pass outcomes now account for the active screen coverage read, not just static on-ball pressure
- Updated latest pointer, landing page, README, and Playwright smoke coverage for v032

### Why this was chosen

v031 made the second defender readable through help-defense lane tags. The next logical basketball step was making screens change those reads. Real 5v5 possessions constantly create new matchups through picks: defenses switch, hedge, drop, fight over, or trap. v032 gives that decision a dedicated panel, lets a screen actually change the live defender, and makes help-defense risk recalculate from the new coverage.

### Recommended next improvements

- Reconnect v032 screen-switch reads into the fuller foul/free-throw/box-score stack
- Add a compact in-game player box panel that can be toggled without waiting for the summary overlay
- Add roll/pop outcomes after screens so the screener becomes a scoring or passing target
- Move league/team/player/rule data out of the single HTML file into shared JavaScript modules
- Add practice/free-shoot mode for testing shots, passes, stamina, help defense, screens, and matchup pressure quickly

## v031 - Help defense lane tags

Built the next small playable iteration on top of v030.

### Added

- New versioned playable file at `versions/gametime_v031.html`
- Help Defense feedback panel showing helper, lane tag, help-risk percentage, and rotation read
- Green on-court HELP label and dashed helper tether for the nearest second defender
- Pass risk now blends on-ball pressure with second-defender lane shrink so help defense affects outcomes, not just visuals
- Updated latest pointer, landing page, README, and Playwright smoke coverage for v031

### Why this was chosen

v030 made the primary ball-handler matchup readable. The next logical basketball step was showing the second defender. Real possessions are shaped by more than the on-ball defender: gap help, stunts, traps, and late rotations determine whether a pass is safe. v031 makes that lane help visible and hooks it into pass risk so the arcade read is more basketball-real.

### Recommended next improvements

- Add screen-switch matchup updates so picks can change both the primary defender and the help defender
- Add a compact in-game player box panel that can be toggled without waiting for the summary overlay
- Reconnect the live label work into the fuller foul/free-throw/box-score stack
- Move league/team/player/rule data out of the single HTML file into shared JavaScript modules
- Add practice/free-shoot mode for testing shots, passes, stamina, help defense, and matchup pressure quickly

## v030 - Live matchup labels

Built the next small playable iteration on top of v029.

### Added

- New versioned playable file at `versions/gametime_v030.html`
- Live on-court labels above the ball handler and the primary defender
- Dashed matchup tether that updates as possession, control, and spacing change
- Live Matchup panel showing handler, defender, pressure level, and creator edge
- A compact playable Canvas build with fake teams, fake players, desktop controls, mobile joystick/touch controls, no text selection, team select, camera changes, auto offense, player switching, shot/pass/jump/steal actions, and realism pulse stats
- Shot and pass outcomes now respond to the live pressure read so the labels are not cosmetic only

### Why this was chosen

v029 made individual player production visible in the box score. The next logical foundation step was making the current one-on-one matchup visible during live play. A premium basketball game needs the player to understand who has the ball, who is guarding them, whether pressure is heavy, and whether the creator has an edge before shooting or passing.

### Recommended next improvements

- Reconnect v030 live matchup labels into the full v029 feature stack instead of keeping this as a compact playable slice
- Add help-defense tags for the nearest second defender in passing lanes
- Add screen-switch matchup updates so picks can change the primary defender
- Add a compact in-game player box panel that can be toggled without waiting for the summary overlay
- Move league/team/player/rule data out of the single HTML file into shared JavaScript modules

## v029 - Individual fake-player box scores

Built the next small playable iteration on top of v028.

### Added

- New versioned playable file at `versions/gametime_v029.html`
- Player-level box-score rows in the end summary for every fake player on both teams
- Individual tracking for points, rebounds, offensive rebounds, assists, steals, blocks, fouls, turnovers, and remaining stamina
- Made field goals, threes, free throws, rebounds, offensive rebounds, pass interceptions, shot-clock violations, and fouls now feed player stat lines
- The header now surfaces the controlled player's PTS / REB / AST line so production is visible before the final buzzer
- End summary now identifies a top scorer and keeps average stamina alongside the new player rows
- `latest.html` now points to v029
- `index.html`, README, and Playwright smoke test updated for v029

### Why this was chosen

v028 made defensive pressure readable. The next best foundation step was making player production readable. A premium sports game needs to explain not just which team won, but which fake players actually drove the result. v029 creates the first lightweight box-score model so future ratings, stamina, AI roles, matchups, assists, foul trouble, substitutions, and broadcast overlays have a believable statistical backbone.

### Recommended next improvements

- Add visible matchup labels above the ball handler and primary defender during live play
- Add help-defense tags for the nearest second defender in passing lanes
- Add a compact in-game player box panel that can be toggled without waiting for the summary overlay
- Move league/team/player/rule data out of the single HTML file into shared JavaScript modules
- Add a practice/free-shoot mode for testing shots, passes, stamina, free throws, and matchup pressure quickly

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

v027 made stamina and turbo affect player effectiveness. The next best foundation step was making defensive assignments readable. v028 tells the player who is guarding the ball, how much pressure that defender creates, and whether the ball handler has an athletic/scoring edge.

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

v026 made fake-player ratings matter. The next best foundation step was adding stamina so those ratings are not static all game. v027 makes sprinting, repeated jumps, reach attempts, shots, passes, rebounds, and free throws carry a realistic arcade cost.

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

v025 made game rules easier to test. The next best foundation step was making fake players matter. v026 adds a lightweight rating model so fake players no longer feel identical.

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

v024 made bonus behavior configurable. The next best foundation step was moving rule configuration into its own compact drawer instead of cramming every setup control into Matchup Builder.

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

v023 made team fouls matter by awarding bonus free throws after the foul limit. v024 adds one-and-one behavior alongside the simple two-shot bonus so the arcade game can support different realistic basketball rule flavors.

### Recommended next improvements

- Add a compact Rules drawer for game length, foul limit, bonus format, and shot clock presets
- Add clearer lane-violation timing risk on early free-throw rebounds
- Add a dedicated mobile viewport Playwright test that taps Rule, Bonus, and FT controls
- Move league/team/player data out of the single HTML file
- Add a practice/free-shoot mode for testing shot, rebound, foul, bonus, and free-throw systems quickly

## v023 and earlier

Older preserved versions remain available through the versioned HTML files and the landing page. See `versions/gametime_v001.html` through `versions/gametime_v023.html` for earlier playable milestones.
