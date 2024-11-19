// Import necessary functions from the Firebase SDK
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4QeC0IWOiBTcafzPysSikva7Fbb01Gv8",
  authDomain: "guide-c5489.firebaseapp.com",
  projectId: "guide-c5489",
  storageBucket: "guide-c5489.firebasestorage.app",
  messagingSenderId: "976594393477",
  appId: "1:976594393477:web:acf2055845bded83010cec",
  measurementId: "G-MKC6Z2308P"
};

// Initialize Firebase with the config
const app = initializeApp(firebaseConfig);

// Get Firebase services
const auth = getAuth(app);
const firestore = getFirestore(app);
const analytics = getAnalytics(app);

// Export Firebase services for use in other files
export { auth, firestore, analytics };
