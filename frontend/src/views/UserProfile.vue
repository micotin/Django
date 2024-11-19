<template>
    <div class="profile">
      <h2>User Profile</h2>
      <div class="profile-info">
        <img :src="userPhoto" alt="User Photo" class="profile-photo" />
        <div class="profile-details">
          <p><strong>Username:</strong> {{ user.username }}</p>
          <p><strong>First Name:</strong> {{ user.firstName }}</p>
          <p><strong>Last Name:</strong> {{ user.lastName }}</p>
          <p><strong>Email:</strong> {{ user.email }}</p>
          <p><strong>Role:</strong> {{ user.role }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        user: {
          username: "FarmUser123",
          firstName: "John",
          lastName: "Doe",
          email: "johndoe@example.com",
          role: "User",
        },
        userPhoto: "https://via.placeholder.com/150", // Placeholder image
      };
    },
    methods: {
      // You can add methods to fetch actual user data from Firebase if needed.
    },
  };
  </script>
  
  <style scoped>
  .profile {
    max-width: 500px;
    margin: auto;
    padding: 2rem;
    background-color: #f4f3e5; /* Soft cream background */
    border-radius: 10px;
    text-align: center;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .profile h2 {
    color: #4b8a3d; /* Dark green color */
  }
  
  .profile-info {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .profile-photo {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 4px solid #4b8a3d;
    margin-bottom: 1rem;
  }
  
  .profile-details {
    text-align: left;
  }
  
  .profile-details p {
    color: #6b5733; /* Earthy brown color */
    font-size: 1.1rem;
    margin: 0.5rem 0;
  }
  
  .profile-details strong {
    color: #4b8a3d;
  }
  </style>
  