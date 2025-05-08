import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComprasServiceService {

  constructor(private http : HttpClient) { }

  postCompras(compra: any){

    return this.http.post<any>('http://localhost:5002/api/compras',compra, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })})

  }


}
