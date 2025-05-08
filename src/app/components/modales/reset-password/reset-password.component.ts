import { Component } from '@angular/core';
import { ClientesServiceService } from 'src/app/sevices/clientesService/clientes-service.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent {

  constructor(private clientesService: ClientesServiceService){}

  cancel() {
    // @ts-ignore
    document.getElementById('resetPassword').classList.add('d-none');
  }

  compare(pwd: any, pwd2: any) {
      //Si las contraseñas son iguales la cambiamos si no mandamos un error

    if(pwd == pwd2) {
      console.log('password changed');

      this.clientesService.updatePassword(pwd).subscribe(response => {
        console.log(response)
      })

      // @ts-ignore
      document.getElementById('resetPassword').classList.add('d-none');
    }else{
      console.log('ERROR: Las contraseñas no coinciden');
    }
  }
}
