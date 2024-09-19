import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/CrimeScope.css';


const CrimeScope = () => {
  return (
    <>
      <header style={{ marginTop: '8rem', textAlign: 'center',marginBottom:'4rem' }}>
        <div className="trial-tactics">
          <nav>
            <ul>
              <li>
                <Link to="/CrimeScope" className="game-link" style={{color:'white'}}>Crime In India</Link>
              </li>
              <li>
                <Link to="/Stories" className="game-link"style={{color:'white'}}>Stories</Link>
              </li>
              <li>
                <Link to="/City" className="game-link"style={{color:'white'}}>City Levels</Link>
              </li>
              <li>
                <Link to="/Project" className="game-link"style={{color:'white'}}>Project</Link>
              </li>
              <li>
                <Link to="/References" className="game-link"style={{color:'white'}}>References</Link>
              </li>
              <li>
                <Link to="/Data" className="game-link"style={{color:'white'}}>Data</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      
    </>
  );
};

export default CrimeScope;
