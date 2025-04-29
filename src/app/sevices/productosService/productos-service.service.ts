import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Productos} from "../../models/productos.model";
import {Cliente} from "../../models/cliente.model";

@Injectable({
  providedIn: 'root'
})
export class ProductosServiceService {

  constructor(private http: HttpClient) { }

  // @ts-ignore
  getProducts(): Observable<Productos[]> {

    return this.http.get<any>('http://localhost:5002/api/productos').pipe(
      map(response => {
        //como no devuelve un json y el array de dentro se identifica como .clientes
        const data = response;
        if (Array.isArray(data)) {
          // console.log(data)
          //convertir a un array de objetos de la clase que queremos
          return data.map(item => new Productos(
            item.id_producto,
            item.nombre,
            item.descripcion,
            item.precio,
            item.stock,
            item.categoria,
          ));
        } else {
          throw new Error('La respuesta no es un array');
        }
      })
    )

  }

  postProduct(producto: any): Observable<any> {
    return this.http.post('http://localhost:5002/api/productos', producto);
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete('http://localhost:5002/api/productos/'+id);
  }

  updateProduct(id: number, data: any): Observable<any> {
    return this.http.put('http://localhost:5002/api/productos/'+id, data);
  }
}
