import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse', 
  pure: true
})
export class ReversePipe implements PipeTransform {
  transform(value: string, postfix: string): string {
    if (typeof(value) !== 'string') return '';

    let letters = value.split('');
    let rev = letters.reverse();
    let result = rev.join('');

    return result + postfix;
  }

}
