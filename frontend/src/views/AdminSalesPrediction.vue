<template>
    <div class="bg-gray-50 p-6">
      <h1 class="text-3xl font-bold text-gray-800 mb-6">Sales Prediction</h1>
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div class="lg:col-span-2">
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <div class="bg-green-600 text-white px-6 py-4 flex justify-between items-center">
              <h2 class="text-xl font-semibold">Sales Forecast Chart</h2>
              <div class="flex space-x-2">
                <button 
                  v-for="period in ['1W', '1M', '3M', '1Y']" 
                  :key="period"
                  @click="changePeriod(period)"
                  :class="[
                    'px-3 py-1 rounded-full text-sm font-medium transition-colors',
                    selectedPeriod === period ? 'bg-white text-green-600' : 'text-green-200 hover:bg-green-500'
                  ]"
                >
                  {{ period }}
                </button>
              </div>
            </div>
            <div class="p-6">
              <div class="w-full h-64 bg-gray-100 rounded-lg flex items-center justify-center text-gray-500">
                <!-- Replace this with an actual chart component -->
                Sales Forecast Chart Placeholder
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <div class="bg-yellow-500 text-white px-6 py-4">
              <h2 class="text-xl font-semibold">Prediction Metrics</h2>
            </div>
            <ul class="divide-y divide-gray-200">
              <li v-for="metric in predictionMetrics" :key="metric.name" class="px-6 py-4 flex justify-between items-center">
                <span class="text-sm font-medium text-gray-700">{{ metric.name }}</span>
                <span :class="['px-2 py-1 rounded-full text-xs font-medium', metric.color]">
                  {{ metric.value }}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <div class="bg-blue-500 text-white px-6 py-4">
            <h2 class="text-xl font-semibold">Prediction Factors</h2>
          </div>
          <ul class="divide-y divide-gray-200">
            <li v-for="(factor, index) in predictionFactors" :key="index" class="px-6 py-4 flex items-center text-sm text-gray-700">
              <ChartBarIcon class="h-5 w-5 mr-3 text-blue-500" />
              {{ factor }}
            </li>
          </ul>
        </div>
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <div class="bg-purple-500 text-white px-6 py-4">
            <h2 class="text-xl font-semibold">Recommended Actions</h2>
          </div>
          <ul class="divide-y divide-gray-200">
            <li v-for="(action, index) in recommendedActions" :key="index" class="px-6 py-4 flex items-center text-sm text-gray-700">
              <LightbulbIcon class="h-5 w-5 mr-3 text-purple-500" />
              {{ action }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { ChartBarIcon, LightbulbIcon } from 'lucide-vue-next'
  
  const selectedPeriod = ref('1M')
  
  const changePeriod = (period) => {
    selectedPeriod.value = period
    // Here you would typically fetch new data or update the chart based on the selected period
  }
  
  const predictionMetrics = ref([
    { name: 'Accuracy', value: '92%', color: 'bg-green-100 text-green-800' },
    { name: 'Mean Absolute Error', value: '0.08', color: 'bg-blue-100 text-blue-800' },
    { name: 'R-squared', value: '0.89', color: 'bg-indigo-100 text-indigo-800' },
    { name: 'Forecast Horizon', value: '3 months', color: 'bg-yellow-100 text-yellow-800' },
  ])
  
  const predictionFactors = ref([
    "Seasonal trends in agricultural products",
    "Weather patterns and their impact on crop yields",
    "Market demand for organic vs. conventional produce",
    "Economic indicators affecting consumer spending",
    "Historical sales data and growth patterns",
  ])
  
  const recommendedActions = ref([
    "Increase inventory of top-selling seasonal products",
    "Implement targeted marketing for organic produce",
    "Optimize pricing strategy based on demand forecasts",
    "Prepare for potential supply chain disruptions",
    "Explore new product lines in high-growth categories",
  ])
  </script>