const apiLinks = require('../constants/apiEndpoints');
const dateUtils = require('../utils/dateUtils');
const FetchException = require('../exceptions/fetchException');

async function fetchTeams() 
{
    const response = await fetch(apiLinks.TEAMS_API_LINK, 
    {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': process.env.RAPID_API_HOST,
            'X-RapidAPI-Key': process.env.RAPID_API_KEY
        }
    });

    if (!response.ok) 
    {
        throw new FetchException();
    }
    else
    {
        const teams = await response.json();

        const teamsResponse = teams.response;

        const nbaFranchiseTeams = [];

        teamsResponse.map(team => {
            if (team.nbaFranchise && !team.allStar) nbaFranchiseTeams.push(team);
        })

        return nbaFranchiseTeams;
    }

}

async function fetchPlayers(teamId) 
{
    const response = await fetch(apiLinks.PLAYERS_API_LINK + `?season=${dateUtils.getCurrentBasketballSeason()}&team=${teamId}`, 
    {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': process.env.RAPID_API_HOST,
            'X-RapidAPI-Key': process.env.RAPID_API_KEY
        }
    });

    if (!response.ok) 
    {
        throw new FetchException();
    }
    else
    {
        const players = await response.json();

        return players.response;
    
    }
}

async function fetchTeamStatistics(teamId) 
{
    const response = await fetch(apiLinks.TEAMS_STATISTICS_API_LINK + `?season=${dateUtils.getCurrentBasketballSeason()}&id=${teamId}`, 
    {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': process.env.RAPID_API_HOST,
            'X-RapidAPI-Key': process.env.RAPID_API_KEY
        }
    });

    if (!response.ok)
    {
        throw new FetchException();
    }
    else
    {
        const teamStatistics = await response.json();

        return teamStatistics.response;
    }
}


module.exports = {
    fetchTeams,
    fetchPlayers,
    fetchTeamStatistics
}