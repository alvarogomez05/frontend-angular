import {CanActivate, CanActivateFn, Router} from '@angular/router';
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export  class authGestionGuard implements CanActivate{

  constructor(private router: Router) {}

  canActivate(): boolean {
    const isLoggedIn = JSON.parse(<string>localStorage.getItem('usuario'))
    console.log(isLoggedIn.rol)

    if (isLoggedIn.rol == "cliente") {
      // Si no está logueado, redirigir al login
      this.router.navigate(['./hype/home']);
      return false;
    }

    return true;

  }

}
