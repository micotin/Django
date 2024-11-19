<template>
    <div class="p-6 bg-green-50">
      <h1 class="text-3xl font-bold text-green-800 mb-6">GABAY Settings</h1>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <div class="bg-green-600 text-white px-6 py-4">
            <h2 class="text-xl font-semibold">System Settings</h2>
          </div>
          <form @submit.prevent="saveSystemSettings" class="p-6">
            <div class="mb-4">
              <label for="predictionInterval" class="block text-sm font-medium text-gray-700 mb-1">Prediction Interval (days)</label>
              <input type="number" id="predictionInterval" v-model="settings.predictionInterval" class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500">
            </div>
            <div class="mb-4">
              <label for="dataRetentionPeriod" class="block text-sm font-medium text-gray-700 mb-1">Data Retention Period (months)</label>
              <input type="number" id="dataRetentionPeriod" v-model="settings.dataRetentionPeriod" class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500">
            </div>
            <div class="mb-4">
              <label class="flex items-center">
                <input type="checkbox" v-model="settings.enableNotifications" class="rounded border-gray-300 text-green-600 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50">
                <span class="ml-2 text-sm text-gray-700">Enable Email Notifications</span>
              </label>
            </div>
            <button type="submit" class="w-full bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
              Save System Settings
            </button>
          </form>
        </div>
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <div class="bg-yellow-500 text-white px-6 py-4">
            <h2 class="text-xl font-semibold">API Configuration</h2>
          </div>
          <form @submit.prevent="saveApiSettings" class="p-6">
            <div class="mb-4">
              <label for="apiKey" class="block text-sm font-medium text-gray-700 mb-1">API Key</label>
              <input type="text" id="apiKey" v-model="settings.apiKey" readonly class="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500">
            </div>
            <div class="mb-4">
              <label for="webhookUrl" class="block text-sm font-medium text-gray-700 mb-1">Webhook URL</label>
              <input type="url" id="webhookUrl" v-model="settings.webhookUrl" class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500">
            </div>
            <div class="flex space-x-4">
              <button type="button" @click="regenerateApiKey" class="flex-1 bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2">
                Regenerate API Key
              </button>
              <button type="submit" class="flex-1 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                Save API Settings
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const settings = ref({
    predictionInterval: 7,
    dataRetentionPeriod: 12,
    enableNotifications: true,
    apiKey: "your-api-key-here",
    webhookUrl: "https://example.com/webhook"
  })
  
  const saveSystemSettings = () => {
    console.log("Saving system settings:", settings.value)
    // Implement the logic to save system settings
  }
  
  const saveApiSettings = () => {
    console.log("Saving API settings:", settings.value)
    // Implement the logic to save API settings
  }
  
  const regenerateApiKey = () => {
    console.log("Regenerating API key")
    // Implement the logic to regenerate the API key
    settings.value.apiKey = "new-api-key-" + Math.random().toString(36).substring(7)
  }
  </script>