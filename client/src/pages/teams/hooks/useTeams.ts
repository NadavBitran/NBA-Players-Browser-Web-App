import {useState} from 'react';
import { ENDPOINT_FETCH_TEAMS } from '../../../constants/serverEndpoints';
import UnexpectedErrorException from '../../../exceptions/UnexpectedErrorException';

import { TeamList } from '../teams';


import fetcher from '../../../utils/fetcher';


const useTeams = () => {
    const [teams, setTeams] = useState<TeamList>(null);
    const [displayingTeams, setDisplayingTeams] = useState<TeamList>(null); 
    const [isLoading, setIsLoading] = useState<fetchState.FetchLoading>(false);
    const [error, setError] = useState<fetchState.FetchError>(null);

    const fetchTeams = async () => {
        
        if (teams !== null) return;

        setError(null);
        setIsLoading(true);

        try
        {
            const data = await fetcher(ENDPOINT_FETCH_TEAMS, 'GET');

            setTeams(data as TeamList);
            setDisplayingTeams(data as TeamList);
        }
        catch (error)
        {
            setError(new UnexpectedErrorException());
        }

        setIsLoading(false);
    };

    const filterTeams = (teamName: string) => {
        const filteredTeams: TeamList = [];

        teams!==null && teams.forEach(team => 
        {
            if (team.name.toLowerCase().includes(teamName))
                filteredTeams.push(team);
        });

        setDisplayingTeams(filteredTeams);
    }

    const resetTeams = () => {
        setDisplayingTeams(teams);
     }

     const getTeamById = (teamId: number) => {
        
        if (teams === null) return undefined;

        return teams.find(team => team.id === teamId);
     }


    return {teams: displayingTeams, isLoading, error, fetchTeams, filterTeams, resetTeams, getTeamById} as const;
};


export default useTeams;