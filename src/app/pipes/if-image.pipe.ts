import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ifImage'
})
export class IfImagePipe implements PipeTransform {

  transform(value: string, ...args: any[]): string {
    if(value === ''){
      value = './reddit-logo.webp'
    }
    return value;
  }

}
