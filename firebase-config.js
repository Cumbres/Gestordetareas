// firebase-config.js

// Importa las funciones necesarias del SDK de Firebase
// Asegúrate de que la versión del SDK es la 10.x.x o la más reciente
// Si tienes problemas, puedes intentar con la versión específica como '10.5.0' o la que te indique Firebase en su documentación.
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.x.x/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.x.x/firebase-firestore.js";

// TU CONFIGURACIÓN DE LA APLICACIÓN WEB DE FIREBASE
// ESTAS SON LAS CREDENCIALES QUE ME PROPORCIONASTE.
// ¡RECUERDA NO COMPARTIR ESTAS CLAVES PÚBLICAMENTE EN SITIOS COMO GitHub!
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

// Obtiene la instancia de Firestore (la base de datos)
const db = getFirestore(app);

// Exporta la instancia de Firestore para que pueda ser utilizada en otros archivos JS
export { db };
