import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import { Cliente } from '../../models/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClientesServiceService {

  constructor( private http : HttpClient) { }

  // @ts-ignore
  getClientes(cliente: any): Observable<HttpResponse<any>> {
    return this.http.post<any>('http://localhost:5002/api/clientes/login', cliente, { observe: 'response' });
  }
  

  postClientes(datos:any){
    return this.http.post('http://localhost:5002/api/clientes', datos);
  }

  updateToken(token:any){
    //@ts-ignore
    let user = JSON.parse(localStorage.getItem('usuario')).user.usuario
    console.log(user)

    return this.http.put('http://localhost:5002/api/clientes/token/'+user.id_cliente, {
      token: token
    })
  }

  compareToken(token:any){
    //@ts-ignore
    let user = JSON.parse(localStorage.getItem('usuario')).user.usuario

  
    return this.http.post('http://localhost:5002/api/clientes/token/'+user.id_cliente, {token:token});

  }

  updatePassword(pwd:any){
    //@ts-ignore
    let user = JSON.parse(localStorage.getItem('usuario')).user.usuario

    return this.http.put('http://localhost:5002/api/clientes/'+user.id_cliente, {
      password: pwd
    })
  }

  ComprobarLogGoogle(email: any){
    return this.http.post('http://localhost:5002/api/clientes/google',{
      email: email
    })
  }

}
