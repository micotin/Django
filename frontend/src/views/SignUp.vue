<template>
    <div class="signup-container">
      <h1>Sign Up for GABAY</h1>
      <form @submit.prevent="handleSignUp">
        <input v-model="username" placeholder="Username" required />
        <input v-model="firstName" placeholder="First Name" required />
        <input v-model="lastName" placeholder="Last Name" required />
        <input v-model="email" type="email" placeholder="Email" required />
        <input v-model="password" type="password" placeholder="Password" required />
        <input v-model="confirmPassword" type="password" placeholder="Confirm Password" required />
        <button type="submit">Sign Up</button>
      </form>
      <p v-if="signupMessage">{{ signupMessage }}</p>
    </div>
  </template>
  
  <script>
  import { signUp } from "@/firebase/auth";
  
  export default {
    data() {
      return {
        username: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        signupMessage: '',
      };
    },
    methods: {
      async handleSignUp() {
        if (this.password !== this.confirmPassword) {
          this.signupMessage = "Passwords do not match.";
          return;
        }
  
        const result = await signUp(this.username, this.firstName, this.lastName, this.email, this.password);
        if (result.success) {
          this.signupMessage = "A verification email has been sent. Please verify to log in.";
          this.$router.push("/login");
        } else {
          this.signupMessage = result.error;
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your inline or scoped styles here for a farm-themed signup page */
  </style>
  