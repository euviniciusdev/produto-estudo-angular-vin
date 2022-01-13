import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas',
  templateUrl: './diretivas.component.html',
  styleUrls: ['./diretivas.component.scss'],
})
export class DiretivasComponent implements OnInit {
  oculto: boolean = false;

  ocultar() {
    this.oculto = true;
  }

  alimento: string = '';

  compras = ['Arroz', 'Carne', 'Tempero'];

  add() {
    if (this.alimento.length > 0) {
      this.compras.push(this.alimento);
      this.alimento = '';
    } else {
      alert('Entrada inválida!');
    }
  }

  status: string = 'data';

  constructor() {}

  ngOnInit(): void {}
}
