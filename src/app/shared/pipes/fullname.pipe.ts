import { Pipe, PipeTransform } from '@angular/core';
import { EmployeeName } from '../../employee.model';


@Pipe({
  name: 'fullname',
})

export class FullnamePipe implements PipeTransform {

  transform(value: EmployeeName | undefined): string{

    let name;

    if (value === null || value === undefined){
      name = 'NA';
    }
   if (value){
    name = `${value.first ?? ''} ${value.middle ?? ''} ${value.last ?? ''}`.trim().replace(/\s+/g, ' ')
   }
    return name as string;
  }

}
