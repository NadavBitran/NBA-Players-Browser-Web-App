import { createContext } from 'react';
import useTeams from '../hooks/useTeams';

import { TeamList } from '../teams';

export interface TeamContextType {
    teams: TeamList;
    isLoading: fetchState.FetchLoading;
    error: fetchState.FetchError;
    fetchTeams: () => void;
    filterTeams: (team: string) => void;
    resetTeams: () => void;
    getTeamById: (teamid: number) => modules.Team | undefined;
}

export const TeamContext = createContext<TeamContextType | null>(null);

export const TeamProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    const {teams, isLoading, error, fetchTeams, filterTeams, resetTeams, getTeamById} = useTeams();

    return (
        <TeamContext.Provider value={{teams, isLoading, error, fetchTeams, filterTeams, resetTeams, getTeamById}}>
            {children}
        </TeamContext.Provider>
    );
}
