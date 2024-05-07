import React from 'react';
import { useNavigate } from 'react-router';
import BasketballLogo from '../../assets/basketballLogo.png';

import './header.scss';

interface HeaderProps {
    title: string;
 }

const Header: React.FC<HeaderProps> = ({title}) => {

    const navigate = useNavigate();

    const handleHomePageRedirect = (e: React.MouseEvent<HTMLImageElement>) => {
        navigate('/');
     }

    return (
        <header className='Header'>
            <img src={BasketballLogo} onClick={handleHomePageRedirect}/>
            <h2 onClick={handleHomePageRedirect}>{title}</h2>
        </header>
    );
};

export default Header;