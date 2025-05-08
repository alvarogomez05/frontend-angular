import { Component } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { ClientesServiceService } from 'src/app/sevices/clientesService/clientes-service.service';


@Component({
  selector: 'app-ask-reset-password',
  templateUrl: './ask-reset-password.component.html',
  styleUrls: ['./ask-reset-password.component.scss']
})
export class AskResetPasswordComponent {

  constructor(private clientesService: ClientesServiceService) {}

  //@ts-ignore
  user : any = '';

  ngOnInit() {
    emailjs.init('0wgPu1C_SkTQ0gYSb');

    //@ts-ignore
    if(JSON.parse(localStorage.getItem('usuario')).rol == 'cliente'){
        //@ts-ignore
        this.user = JSON.parse(localStorage.getItem('usuario')).user.usuario.email
    }

    // console.log(user)
  }

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
    //hacer un update del codigo a la bd para comprobarlo despues

    this.clientesService.updateToken(random).subscribe(response => {
      console.log(response)
    })

    //Mandar el correo electronico
    emailjs.send("service_hyxlmfv", "template_1cmr1cq", {
      email: email,
      message: random
    }).then(
      () => {
        console.log('SUCCESS!');
      },
      (error: EmailJSResponseStatus) => {
        console.log('FAILED...', error.text);
      }
    );

    //Ocultar esta modal y mostrar la siguiente.
    // @ts-ignore
    document.getElementById('askResetPassword').classList.add('d-none');
    // @ts-ignore
    document.getElementById('verifyResetPassword').classList.remove('d-none');
  }
}
