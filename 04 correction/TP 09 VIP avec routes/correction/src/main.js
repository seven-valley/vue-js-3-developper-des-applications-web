import { createApp } from 'vue'
import App from './App.vue'

 import 'bootstrap/dist/css/bootstrap.min.css'

import {createRouter, createWebHistory} from 'vue-router'
import Home from './pages/Home.vue'
import Builder from './pages/Builder.vue'
import Modifier from './pages/Modifier.vue'
import Error from './pages/Error.vue'

const router = createRouter({
    history :createWebHistory(),
    routes :[
        {path:'/',name:'Home',component:Home},
        {path:'/builder',name:'Builder',component:Builder},
        {path:'/modifier/:id',name:'Modifier',component:Modifier},
        {path:'/error',name:'Error',component:Error},
    ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
