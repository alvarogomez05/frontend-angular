import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AskResetPasswordComponent} from "../modales/ask-reset-password/ask-reset-password.component";
import { Router } from '@angular/router';
import { CarritoServiceService } from 'src/app/sevices/carritoService/carrito-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

   constructor(private router: Router,private carritoService: CarritoServiceService) {}

   carritoItems= 0;
   rol = '';

   ngOnInit() {
    //@ts-ignore
    this.rol = JSON.parse(localStorage.getItem('usuario')).rol;
    // console.log(this.rol)

    if(this.rol == 'cliente'){
      this.UpdateBadge();
    }
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
    //@ts-ignore
    let id = JSON.parse(localStorage.getItem('usuario'));
     console.log(id.user.usuario.id_cliente)
     this.carritoService.getCarritoById(id.user.usuario.id_cliente).subscribe(response =>{
      console.log(response)
      this.carritoItems = response.length;
     })

  }

  logOut(){
    localStorage.clear();
    this.router.navigate(['/login']);   }

    abrir(){
      document.getElementById('chart')?.classList.remove('d-none')
    }
}
