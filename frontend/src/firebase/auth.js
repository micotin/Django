import { auth } from "./firebase"; // Import auth from firebase.js
import { createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc, updateDoc } from "firebase/firestore";

// Firestore initialization
const db = getFirestore();

// Signup function
export const signUp = async (username, firstName, lastName, email, password) => {
  try {
    // Create user in Firebase Authentication
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Send verification email
    await sendEmailVerification(user);
    console.log("Verification email sent");

    // Add user data to Firestore
    await setDoc(doc(db, "users", user.uid), {
      username,
      firstName,
      lastName,
      role: "user",
      email,
      emailVerified: false, // Set initial emailVerified as false
    });

    return { success: true };
  } catch (error) {
    console.error("Error during sign-up:", error.message);
    return { success: false, error: error.message };
  }
};

// Login function with dynamic email verification check
export const login = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Refresh user data to get the latest email verification status
    await user.reload();

    // Check if the email is verified
    if (!user.emailVerified) {
      throw new Error("Please verify your email before logging in.");
    }

    // Retrieve user role from Firestore
    const userDoc = await getDoc(doc(db, "users", user.uid));
    const userData = userDoc.data();

    // Update Firestore with latest emailVerified status if it has changed
    if (userData && userData.emailVerified !== user.emailVerified) {
      await updateDoc(doc(db, "users", user.uid), {
        emailVerified: user.emailVerified,
      });
    }

    return { success: true, role: userData.role };
  } catch (error) {
    console.error("Login error:", error.message);
    return { success: false, error: error.message };
  }
};
