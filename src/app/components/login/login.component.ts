import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ClientesServiceService} from "../../sevices/clientesService/clientes-service.service";
import { Cliente } from '../../models/cliente.model';
import { EmpleadosServicesService } from 'src/app/sevices/empleadosService/empleados-services.service';
import { Empleado } from 'src/app/models/empleado.model';
import { AuthService } from 'src/app/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private router: Router,private clientesService: ClientesServiceService, private empleadosService: EmpleadosServicesService, private auth: AuthService) {}

  entra : boolean = true;
  entraGoogle : boolean = true;


  // @ts-ignore
  private clientes: Cliente[]=[];

  onSubmitClient(email : String,pwd : String) {
    this.entra = true;
    let cliente = {
      'email': email,
      'password': pwd,
    }
    // @ts-ignore
    this.clientesService.getClientes(cliente).subscribe(response => {
      if(response.body.status){
        //no puede entrar
        this.entra = false;
        return 1;
      }
      this.entra = true;
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
    this.entra = true;
    let empleado = {
      'dni':dni,
      'email':email,
      'password':pwd,
    }

     // @ts-ignore
     this.empleadosService.getEmples(empleado).subscribe(response => {
      if(response.body.status){
        //no puede entrar
        this.entra = false;
        return 1;
      }
      this.entra = true;
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
    this.entra = true;
    let clientes = document.getElementById("clientesForm")
    let empleados = document.getElementById("empleadosForm")

    // @ts-ignore
    empleados.classList.add("d-none");
    // @ts-ignore
    clientes.classList.remove("d-none");
  }

  showEmployees() {
    this.entra = true;
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

  async loginWithGoogle() {
    const userCredential = await this.auth.loginWithGoogle();

    console.log(userCredential.email)

    //@ts-ignore
    this.clientesService.ComprobarLogGoogle(userCredential.email).subscribe(response => {
      console.log(response)
      //@ts-ignore
      if(response.status){
        //feedback login fallido
        this.entraGoogle = false;
        return -1;
      }
      this.entraGoogle = true;
      //@ts-ignore
      this.guardarLocalStorageClient({usuario: response.usuario})

    })
  }
  
}
