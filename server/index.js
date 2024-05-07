const express = require('express');
const cors = require('cors');
const parser = require('body-parser');
const dotenv = require('dotenv');

const endpoints = require('./constants/serverEndpoints');
const fetcher = require('./utils/fetcher');

const app = express();
app.use(cors());
app.use(parser.json());

dotenv.config();

app.get(endpoints.ENDPOINT_ALL_TEAMS , async (req, res) => {
    
    try
    {
        const teams = await fetcher.fetchTeams();
        res.json(teams);
    }
    catch (error)
    {
        res.status(error.correspondingStatusCode ?? 500).send(error.message);
    
    }

})

app.get(endpoints.ENDPOINT_TEAM, async (req, res) => {
    
    try
    {
        const teamId = req.params.teamid;
        const players = await fetcher.fetchPlayers(teamId);
        const teamStatistics = await fetcher.fetchTeamStatistics(teamId);
        res.json({'players' : players, 'teamStatistics' : teamStatistics});
    
    }
    catch (error)
    {
        res.status(error.correspondingStatusCode ?? 500).send(error.message);
    }
 })


app.listen(process.env.PORT, () => console.log(`Server is running on port ${process.env.PORT}`))