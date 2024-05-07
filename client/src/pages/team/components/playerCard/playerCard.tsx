import React from 'react';
import { useState } from 'react';
import './playerCard.scss';

interface PlayerCardProps {
    player: modules.Player;
}

const PlayerCard: React.FC<PlayerCardProps> = ({player}) => {

    const [isExpanded, setIsExpanded] = useState(false);

    const handleExpandButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        setIsExpanded(!isExpanded);
    }

    return (
        <>
            <div className='playerBar'>
                <h2 className='playerName'>{player.firstname + " " + player.lastname}</h2>
                <div className='playerPositionAndMoreBtn'>
                    <p className='playerPosition'>{player.leagues.standard.pos}</p>
                    <button className='playerMoreBtn' onClick={handleExpandButtonClick}>More</button>
                </div>
            </div>

            <div className={`playerAdvancedData ${isExpanded ? 'expanded' : ''}`}>
                <div className='playerHeight playerAdvancedDataEntity'>
                    <label>Height</label>
                    <p>{`${player.height.meters ?? 'Unknown'} cm`}</p>
                </div>

                <div className='playerWeight playerAdvancedDataEntity'>
                    <label>Weight</label>
                    <p>{`${player.weight.kilograms ?? 'Unknown'} kg`}</p>
                </div>

                <div className='playerBirth playerAdvancedDataEntity'>
                    <label>Born At</label>
                    <p>{player.birth.date ?? 'Unknown'}</p>
                </div>

                <div className='playerNationality playerAdvancedDataEntity'>
                    <label>Nationality</label>
                    <p>{player.birth.country ?? 'Unknown'}</p>
                </div>

                <div className='playerInLeagueSince playerAdvancedDataEntity'>
                    <label>In League Since</label>
                    <p>{player.nba.start ?? 'Unknown'}</p>
                </div>

                <div className='playerAffiliation playerAdvancedDataEntity'>
                    <label>Affiliation</label>
                    <p>{player.affiliation ?? 'Unknown'}</p>
                </div>
            </div>
        </>
    );
};

export default PlayerCard;