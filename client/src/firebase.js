// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "impactplay-fe916.firebaseapp.com",
  projectId: "impactplay-fe916",
  storageBucket: "impactplay-fe916.appspot.com",
  messagingSenderId: "141788575480",
  appId: "1:141788575480:web:a6025c04af555988d42d0d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

