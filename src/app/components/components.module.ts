import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Componentes
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NovedadesComponent } from './novedades/novedades.component';
import { InspirateComponent } from './inspirate/inspirate.component';
import { CarritoComponent } from './carrito/carrito.component';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { LoginComponent } from './login/login.component';
import { GestionProductosComponent } from './gestion-productos/gestion-productos.component';
import { ProductosComponent } from './productos/productos.component';
import { ProductosCardComponent } from './productos/productos-card/productos-card.component';
import { ProductosInfoComponent } from './productos/productos-info/productos-info.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ComponentsComponent } from './components.component';

// Módulos
import { ComponentsRoutingModule } from './components-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { RegisterComponent } from './register/register.component';
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import { BtnTopComponent } from './btn-top/btn-top.component';
import { ResetPasswordComponent } from './modales/reset-password/reset-password.component';
import { VerifyResetPasswordComponent } from './modales/verify-reset-password/verify-reset-password.component';
import { AskResetPasswordComponent } from './modales/ask-reset-password/ask-reset-password.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatBadgeModule} from "@angular/material/badge";
import {MatCardModule} from "@angular/material/card";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";

import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core'; // este puede ser necesario también

import { MatTreeModule } from '@angular/material/tree';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NovedadesComponent,
    InspirateComponent,
    CarritoComponent,
    FavoritosComponent,
    ContactoComponent,
    LoginComponent,
    GestionProductosComponent,
    ProductosComponent,
    ProductosCardComponent,
    ProductosInfoComponent,
    HomeComponent,
    NotFoundComponent,
    ComponentsComponent,
    RegisterComponent,
    BtnTopComponent,
    ResetPasswordComponent,
    VerifyResetPasswordComponent,
    AskResetPasswordComponent,
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatIconModule,
    MatMenuModule,
    MatDialogModule,
    MatBadgeModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatOptionModule,
    MatTreeModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent  // Si necesitas exportar estos componentes para otros módulos
  ]
})
export class ComponentsModule { }
