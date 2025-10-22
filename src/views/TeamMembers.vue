<template>
  <div>
    <h1 class="titulo-equipo">Integrantes del Equipo</h1>

    <ul class="lista-equipo">
      <li>Victor Armando Gámez Vázquez - 23270666</li>
      <li>Alejandro Salazar Morales - 23270688</li>
      <li>Alejandra Lizeth Ruíz Juárez - 23270669</li>
      <li>Miguel Alvarado Gamboa - 23270673</li>
    </ul>
  </div>
</template>

<script setup>
// No se necesita lógica de script
</script>

<style scoped>
/* Aseguramos que el título y la lista se vean bien
  con tu tema oscuro.
*/
.titulo-equipo {
  color: var(--primary-color, #9f3ffc); /* Morado */
  text-align: center;
  margin-bottom: 30px;
}

.lista-equipo {
  list-style-type: none; /* Quita las viñetas */
  padding-left: 0;
  text-align: center;
}

.lista-equipo li {
  color: var(--text-color, #e0e0e0); /* Texto claro */
  font-size: 1.25rem; /* fs-4 */
  margin-bottom: 10px;
}
</style>