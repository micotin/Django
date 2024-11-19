<template>
    <div class="login">
      <h2>Login</h2>
      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" v-model="email" required />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" v-model="password" required />
        </div>
        <button type="submit">Login</button>
        <p v-if="error" class="error-message">{{ error }}</p>
      </form>
      <p class="signup-link">
        Don't have an account? <router-link to="/signup">Sign Up</router-link>
      </p>
    </div>
  </template>
  
  <script>
  import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
  import { getFirestore, doc, getDoc } from "firebase/firestore"; // To check the user role
  
  export default {
    data() {
      return {
        email: "",
        password: "",
        error: null,
      };
    },
    methods: {
      async handleLogin() {
        const auth = getAuth();
        const db = getFirestore();
        try {
          const userCredential = await signInWithEmailAndPassword(auth, this.email, this.password);
          const user = userCredential.user;
  
          if (user.emailVerified) {
            // Fetch user role from Firestore
            const userDocRef = doc(db, "users", user.uid);
            const userDoc = await getDoc(userDocRef);
            
            if (userDoc.exists()) {
              const userData = userDoc.data();
              const role = userData.role;
  
              // Redirect based on user role
              if (role === "admin") {
                this.$router.push("/admin/dashboard");
              } else {
                this.$router.push("/user/dashboard");
              }
            } else {
              this.error = "User data not found!";
            }
          } else {
            this.error = "Please verify your email before logging in.";
          }
        } catch (err) {
          this.error = "Incorrect email or password.";
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .login {
    max-width: 400px;
    margin: auto;
    padding: 2rem;
    background-color: #f4f3e5;
    border-radius: 10px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
  
  .login h2 {
    color: #4b8a3d;
  }
  
  .form-group {
    margin-bottom: 1rem;
  }
  
  label {
    display: block;
    color: #6b5733;
  }
  
  input[type="email"],
  input[type="password"] {
    width: 100%;
    padding: 0.5rem;
    margin-top: 0.3rem;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  button {
    background-color: #4CAF50;
    color: white;
    padding: 0.7rem 1.5rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #45a049;
  }
  
  .error-message {
    color: #d9534f; /* Red color for error */
    margin-top: 1rem;
  }
  
  .signup-link {
    margin-top: 1rem;
    color: #4CAF50;
  }
  
  .signup-link a {
    text-decoration: none;
    color: #4CAF50;
  }
  
  .signup-link a:hover {
    text-decoration: underline;
  }
  </style>
  