import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss'],
})
export class PipesComponent implements OnInit {
  date = new Date();
  nome = 'José Almir';
  percentual = 0.557865;
  salario = 3000;
  user = { name: 'jr', id: 1 };

  constructor() {}

  ngOnInit(): void {}
}
