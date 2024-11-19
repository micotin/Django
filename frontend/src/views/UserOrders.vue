<template>
    <div class="orders">
      <h2>Your Orders</h2>
      <p v-if="orders.length === 0">You have no orders yet.</p>
      <div v-else class="order-list">
        <div v-for="(order, index) in orders" :key="index" class="order-card">
          <div class="order-header">
            <h3>Order #{{ order.id }}</h3>
            <p>{{ formatDate(order.date) }}</p>
          </div>
          <div class="order-details">
            <p><strong>Product:</strong> {{ order.productName }}</p>
            <p><strong>Quantity:</strong> {{ order.quantity }}</p>
            <p><strong>Status:</strong> 
              <span :class="{'status-pending': order.status === 'Pending', 'status-shipped': order.status === 'Shipped', 'status-delivered': order.status === 'Delivered'}">
                {{ order.status }}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        orders: [
          // This is sample data. Replace with actual data from Firebase.
          {
            id: "12345",
            date: new Date(),
            productName: "Organic Carrots",
            quantity: 5,
            status: "Shipped",
          },
          {
            id: "67890",
            date: new Date(),
            productName: "Free-range Eggs",
            quantity: 12,
            status: "Pending",
          },
        ],
      };
    },
    methods: {
      // Replace this method with actual Firebase data fetching logic
      async fetchOrders() {
        // Example of where you would fetch orders from Firebase and assign to `this.orders`
        // const fetchedOrders = await someFirebaseFunction();
        // this.orders = fetchedOrders;
      },
      formatDate(date) {
        return new Intl.DateTimeFormat("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }).format(date);
      },
    },
    mounted() {
      this.fetchOrders(); // Fetch orders when component is mounted
    },
  };
  </script>
  
  <style scoped>
  .orders {
    max-width: 800px;
    margin: auto;
    padding: 2rem;
    background-color: #f9f7f1; /* Soft farm-themed background */
    border-radius: 10px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
  
  .orders h2 {
    color: #4b8a3d;
    margin-bottom: 1.5rem;
  }
  
  .order-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  
  .order-card {
    padding: 1rem;
    background-color: #ffffff;
    border-left: 5px solid #4b8a3d;
    border-radius: 8px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease;
  }
  
  .order-card:hover {
    transform: translateY(-3px);
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.15);
  }
  
  .order-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
  }
  
  .order-header h3 {
    color: #6b5733;
    margin: 0;
  }
  
  .order-header p {
    color: #9e8f77;
    font-size: 0.9rem;
  }
  
  .order-details p {
    color: #6b5733;
    margin: 0.3rem 0;
  }
  
  .status-pending {
    color: #d88b27; /* Orange for pending */
  }
  
  .status-shipped {
    color: #4b8a3d; /* Green for shipped */
  }
  
  .status-delivered {
    color: #3a7a3d; /* Dark green for delivered */
  }
  </style>
  