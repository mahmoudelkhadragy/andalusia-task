import { Injectable } from '@angular/core';
import { Department } from './../models/department.model';

@Injectable({
  providedIn: 'root',
})
export class DepatmentsService {
  private departments: Department[] = [
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

  getDepartments(): Department[] {
    return this.departments;
  }

  getDepartmentName(num: number): string {
    let departName = '';
    for (const dep of this.departments) {
      if (dep.id === num) {
        departName = dep.depName;
      }
    }
    return departName;
  }
}
