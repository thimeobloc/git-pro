import React, { useEffect, useState } from 'react';
import '../styles/Home.css';

function Home() {
  const [branches, setBranches] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const imgNumber = Math.floor(Math.random() * 10) + 1;
      const side = Math.random() < 0.5 ? 'left' : 'right';
      const left = side === 'left'
        ? `${Math.random() * 10}%`
        : `${90 + Math.random() * 10}%`;
  
      const img = {
        id: Date.now() + Math.random(),
        src: require(`../assets/home/branch${imgNumber}.png`),
        style: {
          top: `${Math.random() * 90}%`,
          left
        }
      };
  
      setBranches(prev => [...prev, img]);
  
      setTimeout(() => {
        setBranches(prev => prev.filter(i => i.id !== img.id));
      }, 200);
    }, 200); // toutes les 400 ms
  
    return () => clearInterval(interval);
  }, []);
  

  return (
    <main className="home">
      {branches.map(branch => (
        <img
          key={branch.id}
          src={branch.src}
          className="branch-image"
          style={branch.style}
          alt="branch"
        />
      ))}

      <h2>Bienvenue sur Git Pro</h2>
      <p>Entraîne-toi aux commandes Git avec des quiz interactifs.</p>

      <section id="levels" className="levels">
        <h3>Choisis ton niveau</h3>
        <ul>
          <li>Niveau 1 : 2 choix de réponses (QCM simple)</li>
          <li>Niveau 2 : 4 choix de réponses (QCM moyen)</li>
          <li>Niveau 3 : 8 choix de réponses (QCM avancé)</li>
          <li>Niveau Hard : Écris ta réponse toi-même</li>
        </ul>
      </section>

      <section id="about" className="about">
        <h3>À propos de Git Pro</h3>
        <p>Réponds à 10 questions le plus rapidement possible. Pas besoin de compte, juste de la pratique pour t'améliorer !</p>
      </section>
    </main>
  );
}

export default Home;
