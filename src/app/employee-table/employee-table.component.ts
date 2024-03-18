import { Component, OnInit } from '@angular/core';
import { EmployeeDataService } from '../employee-data.service';

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.css']
})
export class EmployeeTableComponent implements OnInit{


totalPages!: number;
noofRecords: number = 10;
startIndex:number = 1001;
currentPage:number = 1
employees:any=[]

constructor(private employeeDataService:EmployeeDataService){}

ngOnInit(): void {
this.loadDataFromApi();
  
}

  // Pagination functionality
  loadDataFromApi(){
    this.employeeDataService.getEmployeesFromApi(this.noofRecords, this.startIndex).subscribe((data => {
      console.log('api response',data)
      this.employees = data
    }))
  }

  onPageChange(event:any){
    this.currentPage = event;
    const initialIndex = ((this.currentPage - 1) * this.noofRecords) + this.startIndex
    this.employeeDataService.getEmployeesFromApi(this.noofRecords, initialIndex).subscribe((data => {
      console.log('api response',data)
      this.employees = data
    }))
  }

}
