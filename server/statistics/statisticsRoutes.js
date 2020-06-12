module.exports = (app) => {
    const players = require('./stats/players.js');

    app.get('/', (req, res) => {
        const endpoints = {
            allPlayers: '/'
        }
        res.send(endpoints)
    })
    // Retrieve all players
    app.get('/players', players.players);
    app.get('/teams', players.teams);
    app.get('/goalkeepers', players.goalKeepers);
    app.get('/leagueleaders', players.leagueLeaders);
}