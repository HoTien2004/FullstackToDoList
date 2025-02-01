// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxe_PJwN62944FlDfCrZMkk8lBVeOXdGo",
  authDomain: "note-app-fdb1d.firebaseapp.com",
  projectId: "note-app-fdb1d",
  storageBucket: "note-app-fdb1d.firebasestorage.app",
  messagingSenderId: "439957969888",
  appId: "1:439957969888:web:b648f8393b3a1c739ca985",
  measurementId: "G-PG32784S0L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);