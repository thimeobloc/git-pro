// src/data/questions.js

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
      question: "Que signifie 'commit' en Git ?",
      options: [
        { answer: "Enregistrer les modifications dans l'historique", isCorrect: true },
        { answer: "Supprimer un fichier", isCorrect: false },
        { answer: "Créer un nouveau dépôt", isCorrect: false },
        { answer: "Mettre à jour Git", isCorrect: false },
      ],
    },
    {
      id: 4,
      question: "Quelle commande permet de fusionner une branche dans une autre ?",
      options: [
        { answer: "git merge", isCorrect: true },
        { answer: "git push", isCorrect: false },
        { answer: "git pull", isCorrect: false },
        { answer: "git clone", isCorrect: false },
      ],
    },
    {
      id: 5,
      question: "Que fait la commande 'git push' ?",
      options: [
        { answer: "Envoie les commits locaux vers le dépôt distant", isCorrect: true },
        { answer: "Récupère les modifications du dépôt distant", isCorrect: false },
        { answer: "Crée une nouvelle branche", isCorrect: false },
        { answer: "Supprime un commit", isCorrect: false },
      ],
    },
    {
      id: 6,
      question: "Quelle commande permet de cloner un dépôt Git distant ?",
      options: [
        { answer: "git clone", isCorrect: true },
        { answer: "git init", isCorrect: false },
        { answer: "git pull", isCorrect: false },
        { answer: "git fetch", isCorrect: false },
      ],
    },
    {
      id: 7,
      question: "Quelle commande sert à afficher l'historique des commits ?",
      options: [
        { answer: "git log", isCorrect: true },
        { answer: "git status", isCorrect: false },
        { answer: "git diff", isCorrect: false },
        { answer: "git show", isCorrect: false },
      ],
    },
    {
      id: 8,
      question: "Que fait la commande 'git status' ?",
      options: [
        { answer: "Affiche les fichiers modifiés et non committés", isCorrect: true },
        { answer: "Affiche les logs", isCorrect: false },
        { answer: "Réinitialise les modifications", isCorrect: false },
        { answer: "Crée une nouvelle branche", isCorrect: false },
      ],
    },
    {
      id: 9,
      question: "Quelle commande sert à ajouter les fichiers modifiés à l’index (staging area) ?",
      options: [
        { answer: "git add", isCorrect: true },
        { answer: "git commit", isCorrect: false },
        { answer: "git push", isCorrect: false },
        { answer: "git merge", isCorrect: false },
      ],
    },
    {
      id: 10,
      question: "Quelle extension de fichier est utilisée pour les fichiers de configuration Git ?",
      options: [
        { answer: ".gitignore", isCorrect: true },
        { answer: ".gitconfig", isCorrect: false },
        { answer: ".gitfile", isCorrect: false },
        { answer: ".gitsetup", isCorrect: false },
      ],
    },
    {
      id: 11,
      question: "Que permet de faire la commande 'git fetch' ?",
      options: [
        { answer: "Récupérer les données du dépôt distant sans fusionner", isCorrect: true },
        { answer: "Fusionner les branches", isCorrect: false },
        { answer: "Supprimer une branche", isCorrect: false },
        { answer: "Pousser les modifications locales", isCorrect: false },
      ],
    },
    {
      id: 12,
      question: "Que signifie HEAD dans Git ?",
      options: [
        { answer: "Le commit courant sur lequel on travaille", isCorrect: true },
        { answer: "Le dépôt distant", isCorrect: false },
        { answer: "Une branche secondaire", isCorrect: false },
        { answer: "Une commande Git", isCorrect: false },
      ],
    },
    {
      id: 13,
      question: "Quelle commande annule les modifications locales d'un fichier ?",
      options: [
        { answer: "git checkout -- <fichier>", isCorrect: true },
        { answer: "git reset", isCorrect: false },
        { answer: "git revert", isCorrect: false },
        { answer: "git rm", isCorrect: false },
      ],
    },
    {
      id: 14,
      question: "Comment annuler un commit déjà poussé sur un dépôt distant ?",
      options: [
        { answer: "git revert", isCorrect: true },
        { answer: "git reset --hard", isCorrect: false },
        { answer: "git remove", isCorrect: false },
        { answer: "git clone", isCorrect: false },
      ],
    },
    {
      id: 15,
      question: "Que signifie 'fork' sur GitHub ?",
      options: [
        { answer: "Copier un dépôt pour travailler indépendamment", isCorrect: true },
        { answer: "Fusionner deux dépôts", isCorrect: false },
        { answer: "Créer une branche", isCorrect: false },
        { answer: "Supprimer un dépôt", isCorrect: false },
      ],
    },
    {
      id: 16,
      question: "Quelle est la fonction principale de GitHub ?",
      options: [
        { answer: "Héberger des dépôts Git en ligne", isCorrect: true },
        { answer: "Écrire du code", isCorrect: false },
        { answer: "Compiler des projets", isCorrect: false },
        { answer: "Déployer des sites web", isCorrect: false },
      ],
    },
    {
      id: 17,
      question: "Quelle commande supprime une branche localement ?",
      options: [
        { answer: "git branch -d <nom>", isCorrect: true },
        { answer: "git delete-branch <nom>", isCorrect: false },
        { answer: "git remove <nom>", isCorrect: false },
        { answer: "git branch --remove <nom>", isCorrect: false },
      ],
    },
    {
      id: 18,
      question: "Quelle commande permet de renommer une branche ?",
      options: [
        { answer: "git branch -m <ancien> <nouveau>", isCorrect: true },
        { answer: "git rename <ancien> <nouveau>", isCorrect: false },
        { answer: "git move <ancien> <nouveau>", isCorrect: false },
        { answer: "git branch --rename <ancien> <nouveau>", isCorrect: false },
      ],
    },
    {
      id: 19,
      question: "Que signifie 'stash' en Git ?",
      options: [
        { answer: "Mettre de côté les modifications en cours", isCorrect: true },
        { answer: "Supprimer une branche", isCorrect: false },
        { answer: "Fusionner une branche", isCorrect: false },
        { answer: "Ajouter un tag", isCorrect: false },
      ],
    },
    {
      id: 20,
      question: "Quelle commande permet de récupérer les modifications et de les fusionner automatiquement ?",
      options: [
        { answer: "git pull", isCorrect: true },
        { answer: "git fetch", isCorrect: false },
        { answer: "git clone", isCorrect: false },
        { answer: "git merge", isCorrect: false },
      ],
    },
  
    // -- 20 questions ci-dessus, je continue jusqu'à 70 --
  
    {
      id: 21,
      question: "Comment afficher les branches locales dans Git ?",
      options: [
        { answer: "git branch", isCorrect: true },
        { answer: "git show branches", isCorrect: false },
        { answer: "git list", isCorrect: false },
        { answer: "git branches -a", isCorrect: false },
      ],
    },
    {
      id: 22,
      question: "Que fait la commande 'git reset --hard' ?",
      options: [
        { answer: "Réinitialise l'index et le répertoire de travail", isCorrect: true },
        { answer: "Supprime la branche courante", isCorrect: false },
        { answer: "Annule un commit distant", isCorrect: false },
        { answer: "Met à jour un dépôt distant", isCorrect: false },
      ],
    },
    {
      id: 23,
      question: "Qu’est-ce qu’un 'merge conflict' ?",
      options: [
        { answer: "Un conflit lors de la fusion de branches", isCorrect: true },
        { answer: "Une erreur lors du commit", isCorrect: false },
        { answer: "Une commande Git invalide", isCorrect: false },
        { answer: "Une branche corrompue", isCorrect: false },
      ],
    },
    {
      id: 24,
      question: "Comment résoudre un conflit de fusion dans Git ?",
      options: [
        { answer: "Éditer manuellement les fichiers conflictuels puis commit", isCorrect: true },
        { answer: "Utiliser git revert", isCorrect: false },
        { answer: "Supprimer la branche", isCorrect: false },
        { answer: "Renvoyer la branche distante", isCorrect: false },
      ],
    },
    {
      id: 25,
      question: "Que fait la commande 'git tag' ?",
      options: [
        { answer: "Créer un marqueur sur un commit", isCorrect: true },
        { answer: "Supprimer une branche", isCorrect: false },
        { answer: "Mettre à jour un commit", isCorrect: false },
        { answer: "Pousser un commit", isCorrect: false },
      ],
    },
    {
      id: 26,
      question: "Que signifie 'HEAD detached' ?",
      options: [
        { answer: "On est positionné sur un commit et non une branche", isCorrect: true },
        { answer: "La branche principale est supprimée", isCorrect: false },
        { answer: "La branche est fusionnée", isCorrect: false },
        { answer: "Un nouveau commit est créé", isCorrect: false },
      ],
    },
    {
      id: 27,
      question: "Quel fichier est utilisé pour ignorer certains fichiers dans un dépôt Git ?",
      options: [
        { answer: ".gitignore", isCorrect: true },
        { answer: ".gitconfig", isCorrect: false },
        { answer: "README.md", isCorrect: false },
        { answer: "LICENSE", isCorrect: false },
      ],
    },
    {
      id: 28,
      question: "Quelle commande permet d'afficher les différences entre deux commits ?",
      options: [
        { answer: "git diff <commit1> <commit2>", isCorrect: true },
        { answer: "git log --diff", isCorrect: false },
        { answer: "git show-commit", isCorrect: false },
        { answer: "git compare", isCorrect: false },
      ],
    },
    {
      id: 29,
      question: "Comment annuler un ajout de fichier à l’index ?",
      options: [
        { answer: "git reset <fichier>", isCorrect: true },
        { answer: "git remove <fichier>", isCorrect: false },
        { answer: "git undo <fichier>", isCorrect: false },
        { answer: "git delete <fichier>", isCorrect: false },
      ],
    },
    {
      id: 30,
      question: "Quelle commande permet de renommer un fichier dans Git ?",
      options: [
        { answer: "git mv <ancien> <nouveau>", isCorrect: true },
        { answer: "git rename <ancien> <nouveau>", isCorrect: false },
        { answer: "git move <ancien> <nouveau>", isCorrect: false },
        { answer: "git change <ancien> <nouveau>", isCorrect: false },
      ],
    },
  
    // 31 à 50
    {
      id: 31,
      question: "Que fait la commande 'git stash pop' ?",
      options: [
        { answer: "Applique et supprime le dernier stash", isCorrect: true },
        { answer: "Supprime tous les stash", isCorrect: false },
        { answer: "Crée un nouveau stash", isCorrect: false },
        { answer: "Liste les stashs", isCorrect: false },
      ],
    },
    {
      id: 32,
      question: "Comment voir les fichiers suivis et non suivis dans Git ?",
      options: [
        { answer: "git status", isCorrect: true },
        { answer: "git log", isCorrect: false },
        { answer: "git diff", isCorrect: false },
        { answer: "git show", isCorrect: false },
      ],
    },
    {
      id: 33,
      question: "Quelle commande supprime un fichier du dépôt Git ?",
      options: [
        { answer: "git rm <fichier>", isCorrect: true },
        { answer: "git delete <fichier>", isCorrect: false },
        { answer: "git remove <fichier>", isCorrect: false },
        { answer: "git erase <fichier>", isCorrect: false },
      ],
    },
    {
      id: 34,
      question: "Quelle commande initialise un nouveau dépôt Git ?",
      options: [
        { answer: "git init", isCorrect: true },
        { answer: "git start", isCorrect: false },
        { answer: "git new", isCorrect: false },
        { answer: "git create", isCorrect: false },
      ],
    },
    {
      id: 35,
      question: "Que fait la commande 'git config' ?",
      options: [
        { answer: "Configurer les paramètres utilisateur de Git", isCorrect: true },
        { answer: "Afficher la configuration réseau", isCorrect: false },
        { answer: "Mettre à jour Git", isCorrect: false },
        { answer: "Créer un fichier de configuration", isCorrect: false },
      ],
    },
    {
      id: 36,
      question: "Quelle commande affiche le contenu d'un commit ?",
      options: [
        { answer: "git show <commit>", isCorrect: true },
        { answer: "git log <commit>", isCorrect: false },
        { answer: "git view <commit>", isCorrect: false },
        { answer: "git cat <commit>", isCorrect: false },
      ],
    },
    {
      id: 37,
      question: "Que signifie 'origin' dans Git ?",
      options: [
        { answer: "Le nom par défaut du dépôt distant", isCorrect: true },
        { answer: "Le dépôt local", isCorrect: false },
        { answer: "La branche principale", isCorrect: false },
        { answer: "Un fichier de configuration", isCorrect: false },
      ],
    },
    {
      id: 38,
      question: "Comment changer la branche active ?",
      options: [
        { answer: "git checkout <nom_de_branche>", isCorrect: true },
        { answer: "git switch <nom_de_branche>", isCorrect: false },
        { answer: "git move <nom_de_branche>", isCorrect: false },
        { answer: "git change <nom_de_branche>", isCorrect: false },
      ],
    },
    {
      id: 39,
      question: "Quelle commande crée une branche et s’y place ?",
      options: [
        { answer: "git checkout -b <nom>", isCorrect: true },
        { answer: "git branch -c <nom>", isCorrect: false },
        { answer: "git switch -c <nom>", isCorrect: false },
        { answer: "git create <nom>", isCorrect: false },
      ],
    },
    {
      id: 40,
      question: "Quelle commande affiche les changements non committés ?",
      options: [
        { answer: "git diff", isCorrect: true },
        { answer: "git status", isCorrect: false },
        { answer: "git log", isCorrect: false },
        { answer: "git show", isCorrect: false },
      ],
    },
  
    // 41 à 60
    {
      id: 41,
      question: "Comment ajouter un message lors d’un commit ?",
      options: [
        { answer: "git commit -m 'message'", isCorrect: true },
        { answer: "git commit --message", isCorrect: false },
        { answer: "git commit -msg", isCorrect: false },
        { answer: "git commit --msg", isCorrect: false },
      ],
    },
    {
      id: 42,
      question: "Quel est le rôle d’une branche dans Git ?",
      options: [
        { answer: "Travailler sur une version indépendante du projet", isCorrect: true },
        { answer: "Sauvegarder le projet", isCorrect: false },
        { answer: "Supprimer les erreurs", isCorrect: false },
        { answer: "Fusionner deux projets", isCorrect: false },
      ],
    },
    {
      id: 43,
      question: "Quel est le fichier standard décrivant un projet sur GitHub ?",
      options: [
        { answer: "README.md", isCorrect: true },
        { answer: "LICENSE", isCorrect: false },
        { answer: "CONTRIBUTING.md", isCorrect: false },
        { answer: "INSTALL.md", isCorrect: false },
      ],
    },
    {
      id: 44,
      question: "Comment cloner un dépôt avec une branche spécifique ?",
      options: [
        { answer: "git clone -b <branche> <url>", isCorrect: true },
        { answer: "git clone --branch <branche> <url>", isCorrect: false },
        { answer: "git clone --branch-only <branche> <url>", isCorrect: false },
        { answer: "git clone <url> -branch <branche>", isCorrect: false },
      ],
    },
    {
      id: 45,
      question: "Que fait la commande 'git pull --rebase' ?",
      options: [
        { answer: "Récupère les modifications et les applique par rebasage", isCorrect: true },
        { answer: "Fusionne automatiquement sans rebasage", isCorrect: false },
        { answer: "Réinitialise les modifications locales", isCorrect: false },
        { answer: "Supprime la branche distante", isCorrect: false },
      ],
    },
    {
      id: 46,
      question: "Quelle commande permet de supprimer une branche distante ?",
      options: [
        { answer: "git push origin --delete <branche>", isCorrect: true },
        { answer: "git branch -d <branche>", isCorrect: false },
        { answer: "git remove <branche>", isCorrect: false },
        { answer: "git delete <branche>", isCorrect: false },
      ],
    },
    {
      id: 47,
      question: "Quel est l'objectif du fichier '.gitmodules' ?",
      options: [
        { answer: "Gérer les sous-modules Git", isCorrect: true },
        { answer: "Ignorer certains fichiers", isCorrect: false },
        { answer: "Configurer Git", isCorrect: false },
        { answer: "Décrire le projet", isCorrect: false },
      ],
    },
    {
      id: 48,
      question: "Quel est l’intérêt de 'git rebase' ?",
      options: [
        { answer: "Appliquer des commits sur une autre base", isCorrect: true },
        { answer: "Fusionner deux branches", isCorrect: false },
        { answer: "Créer une nouvelle branche", isCorrect: false },
        { answer: "Supprimer un commit", isCorrect: false },
      ],
    },
    {
      id: 49,
      question: "Comment annuler le dernier commit mais garder les modifications ?",
      options: [
        { answer: "git reset --soft HEAD~1", isCorrect: true },
        { answer: "git revert HEAD", isCorrect: false },
        { answer: "git reset --hard HEAD~1", isCorrect: false },
        { answer: "git remove HEAD", isCorrect: false },
      ],
    },
    {
      id: 50,
      question: "Quelle commande sert à renommer un fichier dans Git ?",
      options: [
        { answer: "git mv <ancien> <nouveau>", isCorrect: true },
        { answer: "git rename <ancien> <nouveau>", isCorrect: false },
        { answer: "git move <ancien> <nouveau>", isCorrect: false },
        { answer: "git change <ancien> <nouveau>", isCorrect: false },
      ],
    },
  
    // 51 à 70
    {
      id: 51,
      question: "Qu'est-ce qu'un 'pull request' sur GitHub ?",
      options: [
        { answer: "Une demande de fusion de modifications", isCorrect: true },
        { answer: "Une demande de suppression de fichier", isCorrect: false },
        { answer: "Un message d'erreur", isCorrect: false },
        { answer: "Un nouveau dépôt", isCorrect: false },
      ],
    },
    {
      id: 52,
      question: "Comment créer un tag annoté ?",
      options: [
        { answer: "git tag -a <nom> -m 'message'", isCorrect: true },
        { answer: "git tag <nom>", isCorrect: false },
        { answer: "git tag -d <nom>", isCorrect: false },
        { answer: "git create tag <nom>", isCorrect: false },
      ],
    },
    {
      id: 53,
      question: "Quelle commande affiche les branches locales ?",
      options: [
        { answer: "git branch", isCorrect: true },
        { answer: "git branch -r", isCorrect: false },
        { answer: "git show-branches", isCorrect: false },
        { answer: "git list-branches", isCorrect: false },
      ],
    },
    {
      id: 54,
      question: "Quel fichier est utilisé pour ignorer certains fichiers dans Git ?",
      options: [
        { answer: ".gitignore", isCorrect: true },
        { answer: ".gitexclude", isCorrect: false },
        { answer: ".gitignorefile", isCorrect: false },
        { answer: "ignore.git", isCorrect: false },
      ],
    },
    {
      id: 55,
      question: "Comment afficher les logs des commits ?",
      options: [
        { answer: "git log", isCorrect: true },
        { answer: "git show", isCorrect: false },
        { answer: "git diff", isCorrect: false },
        { answer: "git history", isCorrect: false },
      ],
    },
    {
      id: 56,
      question: "Comment annuler les modifications locales non committées ?",
      options: [
        { answer: "git checkout -- <fichier>", isCorrect: true },
        { answer: "git reset --hard", isCorrect: false },
        { answer: "git revert", isCorrect: false },
        { answer: "git undo", isCorrect: false },
      ],
    },
    {
      id: 57,
      question: "Que signifie HEAD dans Git ?",
      options: [
        { answer: "Le commit courant ou la branche active", isCorrect: true },
        { answer: "Le dernier commit distant", isCorrect: false },
        { answer: "Le fichier de configuration", isCorrect: false },
        { answer: "Un tag", isCorrect: false },
      ],
    },
    {
      id: 58,
      question: "Comment afficher le contenu d’un fichier à un commit précis ?",
      options: [
        { answer: "git show <commit>:<fichier>", isCorrect: true },
        { answer: "git cat <commit>:<fichier>", isCorrect: false },
        { answer: "git view <commit>:<fichier>", isCorrect: false },
        { answer: "git log <commit>:<fichier>", isCorrect: false },
      ],
    },
    {
      id: 59,
      question: "Quelle commande fusionne deux branches ?",
      options: [
        { answer: "git merge <branche>", isCorrect: true },
        { answer: "git join <branche>", isCorrect: false },
        { answer: "git combine <branche>", isCorrect: false },
        { answer: "git integrate <branche>", isCorrect: false },
      ],
    },
    {
      id: 60,
      question: "Comment créer un nouveau dépôt distant sur GitHub ?",
      options: [
        { answer: "Via l’interface web GitHub", isCorrect: true },
        { answer: "git init --remote", isCorrect: false },
        { answer: "git remote add origin", isCorrect: false },
        { answer: "git create repo", isCorrect: false },
      ],
    },
    {
      id: 61,
      question: "Quelle commande permet de voir l'historique de modifications d’un fichier spécifique ?",
      options: [
        { answer: "git log -- <fichier>", isCorrect: true },
        { answer: "git history <fichier>", isCorrect: false },
        { answer: "git show <fichier>", isCorrect: false },
        { answer: "git diff <fichier>", isCorrect: false },
      ],
    },
    {
      id: 62,
      question: "Comment annuler un merge en cours ?",
      options: [
        { answer: "git merge --abort", isCorrect: true },
        { answer: "git reset --merge", isCorrect: false },
        { answer: "git revert --merge", isCorrect: false },
        { answer: "git abort", isCorrect: false },
      ],
    },
    {
      id: 63,
      question: "Quelle commande affiche les branches distantes ?",
      options: [
        { answer: "git branch -r", isCorrect: true },
        { answer: "git branch -a", isCorrect: false },
        { answer: "git remote branches", isCorrect: false },
        { answer: "git show branches", isCorrect: false },
      ],
    },
    {
      id: 64,
      question: "Quel est l'effet de la commande 'git stash' ?",
      options: [
        { answer: "Met de côté les modifications non committées", isCorrect: true },
        { answer: "Supprime les commits", isCorrect: false },
        { answer: "Rebase les commits", isCorrect: false },
        { answer: "Supprime les fichiers non suivis", isCorrect: false },
      ],
    },
    {
      id: 65,
      question: "Comment créer une branche distante ?",
      options: [
        { answer: "git push origin <branche>", isCorrect: true },
        { answer: "git branch --remote <branche>", isCorrect: false },
        { answer: "git create branch <branche>", isCorrect: false },
        { answer: "git new branch <branche>", isCorrect: false },
      ],
    },
    {
      id: 66,
      question: "Quelle commande affiche les fichiers modifiés dans la zone de staging ?",
      options: [
        { answer: "git diff --cached", isCorrect: true },
        { answer: "git status", isCorrect: false },
        { answer: "git show", isCorrect: false },
        { answer: "git diff", isCorrect: false },
      ],
    },
    {
      id: 67,
      question: "Que fait la commande 'git fetch' ?",
      options: [
        { answer: "Récupère les modifications sans fusionner", isCorrect: true },
        { answer: "Récupère et fusionne les modifications", isCorrect: false },
        { answer: "Supprime la branche locale", isCorrect: false },
        { answer: "Met à jour la configuration", isCorrect: false },
      ],
    },
    {
      id: 68,
      question: "Quel fichier contient l’historique des branches locales ?",
      options: [
        { answer: ".git/refs/heads", isCorrect: true },
        { answer: ".git/branches", isCorrect: false },
        { answer: ".git/refs/remotes", isCorrect: false },
        { answer: ".git/HEAD", isCorrect: false },
      ],
    },
    {
      id: 69,
      question: "Que fait la commande 'git cherry-pick' ?",
      options: [
        { answer: "Applique un commit spécifique sur la branche courante", isCorrect: true },
        { answer: "Supprime un commit", isCorrect: false },
        { answer: "Crée un nouveau commit", isCorrect: false },
        { answer: "Fusionne deux branches", isCorrect: false },
      ],
    },
    {
      id: 70,
      question: "Comment annuler un commit local sans perdre les changements ?",
      options: [
        { answer: "git reset --soft HEAD~1", isCorrect: true },
        { answer: "git revert HEAD", isCorrect: false },
        { answer: "git reset --hard HEAD~1", isCorrect: false },
        { answer: "git checkout HEAD~1", isCorrect: false },
      ],
    },
  ]
  
  export default questions;