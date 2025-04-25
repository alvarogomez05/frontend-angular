import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado } from 'src/app/models/empleado.model';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosServicesService {

  constructor(private http : HttpClient) { }

   getEmples(empleado: any): Observable<HttpResponse<any>> {
      return this.http.post<any>('http://localhost:5002/api/empleados/login', empleado, { observe: 'response' });
    }

}
