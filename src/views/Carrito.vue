<template>
  <div>
    <h1 style="color: var(--primary-color, #9f3ffc); text-align: center;">Carrito de Compras</h1>

    <div v-if="carritoStore.totalArticulos > 0">
      
      <table class="table table-dark table-striped align-middle">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in carritoStore.carrito" :key="index">
            <td>{{ item.name }}</td>
            <td>${{ item.price.toFixed(2) }}</td>
            <td>
              <button 
                @click="carritoStore.eliminarDelCarrito(index)" 
                class="remove-btn">
                Eliminar
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <hr>

      <div class="text-end total-section">
        <h3>Total de Artículos: {{ carritoStore.totalArticulos }}</h3>
        <h2>Total: ${{ carritoStore.totalPrecio.toFixed(2) }}</h2>
      </div>

      <div class="text-end mt-3">
        <button @click="carritoStore.vaciarCarrito()" class="remove-btn">
          Vaciar Carrito
        </button>
      </div>
    </div>

    <div v-else>
      <div class="alert alert-info">
        Tu carrito está vacío.
      </div>
      <router-link to="/productos" class="btn btn-primary">
        Volver a la tienda
      </router-link>
    </div>
  </div>
</template>

<script setup>
// Importamos el store del carrito para acceder al estado y las acciones
import { useCarritoStore } from '@/stores/useCarritoStore';
const carritoStore = useCarritoStore();
</script>

<style scoped>
/* Estilos específicos para esta vista (scoped).
  Hacemos los totales cian, usando la variable CSS
  definida en tu archivo theme.css.
*/
.total-section h2,
.total-section h3 {
  color: var(--accent-color, #00d9ff);
}
</style>