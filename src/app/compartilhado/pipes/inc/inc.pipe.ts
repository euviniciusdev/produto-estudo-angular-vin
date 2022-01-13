import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'inc',
  pure: false, // Caso usar push
})
export class IncPipe implements PipeTransform {
  transform(array: number[]): number[] {
    return array.map((n) => n + 1);
  }
}
