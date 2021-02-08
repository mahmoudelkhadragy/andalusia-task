import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DepatmentsService } from './../../../services/depatments.service';
import { EmployeesService } from './../../../services/employees.service';
import { Department } from './../../../models/department.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss'],
})
export class AddEmployeeComponent implements OnInit {
  departments: Department[] = [];
  genders = ['Male', 'Female'];
  employeeForm: FormGroup;
  empadded = false;

  constructor(
    private datePipe: DatePipe,
    private departmentService: DepatmentsService,
    private empService: EmployeesService
  ) {
    this.employeeForm = new FormGroup({
      empName: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[A-Za-z][A-Za-z'-]+([ A-Za-z][A-Za-z'-]+)*/),
      ]),
      empDepartment: new FormControl('', [Validators.required]),
      empCode: new FormControl('', [Validators.required]),
      empBirthDate: new FormControl('', [Validators.required]),
      empGender: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.departments = this.departmentService.getDepartments();
    this.formInit();
  }

  addEmployee(): void {
    const employeeForm = {
      ...this.employeeForm.value,
      empBirthDate: this.datePipe.transform(
        this.employeeForm.value.empBirthDate,
        'yyyy-MM-dd'
      ),
    };
    if (this.employeeForm.valid) {
      this.empService.addEmployee(employeeForm);
      this.empadded = true;
      setTimeout(() => {
        this.empadded = false;
      }, 1000);
    }
  }

  // isPositiveNumber(control: FormControl): { [s: string]: boolean } | null {
  //   const empCode = Number(control.value);
  //   if (typeof empCode === 'number' && empCode >= 0) {
  //     return { empCodeValid: true };
  //   }
  //   return null;
  // }

  formInit(): void {
    // to set initial value to day to the birthday
    const today = new Date();

    this.employeeForm = new FormGroup({
      empName: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[A-Za-z][A-Za-z'-]+([ A-Za-z][A-Za-z'-]+)*/),
      ]),
      empDepartment: new FormControl('', [Validators.required]),
      empCode: new FormControl('', [Validators.required]),
      empBirthDate: new FormControl(today, [Validators.required]),
      empGender: new FormControl('', [Validators.required]),
    });
  }
}
