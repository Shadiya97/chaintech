import { Component } from '@angular/core';
import { EmployeeDataService } from '../employee-data.service';
import { Employee } from '../employee.model';
import { FullnamePipe } from '../shared/pipes/fullname.pipe';

@Component({
  selector: 'app-employee-search',
  templateUrl: './employee-search.component.html',
  styleUrls: ['./employee-search.component.css']
})
export class EmployeeSearchComponent {
  employees: Employee[] =[] 
  filteredEmployees: Employee[]=[];
  searchName: string=''

  ngOnInit(){
  this.employees = this.employeeDataService.employees;
  this.filteredEmployees = [...this.employees];
  }

  constructor(private employeeDataService:EmployeeDataService, private fullNamePipe: FullnamePipe){}

  searchEmployees(){
    this.filteredEmployees = this.employees.filter((employee:Employee)=>{
      const employeeName = this.fullNamePipe.transform(employee.name);
       console.log('employeename',employeeName)
       console.log('search name', this.searchName)
      return (employeeName).toLowerCase().includes(this.searchName.toLowerCase())
     })
     this.employeeDataService.filteredListEmitter.next(this.filteredEmployees);
  }

  cancelSearch(){
    this.searchName='';
    this.filteredEmployees = [...this.employees];
    this.employeeDataService.filteredListEmitter.next(this.filteredEmployees);

  }
}
