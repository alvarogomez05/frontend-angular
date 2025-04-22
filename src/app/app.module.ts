import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NovedadesComponent } from './components/novedades/novedades.component';
import { InspirateComponent } from './components/inspirate/inspirate.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { FavoritosComponent } from './components/favoritos/favoritos.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { LoginComponent } from './components/login/login.component';
import { GestionProductosComponent } from './components/gestion-productos/gestion-productos.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ProductosCardComponent } from './components/productos/productos-card/productos-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { ProductosInfoComponent } from './components/productos/productos-info/productos-info.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ComponentsComponent } from './components/components.component';
import {ComponentsModule} from "./components/components.module";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ComponentsModule,
    MatProgressSpinnerModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
