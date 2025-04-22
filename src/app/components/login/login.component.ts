import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ClientesServiceService} from "../../sevices/clientesService/clientes-service.service";
import { Cliente } from '../../models/cliente.model';
import { EmpleadosServicesService } from 'src/app/sevices/empleadosService/empleados-services.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private router: Router,private clientesService: ClientesServiceService, private empleadosService: EmpleadosServicesService) {}




  // CAMBIARLO PARA HACER LA PETICION AL SERVICIO Y COMPROBAR SI PUEDEN ENTRAR O NO
  // @ts-ignore
  private clientes: Cliente[]=[];

  onSubmitClient(email : String,pwd : String) {

    //console.log(email + " - " + pwd );

    this.clientesService.getClientes().subscribe(
      data =>{ this.clientes = data
      console.log(this.clientes)
      }
    )

    this.clientes.forEach(cliente => {
      if(cliente.email == email && cliente.password == pwd){
        console.log('Las credenciales coinciden');
        this.guardarLocalStorageClient(cliente);
        this.RedirectCliente()
      }else{
        //console.log('Las credenciales no coinciden');
      }
    })
  }

  guardarLocalStorageClient(cliente : Cliente){
    console.log(cliente);
    let user = {'rol': 'cliente',
                                    'user': cliente}

    localStorage.setItem("usuario",JSON.stringify(user))
  }

  RedirectCliente() {
    this.router.navigate(['hype/']);
  }

  onSubmitEmployee() {

    //peticion al servicio de empeados y comprobacion de credenciales.

    // @ts-ignore
  this.router.navigate(['/hype/gestion']);  // Redirigir a la gestion del empleado
  }

  // FUNCIONES PARA CAMBIAR DE UN FORMULARIO A OTRO

  showClients() {
    let clientes = document.getElementById("clientesForm")
    let empleados = document.getElementById("empleadosForm")

    // @ts-ignore
    empleados.classList.add("d-none");
    // @ts-ignore
    clientes.classList.remove("d-none");
  }

  showEmployees() {
    let clientes = document.getElementById("clientesForm")
    let empleados = document.getElementById("empleadosForm")

    // @ts-ignore
    clientes.classList.add("d-none");
    // @ts-ignore
    empleados.classList.remove("d-none");
  }

//

  Register(){
    console.log("go to register")
    this.router.navigate(['/register'])
  }
}
