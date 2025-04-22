import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {ProductosComponent} from "./productos/productos.component";
import {ProductosInfoComponent} from "./productos/productos-info/productos-info.component";
import {FavoritosComponent} from "./favoritos/favoritos.component";
import {CarritoComponent} from "./carrito/carrito.component";
import {GestionProductosComponent} from "./gestion-productos/gestion-productos.component";
import {ContactoComponent} from "./contacto/contacto.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {AuthGuard} from "../auth/auth.guard";
import {authGestionGuard} from "../auth-gestion/auth-gestion.guard";

// rutas a falta de usar el canActive para dar mas seguridad
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'productos/:id', component: ProductosInfoComponent },
  { path: 'carrito' , component: CarritoComponent },
  { path: 'favoritos' , component: FavoritosComponent },
  { path: 'contacto' , component: ContactoComponent },
  { path: 'gestion' , component: GestionProductosComponent , canActivate: [authGestionGuard],},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
