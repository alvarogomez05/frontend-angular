import { Component } from '@angular/core';

@Component({
  selector: 'app-verify-reset-password',
  templateUrl: './verify-reset-password.component.html',
  styleUrls: ['./verify-reset-password.component.scss']
})
export class VerifyResetPasswordComponent {

  cancel() {
    // @ts-ignore
    document.getElementById('verifyResetPassword').classList.add('d-none');
  }

  getInfo(code: any) {
    //comprobar si el codigo que introduce es el mismo que es que le hemos mandado
    console.log(code);

    // si coinciden mostramos la siguiente modal
    // @ts-ignore
    document.getElementById('verifyResetPassword').classList.add('d-none');
    // @ts-ignore
    document.getElementById('resetPassword').classList.remove('d-none');
  }
}
