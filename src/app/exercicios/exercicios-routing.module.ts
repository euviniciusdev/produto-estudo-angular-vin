import { PacientesComponent } from './pacientes/pacientes.component';
import { ExercicioUmComponent } from './exercicio-um/exercicio-um.component';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ExercicioDoisComponent } from './exercicio-dois/exercicio-dois.component';

const routes: Route[] = [
  {
    path: 'exercicio-um',
    component: ExercicioUmComponent,
  },
  {
    path: 'exercicio-dois',
    component: ExercicioDoisComponent,
  },
  {
    path: 'pacientes',
    component: PacientesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExerciciosRoutingModule {}
