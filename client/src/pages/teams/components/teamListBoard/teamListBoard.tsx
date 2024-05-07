import React from 'react';
import { TeamList } from '../../teams';
import TeamCard from '../teamCard/teamCard';

import './teamListBoard.scss';

interface TeamListProps {
    teams: TeamList;
}

const TeamListBoard: React.FC<TeamListProps> = ({teams}) => {
    return (
        <div className='teamList'>
            {teams ? teams.length > 0 ? 
                teams.map(team => <TeamCard key={team.id} team={team}/>) : 
            <p className="noItemsFound">No teams found</p> : <></>}
        </div>
    );
};

export default TeamListBoard;