import React from 'react';
import PlayerCard from '../playerCard/playerCard';
import { PlayersList } from '../../../../typings/modulesSubTypes/playersModuleSubTypes';

import './teamRoster.scss';


interface TeamRosterProps {
    players: PlayersList;
}

const TeamRoster: React.FC<TeamRosterProps> = ({ players }) => {
    return (
        <div className='team__players--container'>
            {players ? players.length > 0 ? (
            <div className="team__players">
                {players.map(player => <PlayerCard key={player.id} player={player}></PlayerCard>)}    
            </div>) : <p className="noItemsFound">No players found</p> : <></>}
        </div>
    );
};

export default TeamRoster;