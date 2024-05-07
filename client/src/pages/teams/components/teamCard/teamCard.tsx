import BasketballLogo from '../../../../assets/basketballLogo.png'; 
import { useNavigate } from 'react-router';

import './teamCard.scss';

interface TeamCardProps {
    team: modules.Team
}

const TeamCard: React.FC<TeamCardProps> = ({ team }) => {
    const navigate = useNavigate();

    const handleTeamClicked = (e: React.MouseEvent<HTMLButtonElement>) => { 
        navigate('/team/' + team.id);
    }

    return (
        <div className="team_card">
            <img className="team_card--logo" src={team.logo ?? BasketballLogo} alt={`${team.name} logo image`}/>
            <h2 className="team_card--name">{`${team.name} (${team.code})`}</h2>
            <p className="team_card--city">{team.city ? `From ${team.city}` : 'Unknown'}</p>
            <button className="team_card--viewPlayers" onClick={handleTeamClicked}>View More</button>
        </div>
    )
};

export default TeamCard;