import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDataService {

  filteredListEmitter = new BehaviorSubject<Employee[]>(this.getEmployees());
  // employeeObservable = this.filteredListEmitter.asObservable();
  constructor() {
    this.filteredListEmitter.next(this.getEmployees());
   }

  readonly employees: Employee[] = [
    {  name: {first:'Rahul',middle:'Kumar',last:'Sharma'}, age: 20, phone: '1234567893', address: '123 Ramoji St' },
    {  name: {first:'Rahul',last:'Sharma'}, age: 46, phone: '1234567892', address: '123 Mahal St' },
    {  name: {middle:'Rahul'}, age: 22, phone: '1234567891', address: '123 Metal St' },
    {  age: 50, phone: '1234567890', address: '123 Steel St' },
    {  name: {first:'Tom', last:'Mathew'}, age: 35, phone: '9876543210', address: '456 Garden St' },
    {  name: {first:'Aneeza',last:'Begum'}, age: 17, phone: '5551234567', address: '789 Pine St' },
    {  name: {first:'Parvathy',last:'Patil'}, age: 28, phone: '1112223333', address: '321 Hill St' },
    {  name: {first:'Angel', middle:'Rose', last:'Thomas'}, age: 70, phone: '4445556666', address: '555 Bush St' },
    {  name: {first:'Sam', last:'Mathew'}, age: '60', phone: '7778889999', address: '999 Flower St' },
    {  name: {first:'Ayesha', last:'Sulthana'}, age: 45, phone: '3334445555', address: '777 Mountain St' },
    {  name: {first:'Kiran', last:'Bedi'}, age: 22, phone: '6667778888', address: '222 Rock St' },
    {  name: {first:'Pranav', last:'Pillai'}, age: 31, phone: '9990001111', address: '888 Sand St' },
    {  name: {first:'Omana', last:'Nandakumar'}, age: 18, phone: '2223334444', address: '444 Desert St' },
    {  name: {first:'Rahul',middle:'Kumar',last:'Sharma'}, age: 20, phone: '1234567893', address: '123 Ramoji St' },
    {  name: {first:'Rahul',last:'Sharma'}, age: 46, phone: '1234567892', address: '123 Mahal St' },
    {  name: {middle:'Rahul'}, age: 22, phone: '1234567891', address: '123 Metal St' },
    {  age: 50, phone: '1234567890', address: '123 Steel St' },
    {  name: {first:'Tom', last:'Mathew'}, age: 35, phone: '9876543210', address: '456 Garden St' },
    {  name: {first:'Aneeza',last:'Begum'}, age: 17, phone: '5551234567', address: '789 Pine St' },
    {  name: {first:'Parvathy',last:'Patil'}, age: 28, phone: '1112223333', address: '321 Hill St' },
    {  name: {first:'Angel', middle:'Rose', last:'Thomas'}, age: 70, phone: '4445556666', address: '555 Bush St' },
    {  name: {first:'Sam', last:'Mathew'}, age: '60', phone: '7778889999', address: '999 Flower St' },
    {  name: {first:'Ayesha', last:'Sulthana'}, age: 45, phone: '3334445555', address: '777 Mountain St' },
    {  name: {first:'Kiran', last:'Bedi'}, age: 22, phone: '6667778888', address: '222 Rock St' },
    {  name: {first:'Pranav', last:'Pillai'}, age: 31, phone: '9990001111', address: '888 Sand St' },
    {  name: {first:'Omana', last:'Nandakumar'}, age: 18, phone: '2223334444', address: '444 Desert St' },
    {  name: {first:'Rahul',middle:'Kumar',last:'Sharma'}, age: 20, phone: '1234567893', address: '123 Ramoji St' },
    {  name: {first:'Rahul',last:'Sharma'}, age: 46, phone: '1234567892', address: '123 Mahal St' },
    {  name: {middle:'Rahul'}, age: 22, phone: '1234567891', address: '123 Metal St' },
    {  age: 50, phone: '1234567890', address: '123 Steel St' },
    {  name: {first:'Tom', last:'Mathew'}, age: 35, phone: '9876543210', address: '456 Garden St' },
    {  name: {first:'Aneeza',last:'Begum'}, age: 17, phone: '5551234567', address: '789 Pine St' },
    {  name: {first:'Parvathy',last:'Patil'}, age: 28, phone: '1112223333', address: '321 Hill St' },
    {  name: {first:'Angel', middle:'Rose', last:'Thomas'}, age: 70, phone: '4445556666', address: '555 Bush St' },
    {  name: {first:'Sam', last:'Mathew'}, age: '60', phone: '7778889999', address: '999 Flower St' },
    {  name: {first:'Ayesha', last:'Sulthana'}, age: 45, phone: '3334445555', address: '777 Mountain St' },
    {  name: {first:'Kiran', last:'Bedi'}, age: 22, phone: '6667778888', address: '222 Rock St' },
    {  name: {first:'Pranav', last:'Pillai'}, age: 31, phone: '9990001111', address: '888 Sand St' },
    {  name: {first:'Omana', last:'Nandakumar'}, age: 18, phone: '2223334444', address: '444 Desert St' },
    {  name: {first:'Rahul',middle:'Kumar',last:'Sharma'}, age: 20, phone: '1234567893', address: '123 Ramoji St' },
    {  name: {first:'Rahul',last:'Sharma'}, age: 46, phone: '1234567892', address: '123 Mahal St' },
    {  name: {middle:'Rahul'}, age: 22, phone: '1234567891', address: '123 Metal St' },
    {  age: 50, phone: '1234567890', address: '123 Steel St' },
    {  name: {first:'Tom', last:'Mathew'}, age: 35, phone: '9876543210', address: '456 Garden St' },
    {  name: {first:'Aneeza',last:'Begum'}, age: 17, phone: '5551234567', address: '789 Pine St' },
    {  name: {first:'Parvathy',last:'Patil'}, age: 28, phone: '1112223333', address: '321 Hill St' },
    {  name: {first:'Angel', middle:'Rose', last:'Thomas'}, age: 70, phone: '4445556666', address: '555 Bush St' },
    {  name: {first:'Sam', last:'Mathew'}, age: '60', phone: '7778889999', address: '999 Flower St' },
    {  name: {first:'Ayesha', last:'Sulthana'}, age: 45, phone: '3334445555', address: '777 Mountain St' },
    {  name: {first:'Kiran', last:'Bedi'}, age: 22, phone: '6667778888', address: '222 Rock St' },
    {  name: {first:'Pranav', last:'Pillai'}, age: 31, phone: '9990001111', address: '888 Sand St' },
    {  name: {first:'Omana', last:'Nandakumar'}, age: 18, phone: '2223334444', address: '444 Desert St' },
    {  name: {first:'Rahul',middle:'Kumar',last:'Sharma'}, age: 20, phone: '1234567893', address: '123 Ramoji St' },
    {  name: {first:'Rahul',last:'Sharma'}, age: 46, phone: '1234567892', address: '123 Mahal St' },
    {  name: {middle:'Rahul'}, age: 22, phone: '1234567891', address: '123 Metal St' },
    {  age: 50, phone: '1234567890', address: '123 Steel St' },
    {  name: {first:'Tom', last:'Mathew'}, age: 35, phone: '9876543210', address: '456 Garden St' },
    {  name: {first:'Aneeza',last:'Begum'}, age: 17, phone: '5551234567', address: '789 Pine St' },
    {  name: {first:'Parvathy',last:'Patil'}, age: 28, phone: '1112223333', address: '321 Hill St' },
    {  name: {first:'Angel', middle:'Rose', last:'Thomas'}, age: 70, phone: '4445556666', address: '555 Bush St' },
    {  name: {first:'Sam', last:'Mathew'}, age: '60', phone: '7778889999', address: '999 Flower St' },
    {  name: {first:'Ayesha', last:'Sulthana'}, age: 45, phone: '3334445555', address: '777 Mountain St' },
    {  name: {first:'Kiran', last:'Bedi'}, age: 22, phone: '6667778888', address: '222 Rock St' },
    {  name: {first:'Pranav', last:'Pillai'}, age: 31, phone: '9990001111', address: '888 Sand St' },
    {  name: {first:'Omana', last:'Nandakumar'}, age: 18, phone: '2223334444', address: '444 Desert St' },
  ];

  getEmployees(){
    return this.employees;
  }

}
