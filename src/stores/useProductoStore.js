// src/stores/useProductoStore.js

import { defineStore } from 'pinia';

// --- BASE DE DATOS DE PRODUCTOS (CATÁLOGO) ---
// (Asegúrate de poner las imágenes en la carpeta 'public/images/')
const initialProducts = [
  { id: 1, name: 'Elden Ring', price: 979.00, image: 'images/Elden ring.jpg'},
  { id: 2, name: 'Audífonos Blackshark V2', price: 1299.00, image: 'images/Audífonos Blackshark V2.jpg' },
  { id: 3, name: 'Xbox Control Elite Series 2', price: 2599.00, image: 'images/Xbox Control Elite Series 2.jpg' },
  { id: 4, name: 'Laptop Gaming TUF F15', price: 28599.00, image: 'images/Laptop Gaming TUF F15.jpg' },
  { id: 5, name: 'Helldivers 2', price: 699.00, image: 'images/Helldivers 2.jpg' },
  { id: 6, name: 'Mouse Logitech G502 Alambrico', price: 1599.00, image: 'images/Mouse Logitech G502 Alambrico.jpg' },
  { id: 7, name: 'Battlefield™ 6', price: 1299.00, image: 'images/Battlefield™ 6.jpg' },
  { id: 8, name: 'PEAK', price: 89.99, image: 'images/PEAK.jpg' }
];

export const useProductoStore = defineStore('producto', {
  state: () => ({
    productos: initialProducts,
    nextId: initialProducts.length + 1 // Para generar IDs nuevos
  }),

  actions: {
    crearProducto(producto) {
      // Asigna un nuevo ID
      const nuevoProducto = { ...producto, id: this.nextId++, image: producto.image || 'images/placeholder.png' };
      this.productos.push(nuevoProducto);
    },

    actualizarProducto(id, productoActualizado) {
      const index = this.productos.findIndex(p => p.id === id);
      if (index !== -1) {
        // Vue reaccionará a esta asignación
        this.productos[index] = { ...this.productos[index], ...productoActualizado };
      }
    },

    eliminarProducto(id) {
      this.productos = this.productos.filter(p => p.id !== id);
    }
  },

  getters: {
    obtenerProductoPorId: (state) => {
      return (id) => state.productos.find(p => p.id === id);
    }
  },

  persist: true,
});