import { Pipe, PipeTransform } from '@angular/core';
import { EmployeeName } from './employee.model';


@Pipe({
  name: 'fullname',
})

export class FullnamePipe implements PipeTransform {

  transform(value: EmployeeName) {
    let name;
    if(!value.hasOwnProperty('first') && !value.hasOwnProperty('middle') && !value.hasOwnProperty('last')){
      name= 'NA';
     
    }
    if (Object.keys(value).length){
      name = (value.first ?? '') +' '+ (value.middle ?? '' ) +' '+ (value.last ?? '') ;
    } 
    return name;
  }

}
