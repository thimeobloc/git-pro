import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  return (
    <main className="home">
      <h2>Bienvenue sur Git Pro</h2>
      <p>Entraîne-toi aux commandes Git avec des quiz interactifs.</p>

      <section id="levels" className="levels">
        <h3>Choisis ton niveau</h3>
        <p>
          Teste tes connaissances grâce à nos quiz classés par difficulté. <br />
          <Link to="/levels" className="levels-link">Accède à la page des niveaux</Link> pour commencer.
        </p>
      </section>

      <section id="cours" className="levels">
        <h3>Un cours complet à ta disposition</h3>
        <p>
          Pour aller plus loin, tu as accès à un cours complet qui couvre la plupart des commandes Git essentielles.
          Idéal pour comprendre les concepts et bien maîtriser Git.
        </p>
        <p>
          <Link to="/cours" className="levels-link">Découvre le cours Git complet</Link>
        </p>
      </section>

      <section id="about" className="about">
        <h3>À propos de Git Pro</h3>
        <p>
          Réponds à 10 questions le plus rapidement possible. Pas besoin de compte, juste de la pratique pour t'améliorer !
        </p>
      </section>
    </main>
  );
}

export default Home;
