import React, { useState } from 'react';
import '../Styles/TrialTactics.css';
import Detective from '../Components/Games/Detective';
import Game2 from '../Components/Game2/Game';
// import Game3 from '../Components/Games/Game3';

const TrialTactics = () => {
  // useState to keep track of the selected game
  const [selectedGame, setSelectedGame] = useState('game1');

  // Render the appropriate game component based on the selectedGame state
  const renderGameComponent = () => {
    switch (selectedGame) {
      case 'game1':
        return <Detective />;
      case 'game2':
        return <Game2 />;
      case 'game3':
        return <Game3 />;
      default:
        return <Detective />; // Default to game 1
    }
  };

  return (
    <>
      <div className="trial-tactics" style={{ marginTop: '6rem', marginBottom: '2rem' }}>
        <nav>
          <ul>
            <li>
              <button onClick={() => setSelectedGame('game1')} style={{padding:'4px 4px 4px 4px',backgroundColor:'#ee9b00',fontWeight:'100'}}>Detective</button>
            </li>
            <li>
              <button onClick={() => setSelectedGame('game2')} style={{padding:'4px 4px 4px 4px',backgroundColor:'#ee9b00',fontWeight:'100'}}>Scenario</button>
            </li>
            <li>
              <button onClick={() => setSelectedGame('game3')} style={{padding:'4px 4px 4px 4px',backgroundColor:'#ee9b00',fontWeight:'100'}}>Timeline</button>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        {renderGameComponent()}
      </div>
    </>
  );
}

export default TrialTactics;
