import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genero',
  standalone: true,
})
export class GeneroPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    let genero = 'Masculino';

    if (value === 'F' || value === 'f') {
      genero = 'Feminino';
    }

    return genero;
  }
}
