# Module 09 Les routes

```
npm install vue-router@4
```

Création des pages
- Home.vue
- About.vue
- Produit.vue

Création du component
- Nav.vue
- Footer.vue


## Mise en place du router
```ts
// main.js
import { createApp } from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.min.css'

import {createRouter, createWebHistory} from 'vue-router'
import Home from './pages/Home.vue'
import Home from './pages/About.vue'
import Home from './pages/Produit.vue'

const router = createRouter({
    history :createWebHistory(),
    routes :[
        {path:'/',name:'Home',component:Home},
        {path:'/about',name:'About',component:About},
        {path:'/produit/:id',name:'Produit',component:Home},
    ]
})

const app = createApp(App)

app.use(router)
app.mount('#app')
```

## App.vue
```vue
<script setup>
import Nav from './components/Nav.vue'
import Footer from './components/Footer.vue'
</script>

<template>
    <Nav />
        <router-view />
    <Footer />
</template>

```


## About.vue
``` vue
<template>
  
<div class="container">
    <h1>About</h1>
</div> 
</template>

```
## Home.vue
```vue
<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const go =(id)=>{
    router.push({ name: 'Modifier', params: { id } })
  // or: router.push(`/mofier/${id}`)
}
</script>

<template>
<div class="container">
    <h1>Home</h1>
    <button @click="go(123)">GO</button>
</div> 
</template>
```


## Nav.vue
```vue
<template>
   <RouterLink to="/" exact-active-class="active"> Home</RouterLink>
|
    <RouterLink to="/about" exact-active-class="active"> About</RouterLink>
</template>
```

## Produit.vue
```vue
<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const produitId = route.params.id
</script>

<template>
<div class="container">
    <h1>Modifier</h1>

     <h2>Produit ID: {{ produitId }}</h2>
</div> 
</template>