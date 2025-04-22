import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from "@angular/router";
import { ClientesServiceService } from 'src/app/sevices/clientesService/clientes-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor(private router: Router, private clientesService: ClientesServiceService) {}



  onSubmit(form: NgForm) {

    let cliente = {
      nombre:form.value.name,
      apellido1:form.value.ape1,
      apellido2:form.value.ape2,
      email:form.value.mail,
      password:form.value.contraseña,
      telefono:form.value.tlf,
      direccion:form.value.dir,
      token:'000000'
    }

    console.log(cliente)


      this.clientesService.postClientes(cliente).subscribe(
        (respuesta) => {
          // console.log('POST exitoso:', respuesta);
          this.Login()
        },
        (error) => {
          // console.error('Error en el POST:', error);
        }
      );
    
  }

  Login() {
    this.router.navigate(['/']);
  }
}
