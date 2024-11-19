<template>
    <div class="dashboard">
      <h2>Welcome, {{ user.firstName }}!</h2>
      <p>Here's an overview of your activities.</p>
      <div class="dashboard-cards">
        <div class="card" @mouseover="hover=true" @mouseleave="hover=false">
          <h3>Recent Orders</h3>
          <p>View your past orders and check their status.</p>
          <button @click="viewOrders">View Orders</button>
        </div>
        <div class="card" @mouseover="hover=true" @mouseleave="hover=false">
          <h3>Recommended Products</h3>
          <p>See products based on your past purchases.</p>
          <button @click="viewRecommendations">See Recommendations</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        user: {
          firstName: "John",
        },
        hover: false,
      };
    },
    methods: {
      viewOrders() {
        this.$router.push("/user/orders");
      },
      viewRecommendations() {
        // Define this method based on where you'd like to route or what you'd like to show
      },
    },
  };
  </script>
  
  <style scoped>
  .dashboard {
    max-width: 800px;
    margin: auto;
    padding: 2rem;
    background-color: #f9f7f1;
    text-align: center;
  }
  
  .dashboard h2 {
    color: #4b8a3d;
    margin-bottom: 1rem;
  }
  
  .dashboard p {
    color: #6b5733;
  }
  
  .dashboard-cards {
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin-top: 1.5rem;
  }
  
  .card {
    width: 200px;
    padding: 1rem;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
  }
  
  .card:hover {
    transform: translateY(-5px);
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.15);
  }
  
  .card h3 {
    color: #4b8a3d;
    margin-bottom: 0.5rem;
  }
  
  .card p {
    color: #6b5733;
  }
  
  .card button {
    background-color: #4CAF50;
    color: white;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 1rem;
  }
  
  .card button:hover {
    background-color: #45a049;
  }
  </style>
  