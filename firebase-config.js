// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDexbXcg72xywNAaJ_RsvacG96lNxiBRyY",
  authDomain: "gestordetareas-383f2.firebaseapp.com",
  projectId: "gestordetareas-383f2",
  storageBucket: "gestordetareas-383f2.firebasestorage.app",
  messagingSenderId: "792456592792",
  appId: "1:792456592792:web:6dd820fbda79534a393fed",
  measurementId: "G-2PQLVREQVZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
