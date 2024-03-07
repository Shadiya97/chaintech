import { Directive, HostListener, Input } from '@angular/core';
import { Employee } from '../employee.model';
import { EmployeeDataService } from '../employee-data.service';

@Directive({
  selector: '[appSort]'
})
export class SortDirective {

@Input() data : Employee[] =[]
@Input() sortColumn !: string
isAscending:boolean=false;

sortFunctions: any = {
  age: () => {
    this.sortbyAge();
  },
  name: () => {
    this.sortbyName();
  },
};

constructor(private employeeDataService: EmployeeDataService) { }

ngOnInit(){
//  this.data = this.employeeDataService.employees
}

@HostListener('click') onClick() {

  this.isAscending = !this.isAscending;

  // if (this.sortColumn === 'age'){
  //   this.sortbyAge()
  // } else if (this.sortColumn === 'name'){
  //   this.sortbyName()
  // }

  this.sortFunctions[this.sortColumn]();

}  

sortbyAge(){

  this.data.sort((a,b)=>{
    return this.isAscending ? (+a.age - +b.age) : (+b.age - +a.age)
   })

}

sortbyName(){
  
  this.data.sort((a,b) => {
    const nameA = this.employeeDataService.getFullName(a)
    const nameB = this.employeeDataService.getFullName(b)
    return this.isAscending? (nameA).localeCompare(nameB) : (nameB).localeCompare(nameA)
  })
}

}
