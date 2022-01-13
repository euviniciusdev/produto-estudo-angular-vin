import { Component, OnInit } from '@angular/core';
import { Paciente } from './paciente';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.scss'],
})
export class PacientesComponent implements OnInit {
  pacientes: Paciente[] = [
    {
      nome: 'José Almir de Souza',
      dataNascimento: new Date(1999, 5, 26),
      cpf: '999.999.999-99',
      email: 'jose@gmail.com',
    },
    {
      nome: 'José Almir de Souza',
      dataNascimento: new Date(1999, 5, 26),
      cpf: '999.999.999-99',
      email: 'jose@gmail.com',
    },
  ];

  nome: string = '';
  dataNascimento?: Date;
  cpf: string = '';
  email: string = '';

  criar() {
    this.pacientes.push({
      nome: this.nome,
      dataNascimento: this.dataNascimento!,
      cpf: this.cpf,
      email: this.email,
    });
  }

  deletar(index: number) {
    this.pacientes.splice(index, 1);
  }

  constructor() {}

  ngOnInit(): void {}
}
