import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./components/login/login.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { AuthGuard } from './auth/auth.guard';
import {RegisterComponent} from "./components/register/register.component";
import {ComponentsComponent} from "./components/components.component"; // 👈 importa el guard

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'hype',
    canActivate: [AuthGuard],
    component: ComponentsComponent,
    loadChildren: () =>
      import('./components/components.module').then(m => m.ComponentsModule)
  },
  { path: 'register', component: RegisterComponent},
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
