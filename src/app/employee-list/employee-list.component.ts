import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee.model';
import { EmployeeDataService } from '../employee-data.service';
import { FullnamePipe } from '../shared/pipes/fullname.pipe';

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

constructor(private employeeDataService:EmployeeDataService, private fullNamePipe: FullnamePipe){}

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
   
    this.filteredEmployees = this.employees.filter((employee:Employee)=>{
     const employeeName = this.fullNamePipe.transform(employee.name);
      console.log('employeename',employeeName)
      console.log('search name', this.searchName)
     return (employeeName).toLowerCase().includes(this.searchName.toLowerCase())
    })
  }

  cancelSearch(){
    this.searchName='';
    this.filteredEmployees = [...this.employees];
  }
}
