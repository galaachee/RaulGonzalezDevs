import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empelado.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrl: './lista-empleados.component.css'
})
export class ListaEmpleadosComponent implements OnInit {

    empleados:Empleado[];

  constructor(private empleadoServicio: EmpleadoService, private router:Router){}

  ngOnInit(): void {
      this.obtenerEmpleado();
  }

  actualizarEmpleado(id:number){
    this.router.navigate(['actualizar-empleado', id])
  }

  obtenerEmpleado(){
    this.empleadoServicio.obtenerListadoEmpleados().subscribe(dato =>{
      this.empleados = dato;
    })
  }

  eliminarEmpleado(id:number){
    Swal.fire({
      title: '¿Estás seguro?',
      text: "Confirma si deseas eliminar al empleado",
      icon: 'warning', // Propiedad correcta en lugar de 'type'
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'CONFIRMAR',
      cancelButtonText: 'CANCELAR',
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false 
    }).then((result) => {
      if (result.isConfirmed) {
        this.empleadoServicio.eliminarEmpleado(id).subscribe(dato => {
          console.log(dato);
          this.obtenerEmpleado();
          Swal.fire(
            'Empleado eliminado',
            'El empleado ha sido eliminado con éxito',
            'success'
          );
        });
      }
    });
  }



  verDetallesDelEmpleado(id:number){
    this.router.navigate(['empleado-detalles', id])
  }
}
