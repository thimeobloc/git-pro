import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Level.css';

function Levels() {
  const levels = [
    {
      id: 1,
      title: "Niveau 1",
      img: require('../assets/level/level1.png'),
      description: "Débutant : Introduction aux bases, commandes Git essentielles."
    },
    {
      id: 2,
      title: "Niveau 2",
      img: require('../assets/level/level2.png'),
      description: "Intermédiaire : Branches, fusion, résolution des conflits."
    },
    {
      id: 3,
      title: "Niveau 3",
      img: require('../assets/level/level3.png'),
      description: "Avancé : Hooks, workflows complexes et optimisation."
    },
    {
      id: 4,
      title: "Niveau 4",
      img: require('../assets/level/level4.png'),
      description: "Expert : Mode saisie libre des commandes, plus de QCM."
    }
  ];

  return (
    <main className="level-page">
      <h2>Choisis ton niveau</h2>

      <div className="level-list">
        {levels.map(level => (
          <Link key={level.id} to={`/level${level.id}`} className="level-card">
            <img className="level-image" src={level.img} alt={level.title} />
            <span className="level-title">{level.title}</span>
            <p className="level-description">{level.description}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}

export default Levels;
