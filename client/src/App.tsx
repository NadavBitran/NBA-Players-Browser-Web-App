import React from 'react';
import { TeamProvider } from './pages/teams/contexts/teamContext';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/home/home';
import Teams from './pages/teams/teams';
import Team from './pages/team/team';

import './app.scss';

const App: React.FC = () => {

  return (
    <div className='app'>
      <TeamProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/team/:teamid" element={<Team />} />
          </Routes>
        </Router>
      </TeamProvider>
    </div>
  );
}

export default App;