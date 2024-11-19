<template>
    <div class="p-6 bg-green-50">
      <h1 class="text-3xl font-bold text-green-800 mb-6">Sales Analytics</h1>
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div class="lg:col-span-2">
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <div class="bg-green-600 text-white px-6 py-4">
              <h2 class="text-xl font-semibold">Sales Trend</h2>
            </div>
            <div class="p-6">
              <div class="w-full h-64 bg-gray-100 rounded-lg flex items-center justify-center text-gray-500">
                Sales Trend Chart Placeholder
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <div class="bg-yellow-500 text-white px-6 py-4">
              <h2 class="text-xl font-semibold">Key Metrics</h2>
            </div>
            <ul class="divide-y divide-gray-200">
              <li v-for="metric in keyMetrics" :key="metric.name" class="px-6 py-4 flex justify-between items-center">
                <span class="text-sm font-medium text-gray-700">{{ metric.name }}</span>
                <span :class="['px-2 py-1 rounded-full text-xs font-medium', metric.color]">
                  {{ metric.value }}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <div class="bg-blue-500 text-white px-6 py-4">
            <h2 class="text-xl font-semibold">Top Selling Categories</h2>
          </div>
          <div class="p-6">
            <div class="w-full h-64 bg-gray-100 rounded-lg flex items-center justify-center text-gray-500">
              Top Selling Categories Pie Chart Placeholder
            </div>
          </div>
        </div>
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <div class="bg-purple-500 text-white px-6 py-4">
            <h2 class="text-xl font-semibold">Sales by Region</h2>
          </div>
          <div class="p-6">
            <div class="w-full h-64 bg-gray-100 rounded-lg flex items-center justify-center text-gray-500">
              Sales by Region Map Chart Placeholder
            </div>
          </div>
        </div>
      </div>
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <div class="bg-green-600 text-white px-6 py-4">
          <h2 class="text-xl font-semibold">Recent Transactions</h2>
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
              <tr v-for="order in recentOrders" :key="order.id">
                <td class="px-6 py-4 whitespace-nowrap">{{ order.id }}</td>
                <td class="px-6 py-4 whitespace-nowrap">{{ order.customer }}</td>
                <td class="px-6 py-4 whitespace-nowrap">{{ order.products }}</td>
                <td class="px-6 py-4 whitespace-nowrap">${{ order.total.toFixed(2) }}</td>
                <td class="px-6 py-4 whitespace-nowrap">{{ order.date }}</td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span :class="['px-2 py-1 rounded-full text-xs font-medium', order.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800']">
                    {{ order.status }}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const keyMetrics = [
    { name: 'Total Revenue', value: '$124,500', color: 'bg-green-100 text-green-800' },
    { name: 'Average Order Value', value: '$85', color: 'bg-blue-100 text-blue-800' },
    { name: 'Conversion Rate', value: '3.2%', color: 'bg-indigo-100 text-indigo-800' },
  ]
  
  const tableHeaders = ['Order ID', 'Customer', 'Products', 'Total', 'Date', 'Status']
  
  const recentOrders = ref([
    { id: "ORD001", customer: "John Doe", products: "Organic Apples, Free-range Eggs", total: 45.50, date: "2023-05-01", status: "Completed" },
    { id: "ORD002", customer: "Jane Smith", products: "Grass-fed Beef, Artisanal Cheese", total: 78.25, date: "2023-05-02", status: "Processing" },
    { id: "ORD003", customer: "Bob Johnson", products: "Organic Kale, Free-range Chicken", total: 62.75, date: "2023-05-03", status: "Completed" },
  ])
  </script>