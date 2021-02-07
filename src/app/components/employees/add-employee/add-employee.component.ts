import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss'],
})
export class AddEmployeeComponent implements OnInit {
  departments = [
    {
      id: 1,
      depName: 'dep1',
    },
    {
      id: 2,
      depName: 'dep2',
    },
    {
      id: 3,
      depName: 'dep3',
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  addEmplyee(empForm: NgForm) {}
}
