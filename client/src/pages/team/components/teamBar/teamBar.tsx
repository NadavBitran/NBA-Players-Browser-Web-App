import React from 'react';
import BasketballLogo from '../../../../assets/basketballLogo.png';

import { TeamViewerMode } from '../../team';

import './teamBar.scss';

interface TeamBarProps {
    teamName: string | undefined;
    logo: teamSubTypes.TeamLogo | undefined;
    onModeChange: (mode: TeamViewerMode) => void;
}

const TeamBar: React.FC<TeamBarProps> = ({ teamName, logo, onModeChange }) => {
    return (
        <div className="teamInfo">
            <div className='teamInfo__container'>
                <img className="teamInfo__logo" src={logo ?? BasketballLogo}/>
                <h2 className="teamInfo__name">{teamName ?? 'Unknown'}</h2>
            </div>
            <div className='teamInfo__container'>
                <button className='teamInfo__teamReportBtn' onClick={() => onModeChange('teamDetails')}>Team Report</button>
                <button className='teamInfo__teamRosterBtn' onClick={() => onModeChange('playerList')}>Roster</button>
            </div>
        </div>
    );
};

export default TeamBar;