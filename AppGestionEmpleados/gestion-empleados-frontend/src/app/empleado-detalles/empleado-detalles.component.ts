import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado';
import { ActivatedRoute } from '@angular/router';
import { EmpleadoService } from '../empelado.service';

@Component({
  selector: 'app-empleado-detalles',
  templateUrl: './empleado-detalles.component.html',
  styleUrl: './empleado-detalles.component.css'
})
export class EmpleadoDetallesComponent implements OnInit {

  id:number
  empleado:Empleado

  constructor(private route:ActivatedRoute, private empleadoService:EmpleadoService ){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.empleado = new Empleado();
    this.empleadoService.obtenerEmpleadoPorId(this.id).subscribe(dato =>{
      this.empleado = dato
    })
  }


}
