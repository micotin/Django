<template>
    <div class="p-6 bg-green-50">
      <h1 class="text-3xl font-bold text-green-800 mb-6">Inventory Management</h1>
      <div class="bg-white rounded-lg shadow-md overflow-hidden mb-6">
        <div class="bg-green-600 text-white px-6 py-4 flex justify-between items-center">
          <h2 class="text-xl font-semibold">Product Inventory</h2>
          <button @click="addProduct" class="bg-white text-green-600 px-4 py-2 rounded-full text-sm font-semibold hover:bg-green-100 transition-colors duration-300">
            <PlusIcon class="inline w-4 h-4 mr-1" />
            Add New Product
          </button>
        </div>
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead class="bg-green-100">
              <tr>
                <th v-for="header in tableHeaders" :key="header" class="px-6 py-3 text-left text-xs font-medium text-green-700 uppercase tracking-wider">
                  {{ header }}
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="product in products" :key="product.id">
                <td class="px-6 py-4 whitespace-nowrap">{{ product.name }}</td>
                <td class="px-6 py-4 whitespace-nowrap">{{ product.category }}</td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span :class="['px-2 py-1 rounded-full text-xs font-medium', product.stock > 50 ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800']">
                    {{ product.stock }}
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">${{ product.price.toFixed(2) }}</td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span :class="['px-2 py-1 rounded-full text-xs font-medium', product.status === 'In Stock' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800']">
                    {{ product.status }}
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button @click="editProduct(product.id)" class="text-indigo-600 hover:text-indigo-900 mr-2">
                    <PencilIcon class="inline w-4 h-4" />
                  </button>
                  <button @click="deleteProduct(product.id)" class="text-red-600 hover:text-red-900">
                    <TrashIcon class="inline w-4 h-4" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
  
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <div class="bg-yellow-500 text-white px-6 py-4">
            <h2 class="text-xl font-semibold">Low Stock Alert</h2>
          </div>
          <ul class="divide-y divide-gray-200">
            <li v-for="product in lowStockProducts" :key="product.id" class="flex justify-between items-center px-6 py-4">
              <span>{{ product.name }}</span>
              <span class="bg-red-500 text-white px-2 py-1 rounded-full text-sm">
                {{ product.stock }} left
              </span>
            </li>
          </ul>
        </div>
  
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <div class="bg-blue-500 text-white px-6 py-4">
            <h2 class="text-xl font-semibold">Inventory Value</h2>
          </div>
          <div class="p-6 text-center">
            <h2 class="text-3xl font-bold mb-2">${{ totalInventoryValue.toFixed(2) }}</h2>
            <p class="text-gray-600">Total value of current inventory</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  import { PlusIcon, PencilIcon, TrashIcon } from 'lucide-vue-next'
  
  const tableHeaders = ['Product Name', 'Category', 'Stock', 'Unit Price', 'Status', 'Actions']
  
  const products = ref([
    { id: 1, name: "Organic Apples", category: "Fruits", stock: 500, price: 2.99, status: "In Stock" },
    { id: 2, name: "Free-range Eggs", category: "Dairy", stock: 1000, price: 4.50, status: "In Stock" },
    { id: 3, name: "Grass-fed Beef", category: "Meat", stock: 200, price: 12.99, status: "In Stock" },
    { id: 4, name: "Organic Kale", category: "Vegetables", stock: 300, price: 3.50, status: "In Stock" },
    { id: 5, name: "Artisanal Cheese", category: "Dairy", stock: 150, price: 8.99, status: "In Stock" },
    { id: 6, name: "Organic Tomatoes", category: "Vegetables", stock: 25, price: 2.75, status: "Low Stock" },
  ])
  
  const lowStockProducts = computed(() => products.value.filter(product => product.stock <= 50))
  
  const totalInventoryValue = computed(() => 
    products.value.reduce((total, product) => total + (product.stock * product.price), 0)
  )
  
  const addProduct = () => {
    console.log("Add product clicked")
  }
  
  const editProduct = (id) => {
    console.log("Edit product clicked for id:", id)
  }
  
  const deleteProduct = (id) => {
    console.log("Delete product clicked for id:", id)
  }
  </script>