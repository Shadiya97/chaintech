export interface Employee{
    name?:EmployeeName;
    age:number | string;
    phone:string;
    address:string
}

export interface EmployeeName{
    first?:string;
    middle?:string;
    last?:string;
  }