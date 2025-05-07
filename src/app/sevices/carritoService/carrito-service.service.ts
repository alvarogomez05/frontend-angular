import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarritoServiceService {

  constructor(private http: HttpClient) { }

  getCarritoById(id: any): Observable<any> {
    let url = 'http://localhost:5002/api/carrito/' + id;

    return this.http.get<any>(url);

  }

  PostCarrito(id_cliente: string, id_producto: any): Observable<any> {
    console.log(id_cliente)
    return this.http.post("http://localhost:5002/api/carrito/", {id_producto: id_producto,
      id_cliente: id_cliente
    });
  }

  DeleteCarrito(id_cliente: any, id_producto: any): Observable<any>{
    return this.http.delete<any>("http://localhost:5002/api/carrito/"+id_cliente+"/"+id_producto)
  }

}
