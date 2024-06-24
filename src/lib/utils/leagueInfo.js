/*   STEP 1   */
export const leagueID = "734575705194618880"; // your league ID
export const leagueName = "Win Lizzy Brandonisio's Money League"; // your league name
export const dues = 30; // (optional) used in template constitution page
export const dynasty = true; // true for dynasty leagues, false for redraft and keeper
export const enableBlog = false; // requires VITE_CONTENTFUL_ACCESS_TOKEN and VITE_CONTENTFUL_SPACE environment variables

/*   STEP 2   */
export const homepageText =
<html lang="en">
<body>

    <h1>Win Dan Buck’s Money League</h1>

    <h2>Important Dates</h2>
    <ul>
        <li><strong>The Summit</strong> - Spring during the offseason. The specific date is to be determined by the league via email.</li>
        <li><strong>Draft</strong> - Summer. The specific date is to be determined by the league via Slack.</li>
        <li><strong>IN-Season</strong> - Post-draft to the last NFL game of the regular season.</li>
        <li><strong>OFF-Season</strong> - First day after the last NFL game of the regular season to our draft day.</li>
        <li><strong>Keeper Lock Date</strong>: 3 full days before the draft. If the draft is on a Sunday at 1 p.m., Keepers will lock on Thursday at 12:00 AM.</li>
        <li><strong>Trade Deadline (No Trades Allowed)</strong> - Trades are permitted year-round (with the exception of the NO-Trade period, which begins when the first game of week 9 begins). Trades will not be allowed from this date until one week after the championship for our league has concluded and a winner has been announced.</li>
    </ul>

    <h2>League Membership</h2>
    <p><strong>New Owners</strong>. Finding a replacement owner will be handled on a case-by-case basis, the new owner will receive no picks as compensation.</p>
    <p>To kick an owner from the league must vote 66% in favor of the kick (6 of 10)</p>

    <h2>General Rules</h2>
    <p><strong>Wardens of Collusion</strong>. If there is a team suspected of colluding (short term trades, etc.) the commissioner and two others (to be appointed) will investigate and a 2/3 ruling can decide the fate of a transaction or team owner(s).</p>
    <p><strong>Set Your Lineup Right</strong>. A 2/3rds vote will decide the fate of team owner(s) who are not setting proper lineups whether it be benching studs or allowing improper lineups to lock in over the course of a week (i.e. not swapping out injured players).</p>
    <p><strong>Tanking</strong>. Don’t. Tanking (referring to intentionally setting a poor lineup in order to get a better draft position), can be subjective and inherently difficult to police, but like pornography, you know it when you see it. Starting lineups should be submitted as complete and in the best interest of that team. This is not just for that team's win/loss ratio, but for their opponent's and the overall parity of the league. Handing out easy wins in pay league as competitive as this one, will not be allowed. If an owner is accused of not submitting its best lineup, the commissioner will make a ruling. If an owner is guilty of tanking, they will lose their draft position relative to the severity of the offense. Repeated offenses may lead to ejection from the league. Inactivity may be interpreted as tanking and dealt with in the same manner This is different from teams "rebuilding" or trading away key assets for draft picks or players with potential. Please continue to set an optimal line up even if your roster is missing an RB/WR1.</p>

    <h2>League Dues</h2>
    <p><strong>Dues Diligence</strong>: League dues are required to be paid by Week 4 each season. They forfeit all match-ups that finish before their dues are paid.</p>
    <p><strong>League Dues</strong>: $30 per team for the 2020-2021 season totaling to $300</p>
    <h3>Payouts:</h3>
    <ul>
        <li>1st Place - $180 (6x)</li>
        <li>2nd Place - $90 (3x)</li>
        <li>3rd Place - $30 (Money Back)</li>
    </ul>

    <h2>Roster</h2>
    <p>Roster composition can be found on our ESPN League page here: 
        <a href="https://fantasy.espn.com/football/league/settings?leagueId=80949568">ESPN League Page</a></p>
    <p>Players on your roster remain on your roster until one of the following happens:</p>
    <ul>
        <li>You drop them from your roster</li>
        <li>You choose NOT to “keep” them at the keeper lock date</li>
        <li>You trade them to another team</li>
        <li>They retire from football and move on to bigger and better things</li>
    </ul>
    <p>Note: you are permitted to own players that are not on NFL rosters in the hopes they may join a roster, as long as they are in the “player universe” as specified by the ESPN website. Additionally, if players are currently on NFL rosters, but not in the “player universe” they are permitted to be drafted, but the draftee must hold an open roster spot for them until they become “available” to pick up. They may “drop” said player by announcing to the league (and confirming with the commissioner. If the open roster spot is filled prior to announcing the dropped player, the manager loses rights to said player. College players cannot be added/pickup up prior to entering the NFL via draft).</p>

    <h2>Keepers</h2>
    <p>A team may keep up to 9 players as their starting roster allows. A minimum of 6 players must be kept each season.</p>

    <h3>Rookies</h3>
    <ul>
        <li>Rookies drafted via Snake Draft may be kept, unactivated, up to 3 seasons in their Taxi Squad slot and a total of 4 seasons at their Rookie Auction Value. A Rookies Auction Value is 50% of their ESPN Auction Value (rounded up) from the season they entered the NFL as a Rookie. At the end of 3 seasons on the taxi squad they must be activated at their Rookie Auction Value before the beginning of the following seasons Rookie Draft. At the beginning of a Rookie’s 5th season, their cost will be the current season’s ESPN Auction Value. After which their value will be the current season’s ESPN Auction Value + 10%.</li>
    </ul>

    <h3>Veterans & Auction Drafted Rookies</h3>
    <ul>
        <li>All players not drafted via the Rookie Snake Draft may be kept as a Keeper for 4 seasons</li>
        <li>At the beginning of the 5th Season, the Auction Drafted Player’s cost is what you paid for them the previous season + 10%. Their cost goes up by 10% each consecutive season.</li>
    </ul>

    <h2>Trades</h2>
    <p>Trades are permitted year-round (with the exception of the NO-Trade period: which begins when the first game of week 9 begins. Trades will not be allowed from this date until 1-week after the championship for our league has concluded and a winner has been announced.) When trades are mentioned to include a player’s season, it will be the 16 weeks of the fantasy season unless otherwise stated in the trade.</p>
    <p>3-way trades are permitted.</p>
    <ul>
        <li>All 3 players participating must communicate their agreement to the commissioners via text, email, and/or preferably Slack. The official trade time will be the time of the first communication to the Commissioner.</li>
        <li>There must exist a documented communication trail between the 3 parties that can be made available to the league if requested.</li>
        <li>The trade must exist within the fantasy platform for all to view (no commissioner moves to complete the trade).</li>
    </ul>

    <h3>Players, FAAB & Draft Picks</h3>
    <p>Trades can include players, FAAB money, and/or future rookie draft picks. Trades may not include Auction Draft money. Draft picks in the next 3 drafts can be traded at any time. (Note: This is not the next 3 seasons, but the next three drafts. For example, if the draft for 2021 is held on September 1, prior to the conclusion of the draft on September 1, draft picks can be traded in the 2021, 2022, and 2023 drafts. Immediately after the draft has concluded, the 2024 draft picks can be traded.)</p>
    <p>Any trade made with draft picks must be posted league slack. Please make sure that Tock has noted/commented that the trade was processed (as Slack does not save its message history). It will then be recorded on the Draft Pick Trades sheet in Google Drive. Any player-for-player only trades can be done through the league site directly. All trades will be recorded in the Trade and Draft History Sheet. This will allow us to keep track of all future draft pick moves to keep from any confusion or accidental trading of the same pick more than once. This will also be used for ball-busting purposes.</p>
    <p>Anytime a trade is made where there are conditions related to a players performance for a specific “season”, the term season will be understood to include the entire 17 week NFL season unless specified otherwise.</p>

    <h3>Trades During the Keeper Lock Period</h3>
    <p>Trades are permitted during the Keeper Lock Period, but can only be done so by both texting and Slacking the entire league. Once a trade has been accepted by both parties and one of those parties has texted and Slacked the league, followed by confirmation from the other party so that accusations can’t be made later. Any trades done during the Keeper Lock Period will be adjusted at the draft. Players can ONLY be dropped in a trade during this period if one team is exceeding the number of roster spots permitted. Otherwise, no players are permitted to be dropped.</p>

    <h3>Trades During the Offseason</h3>
    <p>Any trades that are completed in the offseason, the finalized trade must be emailed to the league. Since rosters will be locked, the league commissioner will need to manually push the trade through on the site.</p>

    <h3>Poor Trades/Dumping</h3>
    <p>If it is deemed that a trade is made in a pure “dumping” fashion (reasons may vary), it is required that someone bring this to the league’s notice via email to the google group. If after a review by the Commissioners, the trade may be required to pass a league vote. For the most part, trades will not be voted upon since a dynasty league has future implications for all owners and by no means would any owner, in their right mind, just dump players for no reason at all. Owners may view players in a different light, so a trade may look lopsided to some, but may not to everyone.</p>

    <h2>Expansion</h2>
    <ol>
        <li>Will be determined by a vote</li>
        <li>8 votes in favor of expansion are required.</li>
        <li>If passed the league will follow these steps:</li>
        <ol>
            <li>All existing teams will have the ability to place 40% of their current Starters/Keepers in a "protected status" where they cannot be drafted by the expansion teams.</li>
            <li>The expansion teams will participate in an expansion draft where they pick from the available 10*(#of existing teams) players.</li>
            <li>When a player is drafted from a team, the team losing the player is allowed to protect one additional player (ex: protecting of the remaining 9 starters)</li>
            <li>The expansion teams will have the top picks (alternating by round) of the first rookie draft they participate in.</li>
        </ol>
    </ol>

    <h2>Rule changes</h2>
    <ul>
        <li>Will occur during the offseason between the Superbowl and the NFL draft.</li>
        <li>The requirement for a change will be 66% of votes in favor of the change.</li>
        <li>All proposed rule changes will be presented by the commissioners at either the Summit or Draft. A consensus of 6 owners is required to pass any changes. Reasonable efforts will be made to contact all owners prior to voting, but not all Owners need to be present for changes to take place, simply the consensus of 6.</li>
        <li>The maximum amount of quarterbacks allowed per roster is set at 4.</li>
        <li>Seasons will be 13 weeks long with weeks 14, 15, and 16 set aside for the playoffs</li>
        <li>Free Agency: begins two weeks after the Rookie Draft and concludes at the start of Week 16's Monday Night Game</li>
    </ul>

    <h2>Injured Reserve</h2>
    <ul>
        <li>All teams possess two IR slots for use</li>
        <li>Any positional player may be placed upon IR</li>
        <li>A player cannot be placed on IR unless they designated IR or IR Designated to Return</li>
        <li>Once a player is placed on Fantasy IR, they are out for the season regardless of real-life designation</li>
    </ul>

    <h2>Playoffs</h2>
    <h3>Winners's Playoff Bracket</h3>
    <ul>
        <li>A six-team head-to-head playoff will be held weeks 14, 15, and 16.</li>
        <li>Playoff teams will be determined by regular season record.</li>
        <li>Regular season ties will go to the higher regular season point total.</li>
        <li>The 1st and 2nd Seeds will have a Week 14 BYE.</li>
        <li>Once a team loses, they will be entered into the Winner’s Consolation Ladder</li>
    </ul>

    <h3>Loser Bowl Bracket</h3>

    <h2>Draft</h2>
    <h3>Rookie Snake Draft</h3>
    <p>A 2-round Rookie Snake Draft will take place before the Auction Draft each season.</p>
    <p>Order of the draft will be determined by the winning order of the Loser Bowl. The remaining draft positions will be determined by the reverse order of the Championship Bracket.</p>
    <ul>
        <li>1st Draft position - Loser Bowl Champion – First Among Last</li>
        <li>2nd Draft Position - Loser Bowl 1st Runner-up</li>
        <li>3rd Draft position - Loser Bowl 2nd Runner-up</li>
        <li>4th Draft position - Loser Bowl 3rd Runner-up</li>
        <li>5th Draft position - Loser Bowl 4th Runner-up</li>
        <li>1st Draft position - 5th Place Overall</li>
        <li>1st Draft position - 4th Place Overall</li>
        <li>1st Draft position - 3rd Place Overall</li>
        <li>1st Draft position - League Runner-up</li>
        <li>1st Draft position - League Champion</li>
    </ul>
    <p>Waivers will open after the auction draft. Standard Calendar operation will begin afterward.</p>

</body>
</html>;

/*   STEP 3   */
/*
3 managers as an example. Uncomment (remove the //) before each line to make it live code
If you're having trouble, reference the Training Wheels' Manager Section
https://github.com/nmelhado/league-page/blob/master/TRAINING_WHEELS.md#ii-adding-managers-and-changing-the-homepage-text
*/

// To omit an optional field, set it's value to null

export const managers = [
    {
      "roster": 1,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "Tock",
      "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "Holland", // (optional)
      "bio": "Lorem ipsum...",
      "photo": "https://sleepercdn.com/uploads/74a6930a58b64629aa52cf6cb59fe48f", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2020, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "det", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Q", // Can be anything (usually your rival's name)
        link: 6, // manager array number within this array, or null to link back to all managers page
        image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 3163, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "You miss 100% of the shots you don't take -Wayne Gretzky -Michael Scott",
      "tradingScale": 10, // 1 - 10
      "preferredContact": "Slack", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "roster": 2,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "Lizzy",
      "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "Brooklyn", // (optional)
      "bio": "Lorem ipsum...",
      "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2020, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Rival", // Can be anything (usually your rival's name)
        link: 6, // manager array number within this array, or null to link back to all managers page
        image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Your fantasy team's philosophy",
      "tradingScale": 10, // 1 - 10
      "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "roster": 3,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "Michael",
      "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "Brooklyn", // (optional)
      "bio": "Lorem ipsum...",
      "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2020, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Rival", // Can be anything (usually your rival's name)
        link: 6, // manager array number within this array, or null to link back to all managers page
        image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Your fantasy team's philosophy",
      "tradingScale": 10, // 1 - 10
      "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "roster": 4,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "IDK1",
      "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "Brooklyn", // (optional)
      "bio": "Lorem ipsum...",
      "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2020, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Rival", // Can be anything (usually your rival's name)
        link: 6, // manager array number within this array, or null to link back to all managers page
        image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Your fantasy team's philosophy",
      "tradingScale": 10, // 1 - 10
      "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "roster": 5,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "Q",
      "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "Brooklyn", // (optional)
      "bio": "Lorem ipsum...",
      "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2020, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "buf", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Rival", // Can be anything (usually your rival's name)
        link: 6, // manager array number within this array, or null to link back to all managers page
        image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Your fantasy team's philosophy",
      "tradingScale": 10, // 1 - 10
      "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "roster": 6,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "Bob",
      "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "Brooklyn", // (optional)
      "bio": "Lorem ipsum...",
      "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2020, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Rival", // Can be anything (usually your rival's name)
        link: 6, // manager array number within this array, or null to link back to all managers page
        image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Your fantasy team's philosophy",
      "tradingScale": 10, // 1 - 10
      "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "roster": 7,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "Buck",
      "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "Brooklyn", // (optional)
      "bio": "Lorem ipsum...",
      "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2020, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Rival", // Can be anything (usually your rival's name)
        link: 6, // manager array number within this array, or null to link back to all managers page
        image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Your fantasy team's philosophy",
      "tradingScale": 10, // 1 - 10
      "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "roster": 8,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "Marco",
      "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "Brooklyn", // (optional)
      "bio": "Lorem ipsum...",
      "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2020, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Rival", // Can be anything (usually your rival's name)
        link: 6, // manager array number within this array, or null to link back to all managers page
        image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Your fantasy team's philosophy",
      "tradingScale": 10, // 1 - 10
      "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "roster": 9,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "Quin",
      "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "Brooklyn", // (optional)
      "bio": "Lorem ipsum...",
      "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2020, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Rival", // Can be anything (usually your rival's name)
        link: 6, // manager array number within this array, or null to link back to all managers page
        image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Your fantasy team's philosophy",
      "tradingScale": 10, // 1 - 10
      "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "roster": 10,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "Patrick",
      "tookOver": 2024, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "Brooklyn", // (optional)
      "bio": "Lorem ipsum...",
      "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2024, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Rival", // Can be anything (usually your rival's name)
        link: 6, // manager array number within this array, or null to link back to all managers page
        image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Your fantasy team's philosophy",
      "tradingScale": 10, // 1 - 10
      "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
  ]
  
  
  /*   !!  !!  IMPORTANT  !!  !! */
  /*
  Below is the most up to-date version of a manager. Please leave this commented out
  and don't delete it. This will be updated if any fields are added, removed or changed
  and will allow updates without causing merge conflicts
  */
  
    // {
    //   "roster": 3,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "name": "Your Name",
    //   "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2020, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy", // (optional)
    //   "tradingScale": 10, // 1 - 10 (optional)
    //   "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
