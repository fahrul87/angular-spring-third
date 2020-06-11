import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    // materi Custom Pipe
    console.log(value);
    let currentYear=new Date().getFullYear();//2020
    let birthYear=new Date(value).getFullYear();
    return currentYear-birthYear;
  }

}
