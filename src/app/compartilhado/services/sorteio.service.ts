import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SorteioService {

  constructor() { }

  sortear(nomes: string[]): Observable<string> {
    return new Observable((subscriber) => {
      if(nomes.length === 1) {
        subscriber.error('Lista vazia');
      } else {
        const sorteado = Math.floor(Math.random()* nomes.length)
        subscriber.next(nomes[sorteado]);
        subscriber.complete();
      }
    });
  }
}
