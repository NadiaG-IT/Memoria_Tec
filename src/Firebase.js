import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAHUrPMPYfpRnGCJMFlUsRhkUiGShYNYx4",
  authDomain: "memoria-automatizada.firebaseapp.com",
  projectId: "memoria-automatizada",
  storageBucket: "memoria-automatizada.appspot.com",
  messagingSenderId: "535798994564",
  appId: "1:535798994564:web:0c39797193f58956f314d1",
  measurementId: "G-XQNYX73S9S"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
// Exporta el objeto 'auth'
export const auth = getAuth(app);
// Exporta el proveedor de autenticación de Google
export const googleAuthProvider = new GoogleAuthProvider();
