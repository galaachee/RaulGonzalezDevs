import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Empleado } from './empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  //Esta URL obtiene el listado de empleados del backend
  private baseURL = "http://localhost:8080/api/v1/empleados";

  constructor(private httpClient : HttpClient) { 
  }

  //este método obtiene los empleados en una lista de empleados
  obtenerListadoEmpleados():Observable<Empleado[]>{
    return this.httpClient.get<Empleado[]>(`${this.baseURL}`);
  } 
 
  //este método registra el empleado enviando al back-end un objeto Empleado
  crearEmpleado(empleado:Empleado):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, empleado)
  }

  actualizarEmpleado(id:number, empleado:Empleado): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, empleado)
  }

  obtenerEmpleadoPorId(id:number):Observable<Empleado>{
    return this.httpClient.get<Empleado>(`${this.baseURL}/${id}`)
  }

  eliminarEmpleado(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`)
  }
  
}
