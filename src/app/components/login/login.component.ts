import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ClientesServiceService} from "../../sevices/clientesService/clientes-service.service";
import { Cliente } from '../../models/cliente.model';
import { EmpleadosServicesService } from 'src/app/sevices/empleadosService/empleados-services.service';
import { Empleado } from 'src/app/models/empleado.model';


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
    let cliente = {
      'email': email,
      'password': pwd,
    }
    // @ts-ignore
    this.clientesService.getClientes(cliente).subscribe(response => {
      if(response.body.status){
        //no puede entrar
        return 1;
      }
        this.guardarLocalStorageClient(response.body);
    }, error => {
      console.error('Error status:', error.status);    
    });
  }

  guardarLocalStorageClient(cliente : Cliente){
    console.log(cliente);
    let user = {'rol': 'cliente',
                'user': cliente}
    localStorage.setItem("usuario",JSON.stringify(user))
    this.RedirectCliente();
  }

  RedirectCliente() {
    this.router.navigate(['hype/']);
  }

  onSubmitEmployee(email: String, pwd: String, dni: String) {
    let empleado = {
      'dni':dni,
      'email':email,
      'password':pwd,
    }

     // @ts-ignore
     this.empleadosService.getEmples(empleado).subscribe(response => {
      if(response.body.status){
        //no puede entrar
        return 1;
      }
        this.guardarLocalStorageEmployee(response.body);
    }, error => {
      console.error('Error status:', error.status);    
    });

  }

  guardarLocalStorageEmployee(empleado: Empleado){
    console.log(empleado)
    let user2= {
      'rol':'empleado',
      'user': empleado,
    }
    localStorage.setItem("usuario",JSON.stringify(user2))
    this.RedirectEmployee();
  }

  RedirectEmployee() {
    this.router.navigate(['/hype/gestion']);  // Redirigir a la gestion del empleados
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
