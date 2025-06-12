// firebase-config.js

// Importa las funciones necesarias del SDK de Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.x.x/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.x.x/firebase-firestore.js";
// No importamos getAnalytics aquí porque lo manejarás en el script principal si es necesario.

// Tu configuración de la aplicación web de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDexbXcg72xywNAaJ_RsvacG96lNxiBRyY",
  authDomain: "gestordetareas-383f2.firebaseapp.com",
  projectId: "gestordetareas-383f2",
  storageBucket: "gestordetareas-383f2.firebasestorage.app",
  messagingSenderId: "792456592792",
  appId: "1:792456592792:web:8dd8b44c17579a3d393fed",
  measurementId: "G-F16XM9PHFM"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Obtiene la instancia de Firestore
const db = getFirestore(app);

// Exporta la instancia de Firestore para que pueda ser utilizada en otros archivos JS
export { db };
