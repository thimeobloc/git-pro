const questions = [
    {
      id: 1,
      question: "Qu'est-ce que Git ?",
      options: [
        { answer: "Un système de contrôle de version", isCorrect: true },
        { answer: "Un langage de programmation", isCorrect: false },
        { answer: "Un éditeur de texte", isCorrect: false },
        { answer: "Un système d'exploitation", isCorrect: false },
      ],
    },
    {
      id: 2,
      question: "Quelle commande permet de créer une nouvelle branche en Git ?",
      options: [
        { answer: "git branch", isCorrect: true },
        { answer: "git merge", isCorrect: false },
        { answer: "git commit", isCorrect: false },
        { answer: "git checkout", isCorrect: false },
      ],
    },
    {
      id: 3,
      question: "Quelle commande permet d'initialiser un dépôt Git ?",
      options: [
        { answer: "git init", isCorrect: true },
        { answer: "git start", isCorrect: false },
        { answer: "git create", isCorrect: false },
        { answer: "git begin", isCorrect: false },
      ],
    },
    {
      id: 4,
      question: "Comment afficher l'état des fichiers dans un dépôt Git ?",
      options: [
        { answer: "git status", isCorrect: true },
        { answer: "git log", isCorrect: false },
        { answer: "git diff", isCorrect: false },
        { answer: "git show", isCorrect: false },
      ],
    },
    {
      id: 5,
      question: "Quelle commande sert à ajouter des fichiers à l'index (staging area) ?",
      options: [
        { answer: "git add", isCorrect: true },
        { answer: "git commit", isCorrect: false },
        { answer: "git push", isCorrect: false },
        { answer: "git pull", isCorrect: false },
      ],
    },
    {
      id: 6,
      question: "Quelle commande permet de valider les changements dans l'historique ?",
      options: [
        { answer: "git commit", isCorrect: true },
        { answer: "git add", isCorrect: false },
        { answer: "git push", isCorrect: false },
        { answer: "git clone", isCorrect: false },
      ],
    },
    {
      id: 7,
      question: "Comment annuler les changements locaux sur un fichier ?",
      options: [
        { answer: "git checkout -- <fichier>", isCorrect: true },
        { answer: "git reset", isCorrect: false },
        { answer: "git revert", isCorrect: false },
        { answer: "git remove", isCorrect: false },
      ],
    },
    {
      id: 8,
      question: "Quelle commande permet de cloner un dépôt distant ?",
      options: [
        { answer: "git clone", isCorrect: true },
        { answer: "git pull", isCorrect: false },
        { answer: "git fetch", isCorrect: false },
        { answer: "git init", isCorrect: false },
      ],
    },
    {
      id: 9,
      question: "Quelle commande sert à récupérer les modifications depuis le dépôt distant ?",
      options: [
        { answer: "git pull", isCorrect: true },
        { answer: "git push", isCorrect: false },
        { answer: "git fetch", isCorrect: false },
        { answer: "git clone", isCorrect: false },
      ],
    },
    {
      id: 10,
      question: "Comment afficher la liste des commits ?",
      options: [
        { answer: "git log", isCorrect: true },
        { answer: "git status", isCorrect: false },
        { answer: "git diff", isCorrect: false },
        { answer: "git show", isCorrect: false },
      ],
    },
    {
      id: 11,
      question: "Que signifie 'HEAD' dans Git ?",
      options: [
        { answer: "La référence au dernier commit sur la branche courante", isCorrect: true },
        { answer: "Un fichier temporaire", isCorrect: false },
        { answer: "Une commande pour annuler les commits", isCorrect: false },
        { answer: "Une branche distante", isCorrect: false },
      ],
    },
    {
      id: 12,
      question: "Quelle commande permet de changer de branche ?",
      options: [
        { answer: "git checkout", isCorrect: true },
        { answer: "git branch", isCorrect: false },
        { answer: "git merge", isCorrect: false },
        { answer: "git switch", isCorrect: false },
      ],
    },
    {
      id: 13,
      question: "Quelle commande permet de créer un nouveau commit avec un message ?",
      options: [
        { answer: "git commit -m 'message'", isCorrect: true },
        { answer: "git add -m 'message'", isCorrect: false },
        { answer: "git push -m 'message'", isCorrect: false },
        { answer: "git merge -m 'message'", isCorrect: false },
      ],
    },
    {
      id: 14,
      question: "Que fait la commande 'git push' ?",
      options: [
        { answer: "Envoie les commits locaux vers le dépôt distant", isCorrect: true },
        { answer: "Récupère les commits du dépôt distant", isCorrect: false },
        { answer: "Crée une nouvelle branche", isCorrect: false },
        { answer: "Supprime une branche locale", isCorrect: false },
      ],
    },
    {
      id: 15,
      question: "Quelle commande permet de supprimer un fichier suivi par Git ?",
      options: [
        { answer: "git rm <fichier>", isCorrect: true },
        { answer: "git delete <fichier>", isCorrect: false },
        { answer: "git remove <fichier>", isCorrect: false },
        { answer: "git erase <fichier>", isCorrect: false },
      ],
    },
    {
      id: 16,
      question: "Que fait la commande 'git status' ?",
      options: [
        { answer: "Affiche les fichiers modifiés et en attente de commit", isCorrect: true },
        { answer: "Supprime les fichiers non suivis", isCorrect: false },
        { answer: "Affiche la liste des branches", isCorrect: false },
        { answer: "Crée une branche", isCorrect: false },
      ],
    },
    {
      id: 17,
      question: "Comment annuler le dernier commit local sans supprimer les modifications ?",
      options: [
        { answer: "git reset --soft HEAD~1", isCorrect: true },
        { answer: "git reset --hard HEAD~1", isCorrect: false },
        { answer: "git revert HEAD", isCorrect: false },
        { answer: "git checkout HEAD~1", isCorrect: false },
      ],
    },
    {
      id: 18,
      question: "Quelle commande permet de renommer une branche locale ?",
      options: [
        { answer: "git branch -m <nouveau_nom>", isCorrect: true },
        { answer: "git rename <nouveau_nom>", isCorrect: false },
        { answer: "git mv <nouveau_nom>", isCorrect: false },
        { answer: "git switch <nouveau_nom>", isCorrect: false },
      ],
    },
    {
      id: 19,
      question: "Quel fichier permet d'ignorer certains fichiers ou dossiers dans Git ?",
      options: [
        { answer: ".gitignore", isCorrect: true },
        { answer: "ignore.txt", isCorrect: false },
        { answer: "gitignore.txt", isCorrect: false },
        { answer: ".gitexclude", isCorrect: false },
      ],
    },
    {
      id: 20,
      question: "Comment afficher les différences entre fichiers modifiés et dernière version commitée ?",
      options: [
        { answer: "git diff", isCorrect: true },
        { answer: "git status", isCorrect: false },
        { answer: "git log", isCorrect: false },
        { answer: "git show", isCorrect: false },
      ],
    },
    {
      id: 21,
      question: "Quelle commande permet de fusionner une branche dans la branche courante ?",
      options: [
        { answer: "git merge <branche>", isCorrect: true },
        { answer: "git branch <branche>", isCorrect: false },
        { answer: "git checkout <branche>", isCorrect: false },
        { answer: "git rebase <branche>", isCorrect: false },
      ],
    },
    {
      id: 22,
      question: "Quel est l'intérêt principal de Git ?",
      options: [
        { answer: "Gérer les versions du code source efficacement", isCorrect: true },
        { answer: "Compiler du code", isCorrect: false },
        { answer: "Exécuter du code", isCorrect: false },
        { answer: "Déployer des applications", isCorrect: false },
      ],
    },
    {
      id: 23,
      question: "Comment afficher la liste des branches locales ?",
      options: [
        { answer: "git branch", isCorrect: true },
        { answer: "git branches", isCorrect: false },
        { answer: "git show-branches", isCorrect: false },
        { answer: "git list-branches", isCorrect: false },
      ],
    },
    {
      id: 24,
      question: "Quelle commande permet de récupérer les changements sans les fusionner ?",
      options: [
        { answer: "git fetch", isCorrect: true },
        { answer: "git pull", isCorrect: false },
        { answer: "git clone", isCorrect: false },
        { answer: "git merge", isCorrect: false },
      ],
    },
    {
      id: 25,
      question: "Que fait la commande 'git revert' ?",
      options: [
        { answer: "Crée un nouveau commit qui annule un commit précédent", isCorrect: true },
        { answer: "Supprime un commit de l'historique", isCorrect: false },
        { answer: "Réinitialise la branche à un état précédent", isCorrect: false },
        { answer: "Fusionne deux branches", isCorrect: false },
      ],
    },
    {
      id: 26,
      question: "Quelle commande permet de créer un tag ?",
      options: [
        { answer: "git tag <nom>", isCorrect: true },
        { answer: "git label <nom>", isCorrect: false },
        { answer: "git mark <nom>", isCorrect: false },
        { answer: "git bookmark <nom>", isCorrect: false },
      ],
    },
    {
      id: 27,
      question: "Comment annuler l'ajout d'un fichier à l'index ?",
      options: [
        { answer: "git reset <fichier>", isCorrect: true },
        { answer: "git rm <fichier>", isCorrect: false },
        { answer: "git revert <fichier>", isCorrect: false },
        { answer: "git checkout <fichier>", isCorrect: false },
      ],
    },
    {
      id: 28,
      question: "Quelle commande permet de configurer le nom d'utilisateur Git ?",
      options: [
        { answer: "git config --global user.name \"Nom\"", isCorrect: true },
        { answer: "git user.name set \"Nom\"", isCorrect: false },
        { answer: "git set username \"Nom\"", isCorrect: false },
        { answer: "git config username \"Nom\"", isCorrect: false },
      ],
    },
    {
      id: 29,
      question: "Que signifie un fichier 'non suivi' (untracked) ?",
      options: [
        { answer: "Un fichier qui n'est pas encore ajouté à Git", isCorrect: true },
        { answer: "Un fichier supprimé", isCorrect: false },
        { answer: "Un fichier modifié", isCorrect: false },
        { answer: "Un fichier ignoré", isCorrect: false },
      ],
    },
    {
      id: 30,
      question: "Que fait la commande 'git stash' ?",
      options: [
        { answer: "Sauvegarde temporairement les modifications non commitées", isCorrect: true },
        { answer: "Annule les derniers commits", isCorrect: false },
        { answer: "Applique un patch", isCorrect: false },
        { answer: "Crée une nouvelle branche", isCorrect: false },
      ],
    },
    {
      id: 31,
      question: "Quelle commande permet de revenir à un commit précédent ?",
      options: [
        { answer: "git checkout <commit>", isCorrect: true },
        { answer: "git revert <commit>", isCorrect: false },
        { answer: "git reset <commit>", isCorrect: false },
        { answer: "git merge <commit>", isCorrect: false },
      ],
    },
    {
      id: 32,
      question: "Quel fichier stocke la configuration locale du dépôt Git ?",
      options: [
        { answer: ".git/config", isCorrect: true },
        { answer: "config/git", isCorrect: false },
        { answer: ".gitignore", isCorrect: false },
        { answer: "git/config", isCorrect: false },
      ],
    },
    {
      id: 33,
      question: "Quelle commande permet d'afficher la configuration Git actuelle ?",
      options: [
        { answer: "git config --list", isCorrect: true },
        { answer: "git show config", isCorrect: false },
        { answer: "git settings", isCorrect: false },
        { answer: "git config show", isCorrect: false },
      ],
    },
    {
      id: 34,
      question: "Quelle commande permet d'afficher les fichiers ignorés par Git ?",
      options: [
        { answer: "git status --ignored", isCorrect: true },
        { answer: "git ignore list", isCorrect: false },
        { answer: "git ls-ignore", isCorrect: false },
        { answer: "git show ignored", isCorrect: false },
      ],
    },
    {
      id: 35,
      question: "Quelle commande permet de fusionner les modifications d’une autre branche sans créer de commit ?",
      options: [
        { answer: "git rebase <branche>", isCorrect: true },
        { answer: "git merge --no-commit", isCorrect: false },
        { answer: "git cherry-pick <branche>", isCorrect: false },
        { answer: "git squash <branche>", isCorrect: false },
      ],
    },
    {
      id: 36,
      question: "Comment changer l’URL d’un dépôt distant nommé 'origin' ?",
      options: [
        { answer: "git remote set-url origin <nouvelle_url>", isCorrect: true },
        { answer: "git remote update origin <nouvelle_url>", isCorrect: false },
        { answer: "git remote change origin <nouvelle_url>", isCorrect: false },
        { answer: "git remote rename origin <nouvelle_url>", isCorrect: false },
      ],
    },
    {
      id: 37,
      question: "Que fait la commande 'git fetch' ?",
      options: [
        { answer: "Récupère les données du dépôt distant sans les fusionner", isCorrect: true },
        { answer: "Fusionne les modifications du dépôt distant", isCorrect: false },
        { answer: "Supprime les branches distantes", isCorrect: false },
        { answer: "Crée une nouvelle branche locale", isCorrect: false },
      ],
    },
    {
      id: 38,
      question: "Comment afficher la configuration Git globale ?",
      options: [
        { answer: "git config --global --list", isCorrect: true },
        { answer: "git config --list --global", isCorrect: false },
        { answer: "git global config list", isCorrect: false },
        { answer: "git show config --global", isCorrect: false },
      ],
    },
    {
      id: 39,
      question: "Quelle commande affiche le contenu d’un commit spécifique ?",
      options: [
        { answer: "git show <commit>", isCorrect: true },
        { answer: "git log <commit>", isCorrect: false },
        { answer: "git diff <commit>", isCorrect: false },
        { answer: "git display <commit>", isCorrect: false },
      ],
    },
    {
      id: 40,
      question: "Quelle commande permet de configurer l’adresse email pour Git ?",
      options: [
        { answer: "git config --global user.email \"email@example.com\"", isCorrect: true },
        { answer: "git set email \"email@example.com\"", isCorrect: false },
        { answer: "git config email \"email@example.com\"", isCorrect: false },
        { answer: "git user.email set \"email@example.com\"", isCorrect: false },
      ],
    },
  ];
  
  
  export default questions;