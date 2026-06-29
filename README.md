# 👨‍👩‍👧 Agenda famille — trajets

Application mobile pour gérer les déposes et récupérations de votre enfant, partagée avec votre conjoint(e).

## Déploiement sur GitHub Pages (5 minutes)

### Étape 1 — Créer le dépôt

1. Allez sur [github.com](https://github.com) et connectez-vous
2. Cliquez **New repository** (bouton vert)
3. Nommez-le `agenda-famille`
4. Cochez **"Add a README file"**
5. Cliquez **Create repository**

### Étape 2 — Ajouter le fichier

1. Dans votre nouveau dépôt, cliquez **Add file → Upload files**
2. Glissez le fichier `index.html` (celui que vous avez téléchargé)
3. Cliquez **Commit changes**

### Étape 3 — Activer GitHub Pages

1. Allez dans **Settings** (onglet en haut du dépôt)
2. Dans le menu gauche, cliquez **Pages**
3. Sous *Source*, choisissez **Deploy from a branch**
4. Branche : **main** / Dossier : **/ (root)**
5. Cliquez **Save**

Après ~1 minute, votre app est disponible à l'adresse :
```
https://VOTRE-PSEUDO.github.io/agenda-famille/
```

### Étape 4 — Installer sur les deux téléphones

**iPhone (Safari)**
1. Ouvrez l'URL dans Safari
2. Bouton Partager → "Sur l'écran d'accueil"
3. Nommez-la "Agenda famille" → Ajouter

**Android (Chrome)**
1. Ouvrez l'URL dans Chrome
2. Menu ⋮ → "Ajouter à l'écran d'accueil"
3. Nommez-la "Agenda famille" → Ajouter

## Fonctionnalités

- 🚗 Gestion des **déposes** et **récupérations**
- 📅 Navigation par semaine
- 🔁 Événements **récurrents** (hebdomadaire, 12 semaines)
- 👤 Indication de qui s'en charge (vous ou votre conjoint(e))
- 🌙 Mode sombre automatique

## Note sur le partage des données

Les données sont enregistrées localement sur chaque téléphone (`localStorage`).
Pour un **vrai partage en temps réel**, il faudrait connecter une base de données (Firebase, Supabase…) — demandez à Claude si vous souhaitez cette évolution !
