// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnVd9-bCS5OWGiAF-ASvj2Tun0M7dwglk",
  authDomain: "list-your-house-app.firebaseapp.com",
  projectId: "list-your-house-app",
  storageBucket: "list-your-house-app.appspot.com",
  messagingSenderId: "818056251183",
  appId: "1:818056251183:web:cd3fda6d21316e39ad03da",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();
