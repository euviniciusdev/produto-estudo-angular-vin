import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExercicioUmComponent } from './exercicio-um/exercicio-um.component';
import { ExercicioDoisComponent } from './exercicio-dois/exercicio-dois.component';
import { ExerciciosRoutingModule } from './exercicios-routing.module';
import { PacientesComponent } from './pacientes/pacientes.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ExercicioUmComponent,
    ExercicioDoisComponent,
    PacientesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ExerciciosRoutingModule
  ],
  exports: [
    ExercicioUmComponent,
    ExercicioDoisComponent
  ]
})
export class ExerciciosModule { }
