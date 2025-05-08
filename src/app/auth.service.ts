// src/app/auth.service.ts
import { Injectable } from '@angular/core';
import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged, User } from 'firebase/auth';
import { auth } from './firebase-config';

@Injectable({ providedIn: 'root' })
export class AuthService {
  currentUser: User | null = null;

  constructor() {
    // Escucha cambios en la sesión del usuario
    onAuthStateChanged(auth, user => {
      this.currentUser = user;
    });
  }

  async loginWithGoogle() {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      this.currentUser = result.user;
    //   console.log('Usuario logueado:', this.currentUser);
    //   console.log(this.currentUser.email);
  
      // Puedes devolver el usuario actual
      return this.currentUser;
  
    } catch (error) {
      console.error('Error en login:', error);
      throw error;  // Opcional: puedes volver a lanzar el error si necesitas manejarlo fuera de la función
    }
  }
  

  async logout() {
    await signOut(auth);
    this.currentUser = null;
  }
}
