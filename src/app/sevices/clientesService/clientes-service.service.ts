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
  getClientes(): Observable<Cliente[]> {
    return this.http.get<any>('http://localhost:5002/api/clientes').pipe(
      map(response => {
        //como no devuelve un json y el array de dentro se identifica como .clientes
        const data = response;
        if (Array.isArray(data)) {
          //convertir a un array de objetos de la clase que queremos
          return data.map(item => new Cliente(
            item.id,
            item.nombre,
            item.apellido1,
            item.apellido2,
            item.email,
            item.password,
            item.telefono,
            item.direccion
          ));
        } else {
          throw new Error('La respuesta no es un array');
        }
      })
    );
  }

  postClientes(datos:any){
    return this.http.post('http://localhost:5002/api/clientes', datos);
  }


}
