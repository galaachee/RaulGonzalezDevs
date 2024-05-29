import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empelado.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-empleado',
  templateUrl: './crear-empleado.component.html',
  styleUrl: './crear-empleado.component.css'
})
export class CrearEmpleadoComponent implements OnInit {
  
  empleado: Empleado = new Empleado()
  
  constructor(private empleadoServicio:EmpleadoService,
              private router:Router){}

  ngOnInit(): void {
  }

  guardarEmpleado(){
    this.empleadoServicio.crearEmpleado(this.empleado).subscribe(dato => {
      console.log(dato)
      this.redireccionListaEmpleados()
    },error => console.log(error))
  }

  redireccionListaEmpleados(){
    this.router.navigate(['/empleados'])
  }

  onSubmit(){
    this.guardarEmpleado()
  }
}
