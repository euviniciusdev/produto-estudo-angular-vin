import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  {
    path: 'exemplos',
    loadChildren: () =>
      import('./exemplos/exemplos.module').then((m) => m.ExemplosModule),
  },
  {
    path: 'exercicios',
    loadChildren: () =>
      import('./exercicios/exercicios.module').then((m) => m.ExerciciosModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
