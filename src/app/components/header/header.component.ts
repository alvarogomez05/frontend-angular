import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AskResetPasswordComponent} from "../modales/ask-reset-password/ask-reset-password.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

   carritoItems= 0;

   ngOnInit() {
     this.UpdateBadge();
   }

  // @ts-ignore
  get themeClass() : String | String[]{
    // @ts-ignore
   return document.querySelector("body").getAttribute('data-bs-theme') === 'light' ? 'light-theme': 'dark-theme';
  }

  get menu() : String | String[]{
    // @ts-ignore
    return document.querySelector("body").getAttribute('data-bs-theme') === 'light' ? 'menu1': 'menu2';
  }

  showChangePassword() {
    let menu = document.getElementById("menu");
    // @ts-ignore
    menu.classList.toggle("d-none");
  }

  changePassword() {
    console.log('cambio de contraseña')

    let dialog = document.getElementById("askResetPassword");
    // @ts-ignore
    dialog.classList.toggle("d-none");
  }

  ChangeTheme() {
    // @ts-ignore
    document.querySelector("body").getAttribute('data-bs-theme') === 'light' ? this.Oscuro() : this.Claro();
  }

  Oscuro(){
    // @ts-ignore
    document.querySelector('body').setAttribute('data-bs-theme', 'dark')
    // @ts-ignore
    document.getElementById('moon').classList.add('d-none');
    // @ts-ignore
    document.getElementById('sun').classList.remove('d-none');
  }

  Claro(){
    // @ts-ignore
    document.querySelector('body').setAttribute('data-bs-theme', 'light')
    // @ts-ignore
    document.getElementById('moon').classList.remove('d-none');
    // @ts-ignore
    document.getElementById('sun').classList.add('d-none');
  }

  //numero de productos en el carrito

  UpdateBadge(){
     //peticion a la api que nos devuleva el numeor de producto que tiene en el carrito la persona logeada
    this.carritoItems = 7;
  }



}
