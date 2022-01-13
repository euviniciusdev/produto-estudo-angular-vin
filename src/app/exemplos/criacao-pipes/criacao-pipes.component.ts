import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criacao-pipes',
  templateUrl: './criacao-pipes.component.html',
  styleUrls: ['./criacao-pipes.component.scss'],
})
export class CriacaoPipesComponent implements OnInit {
  numeros = [1, 2, 3];

  add() {
    // this.numeros = [...this.numeros, 1]; // Altera a referência
    this.numeros.push(Math.floor(Math.random() * 10)) // Alteração não muda a referência
  }

  query = '';

  linguagens = [
    'Python',
    'Ruby',
    'Typescript',
    'Perl',
    'Haskell',
    'C++',
    'C#',
    'C',
    'Rust',
    'Java',
    'Go',
    'PHP',
    'Cobol',
    'Javascript',
    'Clojure',
    'Julia',
    'Fortran',
    'Lua',
    'Kotlin',
    'VisualG',
    'Portugol',
    'Elixir',
    'Swift',
  ];

  constructor() {}

  ngOnInit(): void {}
}
