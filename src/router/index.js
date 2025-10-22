// src/router/index.js

import { createRouter, createWebHashHistory } from 'vue-router';

// Importa tus componentes de vista (los crearemos después)
import Home from '../views/Home.vue';
import Productos from '../views/Productos.vue';
import ProductoForm from '../views/ProductoForm.vue'; // Usaremos este para 'crear' y 'editar'
import Carrito from '../views/Carrito.vue';
import TeamMembers from '../views/TeamMembers.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/productos',
    name: 'Productos',
    component: Productos
  },
  {
    path: '/productos/crear',
    name: 'CrearProducto',
    component: ProductoForm
  },
  {
    path: '/productos/:id', // Ruta dinámica para editar
    name: 'EditarProducto',
    component: ProductoForm,
    props: true // Permite pasar el 'id' como prop al componente
  },
  {
    path: '/carrito',
    name: 'Carrito',
    component: Carrito
  },
  {
    path: '/team-members',
    name: 'TeamMembers',
    component: TeamMembers
  }
];

const router = createRouter({
  // Usamos createWebHashHistory para compatibilidad con GitHub Pages
  history: createWebHashHistory(), 
  routes,
});

export default router;
