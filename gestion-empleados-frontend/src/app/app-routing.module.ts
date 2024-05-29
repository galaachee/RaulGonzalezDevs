import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaEmpleadosComponent } from './lista-empleados/lista-empleados.component';
import { CrearEmpleadoComponent } from './crear-empleado/crear-empleado.component';
import { ActualizarEmpleadoComponent } from './actualizar-empleado/actualizar-empleado.component';
import { EmpleadoDetallesComponent } from './empleado-detalles/empleado-detalles.component';

const routes: Routes = [
  {path:'empleados', component:ListaEmpleadosComponent},
  {path:'', redirectTo:'empleados',pathMatch:'full'},
  {path: 'crear-empleado',component: CrearEmpleadoComponent},
  {path: 'actualizar-empleado/:id', component: ActualizarEmpleadoComponent},
  {path: 'empleado-detalles/:id', component:EmpleadoDetallesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
