const axios = require('axios');
const cheerio = require('cheerio');
const urls = require('../../../config/urls');
const testUrl = 'https://unfurlr.com/';

async function players() {
    try {
        const playerz = await axios.get(urls.allPlayers)
        const data = playerz.data;
        const $ = cheerio.load(data);
        const stats = $('body .content-wrap .stats-page .content-inner .container-fluid #stats .tab-content #players .fullstats tbody');
        const trs = stats.children();
        let holder = {};

        for (var i=0; i < trs.length; ++i) {
            const stats = ['.rank', '.gp', '.gs', '.g.current', '.a', '.s', '.sog', '.fc', '.off', '.ck', '.pka', '.pkg', '.yc', '.rc', '.mins'];
            let playerImage = $(trs[i]).find('td.player-img img.player-image')[0].attribs['src'];
            let playerName = $(trs[i]).find('td.player-name')[0];
            playerName = $(playerName).text().trim().split("\n");
            let firstName = playerName[0].trim() || "";
            let lastName;
            if (playerName[1] !== undefined && playerName[1] !== null) {
                lastName = playerName[1].trim() || "";
            };
            holder[firstName+lastName] = {}
            holder[firstName+lastName]['playerImage'] = playerImage;
            stats.forEach((val, index) => {
                let n = $(trs[i]).find('td' + val)[0];
                let trimmed = $(n).text().trim() || "";
                let removeDot = val.substr(1);
                holder[firstName+lastName][removeDot] = trimmed;
            });
        }
        return holder;
    } catch (e) {
        console.log(e);
        return e;
    }
    // GP: Games Played, GS: Games Started, MINS: Minutes Played, G: Goals, A: Assists, S: Shots, SOG: Shots on Goal, FC: Fouls Commited, OFF: Offsides, CK: Corner Kicks, PKA: Penalty Kick Attempts, PKG: Penalty Kick Goals, YC: Yellow Cards, RC: Red Cards
};

async function statsTeams() {
    try {
        const teamz = await axios.get(urls.allTeams)
        const data = teamz.data;
        const $ = cheerio.load(data);
        const stats = $('body .content-wrap .stats-page .content-inner .container-fluid #stats .tab-content #teams .fullstats tbody');
        const trs = stats.children();
        let holder = {};

        for (var i=0; i < trs.length; ++i) {
            const stats = ['.rank', '.gp', '.g.current', '.a', '.s', '.sog', '.fc', '.off', '.ck', '.pkg', '.yc', '.rc'];
            let teamImage = $(trs[i]).find('td.team-img img.team-logo')[0].attribs['src'];
            let teamName = $(trs[i]).find('td.team-name')[0];
            teamName = $(teamName).text().trim().split("\n");
            holder[teamName] = {}
            holder[teamName]['teamImage'] = teamImage;
            stats.forEach((val, index) => {
                let n = $(trs[i]).find('td' + val)[0];
                let trimmed = $(n).text().trim() || "";
                let removeDot = val.substr(1);
                holder[teamName][removeDot] = trimmed;
            });
        }
        return holder;
    } catch (e) {
        console.log(e);
        return e;
    }
    // GP: Games Played, G: Goals, A: Assists, S: Shots, SOG: Shots on Goal, FC: Fouls Commited, OFF: Offsides, CK: Corner Kicks, PKG: Penalty Kick Goals, YC: Yellow Cards, RC: Red Cards
};


async function statsGoalKeepers() {
    try {
        const keeperz = await axios.get(urls.allGoalKeepers)
        const data = keeperz.data;
        const $ = cheerio.load(data);
        const stats = $('body .content-wrap .stats-page .content-inner .container-fluid #stats .tab-content #goalkeepers .fullstats tbody');
        const trs = stats.children();
        let holder = {};

        for (var i=0; i < trs.length; ++i) {
            const stats = ['.rank', '.gp', '.gs', '.ga', '.gaa', '.sog', '.sv.current', '.cs', '.yc', '.rc'];
            let playerImage = $(trs[i]).find('td.player-img img.player-image')[0].attribs['src'];
            let playerName = $(trs[i]).find('td.player-name')[0];
            playerName = $(playerName).text().trim().split("\n");
            let firstName = playerName[0].trim() || "";
            let lastName;
            if (playerName[1] !== undefined && playerName[1] !== null) {
                lastName = playerName[1].trim() || "";
            };
            holder[firstName+lastName] = {}
            holder[firstName+lastName]['playerImage'] = playerImage;
            stats.forEach((val, index) => {
                let n = $(trs[i]).find('td' + val)[0];
                let trimmed = $(n).text().trim() || "";
                let removeDot = val.substr(1);
                holder[firstName+lastName][removeDot] = trimmed;
            });
        }
        return holder;
    } catch (e) {
        console.log(e);
        return e;
    }
    // GP: Games Played, GS: Games Started, MINS: Minutes Played, GA: Goals Against, GAA: Goals Against Average, SOG: Shots on Goal, SV: Saves, CS: Clean Sheets, YC: Yellow Cards, RC: Red Cards
};

async function statsLeagueLeaders() {
    try {
        const leaderz = await axios.get(urls.leagueLeaders)
        const data = leaderz.data;
        const $ = cheerio.load(data);
        const stats = $('body .content-wrap .stats-page .content-inner .container-fluid #stats .tab-content #league-leaders .fullstats tbody');
        const trs = stats.children();
        let holder = {};

        for (var i=0; i < trs.length; ++i) {
            const stats = ['.rank', '.gp', '.gs', '.ga', '.gaa', '.sog', '.sv.current', '.cs', '.yc', '.rc'];
            let playerImage = $(trs[i]).find('td.player-img img.player-image')[0].attribs['src'];
            let playerName = $(trs[i]).find('td.player-name')[0];
            playerName = $(playerName).text().trim().split("\n");
            let firstName = playerName[0].trim() || "";
            let lastName;
            if (playerName[1] !== undefined && playerName[1] !== null) {
                lastName = playerName[1].trim() || "";
            };
            holder[firstName+lastName] = {}
            holder[firstName+lastName]['playerImage'] = playerImage;
            stats.forEach((val, index) => {
                let n = $(trs[i]).find('td' + val)[0];
                let trimmed = $(n).text().trim() || "";
                let removeDot = val.substr(1);
                holder[firstName+lastName][removeDot] = trimmed;
            });
        }
        return holder;
    } catch (e) {
        console.log(e);
        return e;
    }
    // GP: Games Played, GS: Games Started, MINS: Minutes Played, GA: Goals Against, GAA: Goals Against Average, SOG: Shots on Goal, SV: Saves, CS: Clean Sheets, YC: Yellow Cards, RC: Red Cards
};


exports.players = async  (req, res) => {
    const d = await statsPlayers();
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(d, null, 3));
};

exports.teams = async (req, res) => {
    const d = await statsTeams();
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(d, null, 3));
}

exports.goalKeepers = async (req, res) => {
    const d = await statsGoalKeepers();
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(d, null, 3));
}

exports.leagueLeaders = async (req, res) => {
    const d = await statsLeagueLeaders();
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(d, null, 3));
}