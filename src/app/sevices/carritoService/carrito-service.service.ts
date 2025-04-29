import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarritoServiceService {

  constructor( private http : HttpClient) { }

  getCarritoById(id : any): Observable<any>{
    let url = 'http://localhost:5002/api/carrito/' + id;
    
    return this.http.get<any>(url);

  }

}
