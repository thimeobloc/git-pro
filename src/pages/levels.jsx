import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Level.css';

function Levels() {
  return (
    <main className="level-page">
      <h2>Choisis ton niveau</h2>

      <div className="level-list">
        <Link to="/level1" className="level-card">
          <img className="level-image" src={require('../assets/level/level1.png')} alt="Niveau 1" />
          <span className="level-title">Niveau 1</span>
        </Link>

        <Link to="/level2" className="level-card">
          <img className="level-image" src={require('../assets/level/level2.png')} alt="Niveau 2" />
          <span className="level-title">Niveau 2</span>
        </Link>

        <Link to="/level3" className="level-card">
          <img className="level-image" src={require('../assets/level/level3.png')} alt="Niveau 3" />
          <span className="level-title">Niveau 3</span>
        </Link>

        <Link to="/level4" className="level-card">
          <img className="level-image" src={require('../assets/level/level4.png')} alt="Niveau 4" />
          <span className="level-title">Niveau 4</span>
        </Link>
      </div>
    </main>
  );
}

export default Levels;
