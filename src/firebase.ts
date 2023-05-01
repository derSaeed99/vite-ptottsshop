// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPMmGjBDhEJX-q7RzUDEjgCZwQpGIysx8",
  authDomain: "ptotts-shop.firebaseapp.com",
  databaseURL: "https://ptotts-shop-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "ptotts-shop",
  storageBucket: "ptotts-shop.appspot.com",
  messagingSenderId: "687939121562",
  appId: "1:687939121562:web:6806b9fddf8cbf087f4a23",
  measurementId: "G-RJXZLKJFNG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);