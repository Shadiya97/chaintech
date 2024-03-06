import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee.model';
import { EmployeeDataService } from '../employee-data.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit{

isNameAscending:boolean = false;
isAgeAscending:boolean = false;
employees: Employee[] =[]

constructor(private employeeDataService:EmployeeDataService){}

ngOnInit(): void {
  this.employees = this.employeeDataService.employees
}

  toggleSortNameOrder(){
    this.isNameAscending = !this.isNameAscending
  }
  toggleSortAgeOrder(){
    this.isAgeAscending = !this.isAgeAscending
  }
}
