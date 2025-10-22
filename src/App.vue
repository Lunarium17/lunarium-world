<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container-fluid">
        <router-link to="/" class="navbar-brand">Lunarium World 🎮</router-link>
        
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/" class="nav-link" active-class="active">Inicio</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/productos" class="nav-link" active-class="active">Productos</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/productos/crear" class="nav-link" active-class="active">Crear Producto</router-link>
            </li>

            <li class="nav-item">
              <router-link to="/carrito" class="nav-link" active-class="active">
                Carrito
                <span 
                  v-if="carritoStore.totalArticulos > 0" 
                  class="badge rounded-pill bg-primary ms-1"
                >
                  {{ carritoStore.totalArticulos }}
                </span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/team-members" class="nav-link" active-class="active">Equipo</router-link>
            </li>
          </ul>
          
          <form class="d-flex" @submit.prevent="realizarBusqueda">
             <input 
              class="form-control me-2" 
              type="search" 
              placeholder="Buscar producto..." 
              v-model="terminoBusqueda"
            >
            <button class="btn btn-outline-success" type="submit">Buscar</button>
          </form>
        </div>
      </div>
    </nav>
  </header>

  <main class="container" style="padding-top: 80px;">
    <router-view></router-view>
  </main>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
// 1. Importa el store del carrito
import { useCarritoStore } from '@/stores/useCarritoStore';

// 2. Obtén la instancia del store
const carritoStore = useCarritoStore();

// Lógica de búsqueda (que ya tenías)
const terminoBusqueda = ref('');
const router = useRouter();

const realizarBusqueda = () => {
  if (terminoBusqueda.value.trim()) {
    router.push({ 
      name: 'Productos', 
      query: { q: terminoBusqueda.value } 
    });
    terminoBusqueda.value = '';
  }
};
</script>

<style>
/* ... (tus estilos de App.vue) ... */
.nav-link.active {
  font-weight: bold;
  color: #fff !important;
  border-bottom: 2px solid var(--primary-color, #9f3ffc);
}

/* Estilo opcional para el badge */
.badge.bg-primary {
  background-color: var(--primary-color, #9f3ffc) !important;
  color: white;
}
</style>