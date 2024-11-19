<template>
    <div class="p-6 bg-green-50">
      <h1 class="text-3xl font-bold text-green-800 mb-6">Product Recommendation</h1>
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div class="lg:col-span-2">
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <div class="bg-green-600 text-white px-6 py-4">
              <h2 class="text-xl font-semibold">Top Recommended Products</h2>
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
                  <tr v-for="product in recommendedProducts" :key="product.id">
                    <td class="px-6 py-4 whitespace-nowrap">{{ product.name }}</td>
                    <td class="px-6 py-4 whitespace-nowrap">{{ product.category }}</td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="w-full bg-gray-200 rounded-full h-2.5">
                        <div class="bg-green-600 h-2.5 rounded-full" :style="{ width: `${product.score}%` }"></div>
                      </div>
                      <span class="text-xs font-medium text-gray-500 mt-1 block">{{ product.score }}%</span>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">{{ product.stock }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div>
          <div class="bg-white rounded-lg shadow-md overflow-hidden mb-6">
            <div class="bg-yellow-500 text-white px-6 py-4">
              <h2 class="text-xl font-semibold">Recommendation Factors</h2>
            </div>
            <ul class="divide-y divide-gray-200">
              <li v-for="(factor, index) in recommendationFactors" :key="index" class="px-6 py-4 text-sm text-gray-700">
                {{ factor }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="mt-6">
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <div class="bg-blue-500 text-white px-6 py-4">
            <h2 class="text-xl font-semibold">Customer Segments</h2>
          </div>
          <div class="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="segment in customerSegments" :key="segment.id" class="bg-gray-50 rounded-lg p-4 shadow">
              <h3 class="text-lg font-semibold mb-2">{{ segment.name }}</h3>
              <p class="text-sm text-gray-600 mb-2">{{ segment.description }}</p>
              <p class="text-sm font-medium">Top product: <span class="text-green-600">{{ segment.topProduct }}</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const tableHeaders = ['Product', 'Category', 'Recommendation Score', 'Current Stock']
  
  const recommendedProducts = ref([
    { id: 1, name: "Organic Apples", category: "Fruits", score: 95, stock: 500 },
    { id: 2, name: "Free-range Eggs", category: "Dairy", score: 88, stock: 1000 },
    { id: 3, name: "Grass-fed Beef", category: "Meat", score: 82, stock: 200 },
    { id: 4, name: "Organic Kale", category: "Vegetables", score: 78, stock: 300 },
    { id: 5, name: "Artisanal Cheese", category: "Dairy", score: 75, stock: 150 },
  ])
  
  const recommendationFactors = [
    "Customer purchase history",
    "Seasonal trends",
    "Product popularity",
    "Cross-selling opportunities",
    "Stock availability",
  ]
  
  const customerSegments = ref([
    { id: 1, name: "Health Enthusiasts", description: "Focused on organic and nutritious products", topProduct: "Organic Kale" },
    { id: 2, name: "Gourmet Cooks", description: "Interested in high-quality, artisanal products", topProduct: "Artisanal Cheese" },
    { id: 3, name: "Eco-conscious Shoppers", description: "Prioritize sustainable and environmentally friendly products", topProduct: "Free-range Eggs" },
  ])
  </script>