import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoritosServiceService {

  constructor(private http : HttpClient) { }


  getFavoritosById(id : any): Observable<any>{
      let url = 'http://localhost:5002/api/favoritos/' + id;
      
      return this.http.get<any>(url);
  
    }

  deleteFavoritos(id: any, id_producto: any){
    let url = 'http://localhost:5002/api/favoritos/' + id + "/" + id_producto;

    return this.http.delete<any>(url)
  }

  PostFavoritos(id_cliente: any, id_producto: any){
    let url = 'http://localhost:5002/api/favoritos/' + id_cliente;

    return this.http.post<any>(url,{id_producto:id_producto})
  }
}
