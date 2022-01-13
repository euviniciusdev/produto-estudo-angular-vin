import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(data: string[], query: string): string[] {
    return data.filter((txt) =>
      txt.toLowerCase().startsWith(query.toLowerCase())
    );
  }
}
