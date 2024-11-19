<template>
    <div class="user-main">
      <header>
        <h1>Welcome to the User Dashboard</h1>
        <nav>
          <ul>
            <li><router-link to="/user/dashboard">Dashboard</router-link></li>
            <li><router-link to="/user/profile">Profile</router-link></li>
            <li><router-link to="/user/orders">Orders</router-link></li>
          </ul>
        </nav>
      </header>
      
      <!-- Nested Views: This is where the nested routes will be displayed -->
      <router-view></router-view>
  
      <footer>
        <p>&copy; 2024 GABAY. All rights reserved.</p>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    name: "UserMain",
  };
  </script>
  
  <style scoped>
  .user-main {
    padding: 2rem;
  }
  
  header {
    background-color: #4b8a3d;
    color: white;
    padding: 1rem;
    border-radius: 8px;
    margin-bottom: 2rem;
  }
  
  header h1 {
    font-size: 2rem;
  }
  
  nav ul {
    list-style: none;
    padding: 0;
  }
  
  nav ul li {
    display: inline;
    margin-right: 20px;
  }
  
  nav ul li a {
    color: white;
    text-decoration: none;
    font-size: 1.1rem;
  }
  
  nav ul li a:hover {
    text-decoration: underline;
  }
  
  footer {
    background-color: #f4f3e5;
    padding: 1rem;
    text-align: center;
    margin-top: 2rem;
    border-radius: 8px;
  }
  </style>
  