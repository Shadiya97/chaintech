import { Component, OnInit } from '@angular/core';
import { Employee, EmployeeName } from '../employee.model';
import { EmployeeDataService } from '../employee-data.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit{

isNameAscending:boolean = false;
isAgeAscending:boolean = false;
searchName:string='';
employees: Employee[] =[]
filteredEmployees: Employee[]=[];

constructor(private employeeDataService:EmployeeDataService){}

ngOnInit(): void {
  this.employees = this.employeeDataService.employees;
  this.filteredEmployees = [...this.employees];

}

  toggleSortNameOrder(){
    this.isNameAscending = !this.isNameAscending
  }
  toggleSortAgeOrder(){
    this.isAgeAscending = !this.isAgeAscending
  }

  searchEmployees(){
    if(this.searchName === ''){
      this.filteredEmployees = [...this.employees];
    }
    this.filteredEmployees = this.employees.filter((employee:Employee)=>{
     const employeeName = this.employeeDataService.getFullName(employee);
     return employeeName.toLowerCase().includes(this.searchName.toLowerCase())
    })
  }

  cancelSearch(){
    this.searchName='';
    this.filteredEmployees = [...this.employees];
  }
}
