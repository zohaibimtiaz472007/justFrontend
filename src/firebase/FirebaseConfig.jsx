// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDap6YBUgMu_YdHb9unhtuizQkuRJSoM6c",
  authDomain: "zocommerce.firebaseapp.com",
  projectId: "zocommerce",
  storageBucket: "zocommerce.firebasestorage.app",
  messagingSenderId: "1072003746070",
  appId: "1:1072003746070:web:70d71ebadd6caaed56a837"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)

export { fireDB, auth }