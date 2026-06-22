# Changelog

## v034 - Live in-game box score panel

Built the next small playable iteration on top of v033.

### Added

- New versioned playable file at `versions/gametime_v034.html`
- Live In-Game Box Score panel that updates during play instead of waiting for a final summary
- Box rows for every fake player with PTS, REB, AST, TO, and impact
- `B` keyboard control plus Box touch/control button to compact or expand the box panel
- Header production line for the controlled player's PTS / REB / AST
- On-court LIVE BOX leader callout so the current top contributor is visible during play
- Shot, roll/pop, rebound, assist, steal, and turnover events now feed the live box panel
- Updated latest pointer, landing page, README, and Playwright smoke coverage for v034

### Why this was chosen

v033 made the screen action become a live roll, pop, or slip target. The next best foundation step was making player production visible without waiting for an end-of-game overlay. A premium sports game needs the player to understand who is carrying the possession, who is creating assists, and who is hurting the team with turnovers while the game is still being played. v034 adds that broadcast-style feedback loop.

### Recommended next improvements

- Add a defensive tag decision panel showing whether the helper stayed home, tagged the roller, or gave up a kickout
- Reconnect the screen/roll/pop slice into the fuller foul/free-throw/box-score stack
- Start extracting shared league/player/UI data into JavaScript modules so the version files stop growing as copied giant HTML files
- Add practice/free-shoot mode for testing shots, passes, stamina, help defense, screens, rolls, and box-score events quickly
- Add small player foul-trouble cues to the live box panel once the foul stack is reconnected

## v033 - Roll/pop screener reads

Built the next small playable iteration on top of v032.

### Added

- New versioned playable file at `versions/gametime_v033.html`
- Roll / Pop Read feedback panel showing action, target, window percentage, and result
- `3` keyboard control plus Roll touch/control button to hit the screener after a pick
- Roll / Pop / Slip reads generated from the active screen coverage result
- Orange on-court roll/pop lane that shows where the screener is attacking after the screen
- Screener can now become a live scoring target after the pick instead of only being a coverage indicator
- Roll/pop outcomes can create roll finishes, pick-and-pop looks, or help-defense deflections
- Shot/pass logic now accounts for the active roll/pop window alongside pressure, help defense, and screen coverage
- Updated latest pointer, landing page, README, and Playwright smoke coverage for v033

### Why this was chosen

v032 made screens change the defender and help context. The next basketball step was giving the screener a purpose after contact. In real 5v5 possessions, the screen is only half the action: the roll, pop, or slip forces the defense to choose between protecting the ball, tagging the big, or giving up an open look. v033 makes that second phase readable and playable.

### Recommended next improvements

- Reconnect the screen/roll/pop slice into the fuller foul/free-throw/box-score stack
- Add a compact in-game player box panel that can be toggled without waiting for the summary overlay
- Add a defensive tag decision panel showing whether the helper stayed home, tagged the roller, or gave up a kickout
- Move league/team/player/rule data out of the single HTML file into shared JavaScript modules
- Add practice/free-shoot mode for testing shots, passes, stamina, help defense, screens, rolls, and matchup pressure quickly

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

## v027 through v024

Preserved playable milestones remain available in `versions/`. Recent preserved systems include stamina and turbo rating effects, player ratings driving outcomes, compact game-rule presets, and toggleable one-and-one bonus rules.

## v023 and earlier

Older preserved versions remain available through the versioned HTML files and the landing page. See `versions/gametime_v001.html` through `versions/gametime_v023.html` for earlier playable milestones.
