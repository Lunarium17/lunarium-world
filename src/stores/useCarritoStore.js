// src/stores/useCarritoStore.js

import { defineStore } from 'pinia';

export const useCarritoStore = defineStore('carrito', {
  state: () => ({
    carrito: [], // Arreglo de productos en el carrito
  }),

  actions: {
    agregarAlCarrito(producto) {
      // Opcional: verificar si ya existe para aumentar cantidad
      this.carrito.push(producto);
    },

    eliminarDelCarrito(id) {
      this.carrito = this.carrito.filter(p => p.id !== id);
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