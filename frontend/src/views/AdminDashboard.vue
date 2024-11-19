<template>
    <div class="bg-gray-50 p-6">
      <h1 class="text-3xl font-bold text-gray-800 mb-6">GABAY Dashboard</h1>
      
      <!-- Stats Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div v-for="(stat, index) in stats" :key="index" 
             class="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg hover:scale-105">
          <div class="flex items-center justify-between mb-4">
            <h2 class="text-lg font-semibold" :class="stat.textColor">{{ stat.title }}</h2>
            <component :is="stat.icon" class="h-6 w-6" :class="stat.iconColor" />
          </div>
          <p class="text-3xl font-bold mb-2">{{ stat.value }}</p>
          <p class="text-sm flex items-center">
            <component :is="stat.trend > 0 ? ArrowUpIcon : ArrowDownIcon" 
                       class="w-4 h-4 mr-1"
                       :class="stat.trend > 0 ? 'text-green-500' : 'text-red-500'" />
            <span :class="stat.trend > 0 ? 'text-green-600' : 'text-red-600'">
              {{ Math.abs(stat.trend) }}% from last month
            </span>
          </p>
        </div>
      </div>
    
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <!-- Top Selling Products -->
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <div class="bg-green-600 text-white px-6 py-4 flex justify-between items-center">
            <h2 class="text-xl font-semibold">Top Selling Products</h2>
            <button class="text-sm bg-white text-green-600 px-3 py-1 rounded-full hover:bg-green-50 transition-colors">
              View All
            </button>
          </div>
          <ul class="divide-y divide-gray-200">
            <li v-for="product in topProducts" :key="product.name" 
                class="flex justify-between items-center px-6 py-4 hover:bg-gray-50 transition-colors">
              <div class="flex items-center">
                <div class="w-10 h-10 rounded-full bg-gray-200 mr-3 flex items-center justify-center">
                  <ShoppingBagIcon class="h-6 w-6 text-gray-500" />
                </div>
                <span class="text-gray-800 font-medium">{{ product.name }}</span>
              </div>
              <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                {{ product.sold }} sold
              </span>
            </li>
          </ul>
        </div>
    
        <!-- Upcoming Predictions -->
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <div class="bg-yellow-500 text-white px-6 py-4 flex justify-between items-center">
            <h2 class="text-xl font-semibold">Upcoming Predictions</h2>
            <button class="text-sm bg-white text-yellow-600 px-3 py-1 rounded-full hover:bg-yellow-50 transition-colors">
              View All
            </button>
          </div>
          <ul class="divide-y divide-gray-200">
            <li v-for="prediction in upcomingPredictions" :key="prediction.name" 
                class="flex justify-between items-center px-6 py-4 hover:bg-gray-50 transition-colors">
              <div class="flex items-center">
                <div class="w-10 h-10 rounded-full bg-yellow-100 mr-3 flex items-center justify-center">
                  <ChartBarIcon class="h-6 w-6 text-yellow-500" />
                </div>
                <span class="text-gray-800 font-medium">{{ prediction.name }}</span>
              </div>
              <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                {{ prediction.time }}
              </span>
            </li>
          </ul>
        </div>
      </div>
  
      <!-- Recent Activities -->
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <div class="bg-green-600 text-white px-6 py-4 flex justify-between items-center">
          <h2 class="text-xl font-semibold">Recent Activities</h2>
          <button class="text-sm bg-white text-green-600 px-3 py-1 rounded-full hover:bg-green-50 transition-colors">
            View All
          </button>
        </div>
        <ul class="divide-y divide-gray-200">
          <li v-for="(activity, index) in recentActivities" :key="index" 
              class="px-6 py-4 hover:bg-gray-50 transition-colors">
            <div class="flex items-center">
              <div class="w-10 h-10 rounded-full bg-gray-100 mr-3 flex items-center justify-center">
                <component :is="activity.icon" class="h-5 w-5 text-gray-500" />
              </div>
              <div>
                <p class="text-sm font-medium text-gray-800">{{ activity.description }}</p>
                <p class="text-xs text-gray-500">{{ activity.time }}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { 
    ArrowUpIcon, 
    ArrowDownIcon, 
    ShoppingBagIcon,
    ChartBarIcon, 
    UserIcon,
    DollarSignIcon,
    PackageIcon,
    UsersIcon,
    PercentIcon
  } from 'lucide-vue-next'
  
  const stats = ref([
    { 
      title: 'Total Sales', 
      value: '$24,500', 
      trend: 15, 
      textColor: 'text-green-600',
      iconColor: 'text-green-500',
      icon: DollarSignIcon
    },
    { 
      title: 'Products Sold', 
      value: '1,234', 
      trend: 8, 
      textColor: 'text-yellow-600',
      iconColor: 'text-yellow-500',
      icon: PackageIcon
    },
    { 
      title: 'New Customers', 
      value: '78', 
      trend: 12, 
      textColor: 'text-blue-600',
      iconColor: 'text-blue-500',
      icon: UsersIcon
    },
    { 
      title: 'Prediction Accuracy', 
      value: '92%', 
      trend: 3, 
      textColor: 'text-purple-600',
      iconColor: 'text-purple-500',
      icon: PercentIcon
    },
  ])
  
  const topProducts = ref([
    { name: 'Organic Apples', sold: 234 },
    { name: 'Free-range Eggs', sold: 189 },
    { name: 'Grass-fed Beef', sold: 145 },
    { name: 'Organic Spinach', sold: 132 },
    { name: 'Artisanal Cheese', sold: 118 },
  ])
  
  const upcomingPredictions = ref([
    { name: 'Tomato Harvest Yield', time: 'In 2 days' },
    { name: 'Dairy Product Demand', time: 'In 5 days' },
    { name: 'Seasonal Fruit Sales', time: 'In 1 week' },
    { name: 'Organic Vegetable Trends', time: 'In 10 days' },
    { name: 'Poultry Market Forecast', time: 'In 2 weeks' },
  ])
  
  const recentActivities = ref([
    { icon: ShoppingBagIcon, description: 'New order #1234 received', time: '5 minutes ago' },
    { icon: ChartBarIcon, description: 'Sales prediction for Q3 completed', time: '2 hours ago' },
    { icon: UserIcon, description: 'New customer John Doe registered', time: '1 day ago' },
    { icon: PackageIcon, description: 'Inventory update: 500 units added', time: '2 days ago' },
    { icon: DollarSignIcon, description: 'Monthly sales report generated', time: '3 days ago' },
  ])
  </script>