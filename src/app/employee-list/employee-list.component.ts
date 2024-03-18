import { Component, OnDestroy, OnInit } from '@angular/core';
import { Employee } from '../employee.model';
import { EmployeeDataService } from '../employee-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit, OnDestroy{

filteredEmployees: Employee[]=[];
filteredListSubscription!: Subscription;
totalPages!: number;
itemsPerPage: number = 10;
paginatedEmployees:Employee[]=[]
currentPage:number=1;

constructor(private employeeDataService:EmployeeDataService){}

ngOnInit(): void {

  this.filteredListSubscription = this.employeeDataService.filteredListEmitter.subscribe(filteredList => {
    this.currentPage = 1;
    this.filteredEmployees = filteredList;
    console.log('filtered List', filteredList);
    this.calculateTotalPages();
    this.updatePaginatedEmployees();
    
  })
  
}

  ngOnDestroy(): void {
    this.filteredListSubscription.unsubscribe();
  }

  // Pagination functionality
  calculateTotalPages(){
    this.totalPages = Math.ceil(this.filteredEmployees.length / this.itemsPerPage);
  }

  // Create an array of page numbers for pagination
  getPages(){
    const pages = [];

    for(let i=1; i <= this.totalPages;i++){
      pages.push(i);
    }

    return pages;
  }

  changePage(newPage: number){
    this.currentPage = newPage;
    this.updatePaginatedEmployees();
  }

  // Update the array of paginated employees
  updatePaginatedEmployees(){
  
    const startIndex = (this.currentPage-1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;

    this.paginatedEmployees = this.filteredEmployees.slice(startIndex, endIndex);
  }

  previousPage(){
    if(this.currentPage > 1){
      this.changePage(this.currentPage - 1);
    }
  }

  nextPage(){
    if(this.currentPage < this.totalPages){
      this.changePage(this.currentPage + 1);
    }
  }

}
