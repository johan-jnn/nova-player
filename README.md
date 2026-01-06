# Workshop Application de musique

Hello jeune développeur !
Te voici sur le projet de la prochaine application musical du moment !

## Démarrer l'application

L'application est construite avec le framework [VueJS](https://vuejs.org/). Il est également possible d'utiliser les classes [Tailwind](https://tailwindcss.com/) si jamais tu le souhaites.

Afin de bien démarrer l'application, ouvres un terminal de commande dans **VSCode** (Dans la barre de l'application --> `Terminal` -> `Nouveau Terminal`), puis tapes les différentes commandes ci-dessous :

```sh
# Installation de VueJs et TailwindCss
npm install

# Lancement de l'application et ouverture automatique de celle-ci
npm run dev --open
```

### VueJS

VueJS est un framework qui se rapproche énormément de l'HTML de base.
Le projet est actuellement divisé en plusieurs composant afin d'éviter de répéter du code.
Chaque composant possède 3 partie :

#### Scripting

Le scripting d'un composant est toute la logique de celui-ci.

Il se trouve à l'intérieur de la balise `<script setup>` :

```html
<script setup>
  // Ici tu peux écrire ta logique
</script>
```

#### Templating

Le templating est l'html qui va être rendu par le navigateur.

Il se trouve dans la balise `template` :

```html
<template>
  <h1>Ce titre sera affiché sur la page</h1>
</template>
```

#### Styling

Enfin, afin de rendre le composant plus joli, il est possible de le styliser.

Le style s'écrit au format **CSS** et se trouve dans la balise `<style scoped>`.

> Note: Le style appliqué à un composant est uniquement pour celui-ci. Il ne sera pas appliqué aux autres éléments de la page.

```html
<style scoped>
  h1 {
    color: red;
  }
</style>
```

## Tes missions

Notre équipe de développeurs a déjà conçu une bonne partie de l'application, mais quelques petites fonctionnalités doivent encore être implémentés.

### Changement du nom de l'application

Afin d'éviter de réécrire plusieurs fois le nom de l'application, nous avons décidé d'utiliser une **variable d'environnement** pour stocker le nom de l'application.

> Changes la variable d'environnement afin de nommer correctement l'application.

### Jouer une musique

Actuellement la fonctionnalité pour jouer une musique ne marche pas. Il faudrait que tu regardes la fonction `play` dans le fichier `Song.vue`, ainsi que comment fonctionne le `player` (n'hésite pas à demander aux développeurs de t'expliquer comment le `player` fonctionne) afin de jouer le son lorsque l'utilisateur demande à ce que le son soit joué.

### Styliser le player

Car oui, le métier de développeur ne s'arrête pas à la logique de l'application, il va également dans le design de l'application.

> Rends toi dans le `<style></style>` du composant `Player` afin de rendre le player un peu plus attrayant.

#### Bonus

Si tu es à l'aise avec le reste
