import { useContext } from 'react';
import { useNavigate } from 'react-router';
import { TeamContext } from '../teams/contexts/teamContext';
import { TeamContextType } from '../teams/contexts/teamContext';
import './home.scss';


const Home: React.FC = () => {
    
    const {fetchTeams} = useContext(TeamContext) as TeamContextType;
    const navigate = useNavigate();

    const handleStart = (e: React.MouseEvent<HTMLButtonElement>) => {
        fetchTeams();
        navigate('/teams');
     }

    return (
        <div className="home">
            <h1 className="home__title">NBA Browser</h1>
            <p className="home__description">Browse A Collection Of NBA Players And Teams</p>
            <button className="home__startBtn" onClick={handleStart}>Start</button>
        </div>
    );
}

export default Home;