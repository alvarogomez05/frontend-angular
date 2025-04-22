import { Component } from '@angular/core';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent {

  cancel() {
    // @ts-ignore
    document.getElementById('resetPassword').classList.add('d-none');
  }

  compare(pwd: any, pwd2: any) {
      //Si las contraseñas son iguales la cambiamos si no mandamos un error

    if(pwd == pwd2) {
      console.log('password changed');
      // @ts-ignore
      document.getElementById('resetPassword').classList.add('d-none');
      //Hacer el update a la bd
    }else{
      console.log('ERROR: Las contraseñas no coinciden');
    }
  }
}
