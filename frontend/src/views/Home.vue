<template>
    <div class="home-container" style="background-color: #f4f2e6; text-align: center; padding: 50px 20px;">
      <h1 class="farm-title" style="font-family: 'Georgia', serif; font-size: 3.5rem; color: #3b6e3a; margin-bottom: 20px; animation: fadeIn 2s ease;">
        Welcome to GABAY
      </h1>
      <p class="farm-desc" style="font-size: 1.2rem; color: #6c4f37; margin-bottom: 40px; animation: fadeIn 2s ease;">
        Empowering farmers with technology for a sustainable future.
      </p>
      <div class="btn-container" style="display: flex; justify-content: center; gap: 20px;">
        <router-link to="/login">
          <button class="btn btn-farm" style="background-color: #5a8320; color: white; border: none; padding: 15px 30px; font-size: 1.1rem; border-radius: 8px; transition: background-color 0.3s ease;">
            Login
          </button>
        </router-link>
        <router-link to="/signup">
          <button class="btn btn-farm" style="background-color: #e2a800; color: white; border: none; padding: 15px 30px; font-size: 1.1rem; border-radius: 8px; transition: background-color 0.3s ease;">
            Sign Up
          </button>
        </router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Home',
  };
  </script>
  
  <style scoped>
  @keyframes fadeIn {
    0% { opacity: 0; transform: translateY(-50px); }
    100% { opacity: 1; transform: translateY(0); }
  }
  
  .farm-title {
    animation: fadeIn 2s ease;
  }
  
  .farm-desc {
    animation: fadeIn 2s ease;
  }
  
  .btn-farm:hover {
    background-color: #4a6c17;
  }
  </style>
  