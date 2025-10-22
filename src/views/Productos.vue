<template>
  <div>
    <h1 class="titulo">Catálogo de Productos</h1>
    <p style="text-align: center;">Haz clic en "Agregar" para añadir al carrito.</p>

    <div class="produc-grid mt-4">
      
      <div 
        class="produc-card" 
        v-for="producto in productosFiltrados" 
        :key="producto.id"
      >
        <img :src="producto.image" :alt="producto.name">
        <h5>{{ producto.name }}</h5>
        <p class="fs-4 fw-bold">${{ producto.price.toFixed(2) }}</p>
        
        <div>
          <button @click="carritoStore.agregarAlCarrito(producto)">
            Agregar
          </button>
          
          <router-link :to="'/productos/' + producto.id">
            <button>Editar</button> 
          </router-link>
          
          <button 
            @click="productoStore.eliminarProducto(producto.id)" 
            class="remove-btn">
            Eliminar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useProductoStore } from '@/stores/useProductoStore';
import { useCarritoStore } from '@/stores/useCarritoStore';

const productoStore = useProductoStore();
const carritoStore = useCarritoStore();
const route = useRoute();

const productosFiltrados = computed(() => {
  const query = route.query.q;
  if (!query) {
    return productoStore.productos; 
  }
  return productoStore.productos.filter(p => 
    p.name.toLowerCase().includes(query.toLowerCase())
  );
});
</script>

<style scoped>
/* Estilos extra si son necesarios */
.fs-4 { font-size: 1.5rem; }
.fw-bold { font-weight: bold; }
.mt-4 { margin-top: 1.5rem; }
.titulo {
  text-align: center;
  margin-bottom: 20px;
  color: var(--primary-color, #9f3ffc); /* Morado */
}
</style>