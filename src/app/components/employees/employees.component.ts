import { Component, OnInit } from '@angular/core';
// import { Employee } from './../../models/eployee.model';
// import { EmployeesService } from './../../services/employees.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
})
export class EmployeesComponent implements OnInit {
  // employees: Employee[] = [];
  constructor() {}

  ngOnInit(): void {
    // this.getEmployeesFromStorage();
  }

  // getEmployeesFromStorage(): void {
  //   const empsString = localStorage.getItem('employees');
  //   let empArr;
  //   if (empsString) {
  //     empArr = JSON.parse(empsString);
  //   }
  //   console.log(empArr);
  //   this.empService.employeesUpdate.subscribe((employees: Employee[]) => {
  //     this.employees = employees;
  //   });
  // }
}
