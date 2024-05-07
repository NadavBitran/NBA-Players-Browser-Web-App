import { useState, useEffect, useRef } from "react";
import { ENDPOINT_FETCH_TEAMS } from "../../../constants/serverEndpoints";
import UnexpectedErrorException from '../../../exceptions/UnexpectedErrorException';

import { PlayersList } from "../../../typings/modulesSubTypes/playersModuleSubTypes";
import fetcher from "../../../utils/fetcher";

const useTeam = (teamId: teamSubTypes.TeamId) => {
    const [players, setPlayers] = useState<PlayersList>(null);
    const [displayingPlayers, setDisplayingPlayers] = useState<PlayersList>(null);
    const [teamStatistics, setTeamStatistics] = useState<modules.TeamStatistics | null>(null);
    const [isLoading, setIsLoading] = useState<fetchState.FetchLoading>(true);
    const [error, setError] = useState<fetchState.FetchError>(null);
    const isMounted = useRef(false);

    useEffect(() => 
    {
        if (!isMounted.current)
        {
            isMounted.current = true;
            fetchPlayers();
        }

    }, []);

    const fetchPlayers = async () => {

        setIsLoading(true);

        try
        {
            const data = await fetcher(ENDPOINT_FETCH_TEAMS + `/${teamId}`, 'GET');

            const playersData = data.players as PlayersList;
            const teamStatisticsData = data.teamStatistics[0] as modules.TeamStatistics;

            setPlayers(playersData);
            setDisplayingPlayers(playersData);
            setTeamStatistics(teamStatisticsData);
        }
        catch (error)
        {
            setError(new UnexpectedErrorException());
        }

        setIsLoading(false);

    };

    const filterPlayers = (searchedPlayerFullName: string) => {
        const filteredPlayers: PlayersList = [];

        players !== null && players.forEach(player => {
            const currentPlayerFullName = `${player.firstname} ${player.lastname}`;
            if (currentPlayerFullName.toLowerCase().includes(searchedPlayerFullName))
                filteredPlayers.push(player);
        });

        setDisplayingPlayers(filteredPlayers);
    }

    const resetPlayers = () => {
        setDisplayingPlayers(players);
    }

    return {players: displayingPlayers, isLoading, error, teamStatistics, filterPlayers, resetPlayers} as const;
};

export default useTeam;