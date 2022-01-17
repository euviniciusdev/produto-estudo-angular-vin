import { SorteioService } from './../../compartilhado/services/sorteio.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-app-sorteio',
  templateUrl: './app-sorteio.component.html',
  styleUrls: ['./app-sorteio.component.scss']
})
export class AppSorteioComponent implements OnInit {
  values: string = '';
  sorteado: string = '';

  enviar () {
    const nomes = this.values.split('\n');
    this.sorteioService.sortear(nomes).subscribe({
      next: (nome) => (this.sorteado = nome),
      error: (err) => alert(err),
      complete: () => console.log("Observable chegou ao fim")
    })
  }

  constructor(private sorteioService: SorteioService) { }

  ngOnInit(): void {
  }

}
