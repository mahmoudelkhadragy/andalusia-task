import { Injectable, EventEmitter } from '@angular/core';
import { Employee } from './../models/eployee.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  employees: Employee[] = [];

  empSub = new Subject<Employee[]>();

  constructor() {}

  addEmployee(employee: Employee): void {
    const emp = { ...employee };
    this.employees.push(emp);
    localStorage.setItem('employees', JSON.stringify(this.employees));
  }
}
