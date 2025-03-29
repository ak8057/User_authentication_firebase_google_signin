// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwf5RjJgxlGjlBx84fMaMsL-BrhVgbuYo",
  authDomain: "authset-c4594.firebaseapp.com",
  projectId: "authset-c4594",
  storageBucket: "authset-c4594.firebasestorage.app",
  messagingSenderId: "388433551080",
  appId: "1:388433551080:web:4d9b9ba85822f72ea8735d",
  measurementId: "G-1N1GJZ8K92",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); // ✅ Initialize Firestore database

// Export Firebase services
export { auth, db };