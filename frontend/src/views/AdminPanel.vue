<template>
    <div class="min-h-screen bg-gray-100 flex">
      <!-- Sidebar -->
      <aside class="w-64 bg-white border-r border-gray-200 flex flex-col h-screen sticky top-0">
        <div class="p-6 flex-shrink-0">
          <div class="flex items-center gap-3 mb-8">
            <div class="h-10 w-10 bg-green-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
              G
            </div>
            <h1 class="text-xl font-bold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
              GABAY Farm
            </h1>
          </div>
  
          <!-- Navigation -->
          <nav class="space-y-1">
            <router-link
              v-for="(item, index) in navItems"
              :key="index"
              :to="item.route"
              class="flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-colors"
              :class="[
                item.active
                  ? 'bg-green-50 text-green-700'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-green-600',
              ]"
            >
              <component :is="item.icon" class="h-5 w-5" />
              {{ item.name }}
            </router-link>
          </nav>
        </div>
  
        <!-- Sidebar Footer -->
        <div class="mt-auto p-6 border-t border-gray-200 flex-shrink-0">
          <div class="flex items-center gap-3">
            <div class="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-semibold text-sm">
              AU
            </div>
            <div>
              <p class="text-sm font-medium text-gray-700">Admin User</p>
              <p class="text-xs text-gray-500">admin@gabay.com</p>
            </div>
          </div>
          <button
            @click="logout"
            class="mt-4 w-full flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-red-600 bg-red-50 rounded-lg hover:bg-red-100 transition-colors"
          >
            <LogOutIcon class="h-4 w-4" />
            Logout
          </button>
        </div>
      </aside>
  
      <!-- Main Content Area -->
      <div class="flex-1 flex flex-col">
        <!-- Header -->
        <header class="bg-white border-b border-gray-200 sticky top-0 z-10">
          <div class="flex items-center justify-between px-6 py-4">
            <!-- Search Bar -->
            <div class="max-w-xl w-full">
              <div class="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  class="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:border-green-500 focus:ring-1 focus:ring-green-500 focus:outline-none text-sm"
                />
                <SearchIcon class="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              </div>
            </div>
  
            <!-- Right Navigation -->
            <div class="flex items-center gap-4">
              <!-- Notifications -->
              <div class="relative">
                <button
                  @click="toggleNotifications"
                  class="p-2 rounded-full hover:bg-gray-100 text-gray-600 hover:text-green-600 transition-colors relative"
                  aria-label="Notifications"
                >
                  <BellIcon class="h-6 w-6" />
                  <span
                    class="absolute -top-0.5 -right-0.5 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center"
                  >
                    3
                  </span>
                </button>
                <div
                  v-if="showNotifications"
                  class="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg py-2 border border-gray-200"
                >
                  <div class="px-4 py-2 border-b border-gray-200">
                    <h3 class="font-semibold text-gray-900">Notifications</h3>
                  </div>
                  <a
                    v-for="(notification, index) in notifications"
                    :key="index"
                    href="#"
                    class="block px-4 py-3 hover:bg-gray-50 transition-colors"
                  >
                    <p class="text-sm text-gray-600">{{ notification }}</p>
                  </a>
                </div>
              </div>
  
              <!-- Quick Actions -->
              <div class="relative">
                <button
                  @click="toggleQuickActions"
                  class="p-2 rounded-full hover:bg-gray-100 text-gray-600 hover:text-green-600 transition-colors"
                  aria-label="Quick Actions"
                >
                  <PlusIcon class="h-6 w-6" />
                </button>
                <div
                  v-if="showQuickActions"
                  class="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 border border-gray-200"
                >
                  <a
                    v-for="(action, index) in quickActions"
                    :key="index"
                    href="#"
                    class="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-green-600 transition-colors"
                  >
                    <component :is="action.icon" class="h-4 w-4" />
                    {{ action.name }}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>
  
        <!-- Main Content -->
        <main class="flex-1 p-6 overflow-auto bg-gray-50">
          <div class="max-w-7xl mx-auto">
            <router-view></router-view>
          </div>
        </main>
  
        <!-- Footer -->
        <footer class="bg-white border-t border-gray-200 py-4 px-6">
          <div class="text-center text-sm text-gray-500">
            <p>&copy; 2023 GABAY Farm Admin. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import {
    HomeIcon,
    ChartBarIcon,
    ShoppingCartIcon,
    UsersIcon,
    ArchiveIcon,
    CogIcon,
    BellIcon,
    UserIcon,
    LogOutIcon,
    SearchIcon,
    PlusIcon,
    FileTextIcon,
    TruckIcon,
  } from 'lucide-vue-next'
  
  const showNotifications = ref(false)
  const showQuickActions = ref(false)
  
  const notifications = [
    'New order #1234 received',
    'Low stock alert: Organic Apples (10 units left)',
    'Sales target for Q2 achieved',
  ]
  
  const quickActions = [
    { name: 'New Order', icon: FileTextIcon },
    { name: 'Add Product', icon: ShoppingCartIcon },
    { name: 'Schedule Delivery', icon: TruckIcon },
  ]
  
  const navItems = [
    { name: 'Dashboard', icon: HomeIcon, route: '/admin/dashboard', active: true },
    { name: 'Sales Prediction', icon: ChartBarIcon, route: '/admin/sales-prediction' },
    { name: 'Product Recommendation', icon: ShoppingCartIcon, route: '/admin/product-recommendation' },
    { name: 'Sales Analytics', icon: ChartBarIcon, route: '/admin/sales-analytics' },
    { name: 'Manage Users', icon: UsersIcon, route: '/admin/manage-users' },
    { name: 'Inventory', icon: ArchiveIcon, route: '/admin/inventory' },
    { name: 'Settings', icon: CogIcon, route: '/admin/settings' },
  ]
  
  const toggleNotifications = () => {
    showNotifications.value = !showNotifications.value
    showQuickActions.value = false
  }
  
  const toggleQuickActions = () => {
    showQuickActions.value = !showQuickActions.value
    showNotifications.value = false
  }
  
  const logout = () => {
    // Implement logout functionality
    console.log('Logging out...')
  }
  </script>