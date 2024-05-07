import React from 'react';
import { useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { TeamContext, TeamContextType } from '../teams/contexts/teamContext';
import useTeam from './hooks/useTeam';
import { ReactComponent as LoadingSpinner } from '../../assets/loadingSpinner.svg';
import TeamBar from './components/teamBar/teamBar';
import TeamStatisticsBoard from './components/teamStatisticsBoard/teamStatisticsBoard';
import TeamRoster from './components/teamRoster/teamRoster';
import Header from '../../components/header/header';
import SearchBar from '../../components/searchBar/searchBar';
import { useNavigate } from 'react-router-dom';

import './team.scss';


export type TeamViewerMode = 'teamDetails' | 'playerList';

const TeamProfile = () => {
    const { teamid } = useParams();
    const [mode, setMode] = useState<TeamViewerMode>('teamDetails');
    const [team, setTeam] = useState<modules.Team | undefined>(undefined);
    const { getTeamById, teams } = useContext(TeamContext) as TeamContextType;

    const navigate = useNavigate();

    useEffect(() => {
        if (teams === null) navigate('/'); // Forcing the user to start browsing from the home page due to the assignment requirements
        const team = getTeamById(Number(teamid));
        setTeam(team);
    }, [teamid]);
   

    const {players, isLoading, error, teamStatistics, filterPlayers, resetPlayers} = useTeam(Number(teamid));

    
    const handleModeChange = (mode: TeamViewerMode) => {
        if (mode == 'teamDetails') resetPlayers();    
        setMode(mode)
    };

    const handlePlayerSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const playerName = e.target.value.toLowerCase();
        filterPlayers(playerName);
    }

    const handleClearButton  = (e: React.MouseEvent<HTMLButtonElement>) => {
        resetPlayers();
     }


    return (
        <>
           <Header title='NBA Browser: Team Viewer'/>

            <div className="team wrapper">
                {isLoading && <LoadingSpinner className="loadingTeams" />}
                {error && <p className="errorMessage">{error.message}</p>}
                {!isLoading && !error && <TeamBar teamName={team?.name} logo={team?.logo} onModeChange={handleModeChange} />}
                {mode === 'teamDetails' && <TeamStatisticsBoard statistics={teamStatistics} />}
                {mode === 'playerList' && 
                <>
                    <SearchBar inputPlaceHolder='Search Players' entitiesFound={players?.length} onChange={handlePlayerSearch} onClear={handleClearButton} />
                    <TeamRoster players={players} />
                </>}
            </div>
        </>
    );
};

export default TeamProfile;