// src/stores/useCarritoStore.js

import { defineStore } from 'pinia';

export const useCarritoStore = defineStore('carrito', {
  state: () => ({
    carrito: [],
  }),

  actions: {
    agregarAlCarrito(producto) {
      // Esta acción sigue igual, apila productos duplicados
      this.carrito.push(producto);
    },

    // --- ¡ACCIÓN MODIFICADA! ---
    // Ahora recibe el índice del elemento a borrar
    eliminarDelCarrito(itemIndex) {
      this.carrito.splice(itemIndex, 1);
    },

    vaciarCarrito() {
      this.carrito = [];
    }
  },

  getters: {
    totalArticulos: (state) => {
      return state.carrito.length;
    },
    totalPrecio: (state) => {
      return state.carrito.reduce((total, producto) => total + producto.price, 0);
    }
  }
});