import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nom'
})
export class NomPipe implements PipeTransform {

  transform(nom: String): string {
    return " ✾ ✾ "+nom+" ✾ ✾";
  }
}
