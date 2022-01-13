import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio-dois',
  templateUrl: './exercicio-dois.component.html',
  styleUrls: ['./exercicio-dois.component.scss'],
})
export class ExercicioDoisComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  idade: number = 0;

  diminuir() {
    this.idade--;
  }

  aumentar() {
    this.idade++;
  }
}
