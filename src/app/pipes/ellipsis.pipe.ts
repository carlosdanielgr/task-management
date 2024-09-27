import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ellipsis',
  standalone: true,
})
export class EllipsisPipe implements PipeTransform {
  transform(value: string): unknown {
    if (value.length > 200) return value.slice(0, 200) + '...';
    return value;
  }
}
