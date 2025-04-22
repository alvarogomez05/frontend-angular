import { Component } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-ask-reset-password',
  templateUrl: './ask-reset-password.component.html',
  styleUrls: ['./ask-reset-password.component.scss']
})
export class AskResetPasswordComponent {

  //cancel
  changePassword() {
       console.log('cambio de contraseña')

       let dialog = document.getElementById("askResetPassword");
       // @ts-ignore
       dialog.classList.toggle("d-none");
     }


  getInfo(email: string) {
    console.log(email)
    //calcular un digito aleatorio para la verficacion en 2 pasos
    let random = Math.floor(Math.random() * 1000000);
    console.log(random)
    //hacer un update del codigo a la bd para comprobarlo despues

    //Mandar el correo electronico

    //Ocultar esta modal y mostrar la siguiente.
    // @ts-ignore
    document.getElementById('askResetPassword').classList.add('d-none');
    // @ts-ignore
    document.getElementById('verifyResetPassword').classList.remove('d-none');
  }
}
