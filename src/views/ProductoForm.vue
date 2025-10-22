<template>
  <div>
    <h1 v-if="isEditing">Editar Producto</h1>
    <h1 class="titulo" v-else>Crear Nuevo Producto</h1>

    <div class="form-container">
      <form @submit.prevent="guardarProducto">
        
        <div>
          <label for="name">Nombre del Producto</label>
          <input 
            type="text" 
            id="name" 
            v-model="productoData.name"
            required
          >
        </div>

        <div>
          <label for="price">Precio</label>
          <input 
            type="number" 
            step="0.01"
            id="price" 
            v-model.number="productoData.price"
            required
          >
        </div>

        <button type="submit">
          {{ isEditing ? 'Actualizar' : 'Guardar' }}
        </button>
        
        <router-link to="/productos">
          <button type="button">Cancelar</button>
        </router-link>
        
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useProductoStore } from '@/stores/useProductoStore';

const route = useRoute();
const router = useRouter(); 
const productoStore = useProductoStore();

// --- ¡CAMBIO CLAVE AQUÍ! ---
// El estado inicial ya no incluye la 'image'.
const productoData = ref({ name: '', price: 0 });

const isEditing = computed(() => route.params.id != null);
const productoId = ref(null);

onMounted(() => {
  // Esta lógica se mantiene igual
  if (isEditing.value) {
    productoId.value = Number(route.params.id);
    const productoExistente = productoStore.obtenerProductoPorId(productoId.value);
    
    if (productoExistente) {
      // Al editar, 'productoData' se puebla con el objeto completo,
      // incluyendo la propiedad 'image' que ya existía.
      productoData.value = { ...productoExistente };
    }
  }
});

const guardarProducto = () => {
  // Esta lógica se mantiene igual
  if (isEditing.value) {
    // 'productoData.value' SÍ tiene la imagen (gracias a onMounted)
    productoStore.actualizarProducto(productoId.value, productoData.value);
  } else {
    // 'productoData.value' NO tiene imagen. 
    // El Store se encargará de poner el 'placeholder.jpg'
    productoStore.crearProducto(productoData.value);
  }
  router.push('/productos');
};
</script>

<style scoped>
/* Tu estilo se mantiene intacto */
.titulo {
  text-align: center;
  margin-bottom: 20px;
  color: var(--primary-color, #9f3ffc); /* Morado */
}
</style>