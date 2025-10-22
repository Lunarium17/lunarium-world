// src/main.js

import { createApp } from 'vue'
import { createPinia } from 'pinia'

// Asegúrate de tener estas líneas
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap' // (Opcional, si necesitas JS de Bootstrap)

import './assets/theme.css' // Tu archivo de estilos personalizado

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
