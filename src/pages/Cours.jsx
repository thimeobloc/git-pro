import React from 'react';
import '../styles/Cours.css';

function Cours() {
  return (
    <div className="cours-page">
      <nav className="cours-toc">
        <h2>Sommaire</h2>
        <ul>
          <li><a href="#intro">Introduction</a></li>
          <li><a href="#init">Initialiser un dépôt Git</a></li>
          <li><a href="#clone">Cloner un dépôt</a></li>
          <li><a href="#status">Vérifier l'état des fichiers</a></li>
          <li><a href="#add">Ajouter à l'index</a></li>
          <li><a href="#commit">Commit</a></li>
          <li><a href="#log">Historique des commits</a></li>
          <li><a href="#branches">Branches</a></li>
          <li><a href="#merge">Fusionner une branche</a></li>
          <li><a href="#push">Envoyer vers distant</a></li>
          <li><a href="#pull">Récupérer du distant</a></li>
          <li><a href="#undo">Annuler des modifications</a></li>
          <li><a href="#other">Autres commandes utiles</a></li>
          <li><a href="#resources">Ressources utiles</a></li> {/* Nouvelle entrée */}
          <li><a href="#conclusion">Conclusion</a></li>
        </ul>
      </nav>

      <article className="cours-content">
        <h1 id="intro">Introduction à Git</h1>
        <p>
          Git est un système de gestion de versions distribué très utilisé pour suivre les modifications dans des projets de développement logiciel. Il permet de collaborer efficacement et de gérer différentes versions d’un projet.
        </p>

        <h2 id="init">1. Initialiser un dépôt Git</h2>
        <p>Pour commencer à utiliser Git dans un projet, vous devez initialiser un dépôt Git local.</p>
        <pre><code>git init</code></pre>

        <h2 id="clone">2. Cloner un dépôt existant</h2>
        <p>Pour récupérer un projet existant depuis un serveur distant (ex: GitHub), utilisez la commande clone.</p>
        <pre><code>git clone &lt;url-du-depot&gt;</code></pre>

        <h2 id="status">3. Vérifier l'état des fichiers</h2>
        <p>Pour voir les fichiers modifiés, ajoutés ou supprimés, utilisez :</p>
        <pre><code>git status</code></pre>

        <h2 id="add">4. Ajouter des fichiers à l'index (staging area)</h2>
        <p>Pour préparer les fichiers à être commités, vous devez les ajouter à l’index.</p>
        <pre><code>git add &lt;fichier&gt;</code></pre>
        <p>Pour ajouter tous les fichiers modifiés :</p>
        <pre><code>git add .</code></pre>

        <h2 id="commit">5. Enregistrer les modifications (commit)</h2>
        <p>Pour enregistrer un snapshot de votre travail :</p>
        <pre><code>git commit -m "Message décrivant les changements"</code></pre>

        <h2 id="log">6. Voir l'historique des commits</h2>
        <p>Pour consulter la liste des commits effectués :</p>
        <pre><code>git log</code></pre>

        <h2 id="branches">7. Travailler avec les branches</h2>
        <p>Les branches permettent de développer des fonctionnalités ou corrections séparément.</p>
        <p>Créer une branche :</p>
        <pre><code>git branch nom-de-branche</code></pre>
        <p>Changer de branche :</p>
        <pre><code>git checkout nom-de-branche</code></pre>
        <p>Créer et basculer directement :</p>
        <pre><code>git checkout -b nom-de-branche</code></pre>

        <h2 id="merge">8. Fusionner une branche</h2>
        <p>Pour intégrer les changements d’une branche dans la branche courante :</p>
        <pre><code>git merge nom-de-branche</code></pre>

        <h2 id="push">9. Mettre à jour le dépôt distant</h2>
        <p>Envoyer vos commits locaux vers le dépôt distant :</p>
        <pre><code>git push origin nom-de-branche</code></pre>

        <h2 id="pull">10. Récupérer les modifications du dépôt distant</h2>
        <p>Pour récupérer les changements faits par d’autres :</p>
        <pre><code>git pull</code></pre>

        <h2 id="undo">11. Annuler des modifications</h2>
        <p>Annuler les modifications non enregistrées dans un fichier :</p>
        <pre><code>git checkout -- &lt;fichier&gt;</code></pre>
        <p>Annuler un commit local (non poussé) :</p>
        <pre><code>git reset --soft HEAD~1</code></pre>

        <h2 id="other">12. Autres commandes utiles</h2>
        <ul>
          <li><code>git diff</code> — Affiche les différences entre fichiers modifiés et index</li>
          <li><code>git stash</code> — Met de côté temporairement vos modifications en cours</li>
          <li><code>git remote -v</code> — Liste les dépôts distants configurés</li>
          <li><code>git fetch</code> — Récupère les modifications du dépôt distant sans fusion automatique</li>
          <li><code>git tag</code> — Marque un commit important (version, release)</li>
        </ul>

        <h2 id="resources">13. Ressources utiles pour les débutants</h2>
        <p>Voici quelques liens pour vous aider à approfondir Git et découvrir GitHub ainsi que des tutoriels et documentations utiles :</p>
        <ul>
          <li><a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer">Site officiel de Git</a> – documentation complète et guides.</li>
          <li><a href="https://docs.github.com/en" target="_blank" rel="noopener noreferrer">Documentation GitHub</a> – apprendre à utiliser GitHub, gérer des dépôts et collaborer.</li>
          <li><a href="https://try.github.io/" target="_blank" rel="noopener noreferrer">Learn Git Branching</a> – simulateur interactif pour comprendre les branches Git.</li>
          <li><a href="https://www.codecademy.com/learn/learn-git" target="_blank" rel="noopener noreferrer">Codecademy - Git Course</a> – cours interactif en ligne.</li>
          <li><a href="https://www.freecodecamp.org/news/tag/git/" target="_blank" rel="noopener noreferrer">Articles Git sur freeCodeCamp</a> – tutoriels accessibles et bien expliqués.</li>
          <li><a href="https://www.youtube.com/watch?v=USjZcfj8yxE" target="_blank" rel="noopener noreferrer">Tutoriel vidéo Git & GitHub (YouTube)</a> – parfait pour les débutants visuels.</li>
          <li><a href="https://git-scm.com/book/en/v2" target="_blank" rel="noopener noreferrer">Pro Git Book</a> – livre complet et gratuit en ligne.</li>
        </ul>

        <h2 id="conclusion">Conclusion</h2>
        <p>
          Git est un outil puissant qui nécessite un peu de pratique pour maîtriser toutes ses fonctionnalités. Cette page couvre les bases essentielles pour bien débuter.
        </p>
      </article>
    </div>
  );
}

export default Cours;
