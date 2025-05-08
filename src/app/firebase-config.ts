// src/app/firebase-config.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDb0s7XvpLOKNJ9TbOeAOYsGBqpFNKxn_Y",
    authDomain: "front-tfg-1f74e.firebaseapp.com",
    projectId: "front-tfg-1f74e",
    storageBucket: "front-tfg-1f74e.firebasestorage.app",
    messagingSenderId: "235740798911",
    appId: "1:235740798911:web:3ffe108898cc1a4da54b0a",
    measurementId: "G-WY039RLP5M"
  };

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Exporta la instancia de autenticación
export const auth = getAuth(app);
