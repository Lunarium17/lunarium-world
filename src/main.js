import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Importa estilos boostrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia) // Usa Pinia para el estado global
app.use(router) // Usa Vue Router para la navegación

app.mount('#app')
