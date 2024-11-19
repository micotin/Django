<template>
    <div class="p-6 bg-green-50">
      <h1 class="text-3xl font-bold text-green-800 mb-6">Manage Users</h1>
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <div class="bg-green-600 text-white px-6 py-4 flex justify-between items-center">
          <h2 class="text-xl font-semibold">User List</h2>
          <button @click="addUser" class="bg-white text-green-600 px-4 py-2 rounded-full text-sm font-semibold hover:bg-green-100 transition-colors duration-300">
            <UserPlusIcon class="inline w-4 h-4 mr-1" />
            Add New User
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
              <tr v-for="user in users" :key="user.id">
                <td class="px-6 py-4 whitespace-nowrap">{{ user.name }}</td>
                <td class="px-6 py-4 whitespace-nowrap">{{ user.email }}</td>
                <td class="px-6 py-4 whitespace-nowrap">{{ user.role }}</td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span :class="['px-2 py-1 rounded-full text-xs font-medium', user.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800']">
                    {{ user.status }}
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button @click="editUser(user.id)" class="text-indigo-600 hover:text-indigo-900 mr-2">
                    <PencilIcon class="inline w-4 h-4" />
                  </button>
                  <button @click="deleteUser(user.id)" class="text-red-600 hover:text-red-900">
                    <TrashIcon class="inline w-4 h-4" />
                  </button>
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
  import { UserPlusIcon, PencilIcon, TrashIcon } from 'lucide-vue-next'
  
  const tableHeaders = ['Name', 'Email', 'Role', 'Status', 'Actions']
  
  const users = ref([
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin", status: "Active" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Manager", status: "Active" },
    { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "User", status: "Inactive" },
  ])
  
  const addUser = () => {
    console.log("Add user clicked")
  }
  
  const editUser = (id) => {
    console.log("Edit user clicked for id:", id)
  }
  
  const deleteUser = (id) => {
    console.log("Delete user clicked for id:", id)
  }
  </script>