import { TeamContext } from './contexts/teamContext';
import { TeamContextType } from './contexts/teamContext';
import { useContext, useEffect } from 'react';
import { ReactComponent as LoadingSpinner } from '../../assets/loadingSpinner.svg';
import { useNavigate } from 'react-router';

import Header from '../../components/header/header';
import TeamListBoard from './components/teamListBoard/teamListBoard';
import SearchBar from '../../components/searchBar/searchBar';

import './teams.scss';

export type TeamList = modules.Team[] | null;

const Teams: React.FC = () => 
{
    const {teams, filterTeams, isLoading, error, resetTeams} = useContext(TeamContext) as TeamContextType;
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLoading && teams === null) navigate('/'); // Forcing the user to start browsing from the home page due to the assignment requirements
        resetTeams();
    }, []);

    const handleUserTeamNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const teamName = e.target.value.toLowerCase();
        filterTeams(teamName);
    };

    const handleClearButton = (e: React.MouseEvent<HTMLButtonElement>) => {
        resetTeams();
     }

    return (
        <>
            <Header title='NBA Browser: Participating Team'/>
            <div 
                className="teams wrapper">
                {isLoading && <LoadingSpinner className="loadingTeams" />}
                {error && <p className="errorMessage">{error.message}</p>}
                {!isLoading && !error && 
                <>
                    <SearchBar onChange={handleUserTeamNameInput} onClear={handleClearButton} entitiesFound={teams?.length} inputPlaceHolder={'Search Teams'}  />
                    <TeamListBoard teams={teams}/>
                </>}
            </div>
        </>
    );
}

export default Teams;