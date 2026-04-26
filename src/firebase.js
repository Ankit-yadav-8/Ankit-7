import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCK3v-LvYXcafPJkRVHpzKYx-PsL6Y3s4M",
  authDomain: "think-india-c0da6.firebaseapp.com",
  projectId: "think-india-c0da6",
  storageBucket: "think-india-c0da6.firebasestorage.app",
  messagingSenderId: "296881168119",
  appId: "1:296881168119:web:d8f3ace5d4371a1302bdf2",
  measurementId: "G-475YSPWYEF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export these tools so your other files can use them!
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);