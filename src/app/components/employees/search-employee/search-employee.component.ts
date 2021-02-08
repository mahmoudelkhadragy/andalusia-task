import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { DepatmentsService } from './../../../services/depatments.service';
import { Department } from './../../../models/department.model';
import { Employee } from './../../../models/eployee.model';

@Component({
  selector: 'app-search-employee',
  templateUrl: './search-employee.component.html',
  styleUrls: ['./search-employee.component.scss'],
})
export class SearchEmployeeComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'Name',
    'Employee Code',
    'Birthday',
    'Gender',
  ];
  searchEmp: FormGroup;
  departments: Department[] = [];
  empSrearchResult: Employee[] = [];

  constructor(private departmentService: DepatmentsService) {
    this.searchEmp = new FormGroup({
      empName: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[A-Za-z][A-Za-z'-]+([ A-Za-z][A-Za-z'-]+)*/),
      ]),
      empDepartment: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.departments = this.departmentService.getDepartments();
    this.initForm();
  }

  searchEmployee(): void {
    const { empName, empDepartment } = this.searchEmp.value;
    const empStr = localStorage.getItem('employees');
    const empArr = empStr ? JSON.parse(empStr) : null;
    const searchedEmp: Employee[] = [];
    if (empArr && this.searchEmp.valid) {
      empArr.map((emp: Employee) => {
        const empNameIn = emp.empName.toLocaleLowerCase();
        const empNameSearch = empName.toLocaleLowerCase();
        if (
          empNameIn === empNameSearch &&
          emp.empDepartment === empDepartment
        ) {
          searchedEmp.push(emp);
        }
      });
    }
    if (searchedEmp.length > 0) {
      this.empSrearchResult = [...searchedEmp];
    }
  }

  getDepName(num: number): string {
    return this.departmentService.getDepartmentName(num);
  }

  initForm(): void {
    this.searchEmp = new FormGroup({
      empName: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[A-Za-z][A-Za-z'-]+([ A-Za-z][A-Za-z'-]+)*/),
      ]),
      empDepartment: new FormControl('', [Validators.required]),
    });
  }
}
