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

isNameAscending:boolean = false;
isAgeAscending:boolean = false;
searchName:string='';
filteredEmployees: Employee[]=[];
filteredListSubscription!: Subscription

constructor(private employeeDataService:EmployeeDataService){}

ngOnInit(): void {

  this.filteredListSubscription = this.employeeDataService.filteredListEmitter.subscribe(filteredList => {
    this.filteredEmployees = filteredList;
    console.log('filtered List', filteredList);
  })
}

  toggleSortNameOrder(){
    this.isNameAscending = !this.isNameAscending
  }
  toggleSortAgeOrder(){
    this.isAgeAscending = !this.isAgeAscending
  }

  ngOnDestroy(): void {
    this.filteredListSubscription.unsubscribe();
  }

}
