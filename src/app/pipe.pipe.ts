import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe'
})
export class PipePipe implements PipeTransform {

  transform(value: string): string {
    if (value && value.length >= 4) {
      return value.substring(0, 4);
    }
    return value;
  }
}

