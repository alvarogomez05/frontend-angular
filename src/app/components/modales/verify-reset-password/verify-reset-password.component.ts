import { Component } from '@angular/core';
import { ClientesServiceService } from 'src/app/sevices/clientesService/clientes-service.service';

@Component({
  selector: 'app-verify-reset-password',
  templateUrl: './verify-reset-password.component.html',
  styleUrls: ['./verify-reset-password.component.scss']
})
export class VerifyResetPasswordComponent {

  constructor(private clientesService: ClientesServiceService) {}

  cancel() {
    // @ts-ignore
    document.getElementById('verifyResetPassword').classList.add('d-none');
  }

  getInfo(code: any) {
    //comprobar si el codigo que introduce es el mismo que es que le hemos mandado
    console.log(code);
    //@ts-ignore
    this.clientesService.compareToken(code).subscribe(response => {
      console.log(response)
      //@ts-ignore
      if(response.status){
        // no existe
        // @ts-ignore
        document.getElementById('verifyResetPassword').classList.add('d-none');
        // dar feedback
        return -1;
      }else{
        //entra
        // si coinciden mostramos la siguiente modal
        // @ts-ignore
        document.getElementById('verifyResetPassword').classList.add('d-none');
        // @ts-ignore
        document.getElementById('resetPassword').classList.remove('d-none');
      }
    })
  }
}
