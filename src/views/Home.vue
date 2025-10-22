<template>
  <div class="p-5 mb-4 rounded-3 jumbotron-dark">
    <div class="container-fluid py-5">
      <h1 class="display-5 fw-bold">Bienvenido a Lunarium World 🎮</h1>
      <p class="col-md-8 fs-4">
        Tienda de Videojuegos, Accesorios y más. Aquí encontrarás todo lo que
        necesitas para tu experiencia gamer.
      </p>
      
      <router-link to="/productos" class="btn btn-primary btn-lg">
        Ver Catálogo
      </router-link>
    </div>
  </div>
</template>

<script setup>
// No se necesita script
</script>

<style scoped>
/* Aquí definimos el estilo para el 'jumbotron' oscuro,
  usando las variables CSS que creaste en theme.css
*/
.jumbotron-dark {
  background-color: var(--surface-color, #1a1a2e);
  border: 1px solid var(--primary-color, #9f3ffc);
  color: var(--text-color, #e0e0e0);
}

/* Hacemos el título cian, como en tu captura
  y tu variable --accent-color 
*/
.jumbotron-dark h1 {
  color: var(--accent-color, #00d9ff);
}
</style>