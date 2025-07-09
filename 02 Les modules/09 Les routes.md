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

## Nav.vue
```html
   <RouterLink to="/" exact-active-class="active"> Home</RouterLink>
```