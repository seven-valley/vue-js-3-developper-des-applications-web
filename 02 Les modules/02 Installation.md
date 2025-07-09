# Installer un projet vue 3
https://vuejs.org/guide/quick-start.html


## création du rèpertoire pour les projets Vue
On revient à la racine <code>c:</code>
```
cd\
```
on crée le répertoire 
```
md prj-vue
```
on va sur le répertoire
```
cd prj-vue
```


## :one: Installation du premier projet
```
npm create vite@latest premier
```

## :two: Aller dans le repertoire
```
cd premier
```

## :three: On ivite les canard !  
On recontstruit les dépndance du répertoire <code>node_modules</code>
```
npm i
```

## :four: Installer bootstrap
```
npm install bootstrap
```


## :five:  Installer Font Awesome
```
npm install @fortawesome/fontawesome-svg-core
npm install @fortawesome/free-solid-svg-icons
npm install @fortawesome/free-regular-svg-icons
npm install @fortawesome/free-brands-svg-icons
npm install @fortawesome/vue-fontawesome
```

## :six: Ouvrir Vs code
On ouvre VS code sur le répertoire du projet <code>premier</code>
```
code .
```

## :seven: Ajouter Bootstrap et font Awesome au projet
```js
// main.ts main.js 

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'

```
<code>App.vue</code>
```vue
<script setup>
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Icônes spécifiques (exemples)
import { faUser, faCoffee } from '@fortawesome/free-solid-svg-icons'


// Ajouter les icônes à la librairie
library.add(faUser, faCoffee)

</script>
<template>
 <font-awesome-icon icon="user" />
</template>
```


## :eight: On lance le local host
```
npm run dev
```