import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilesComponent } from './components/files/files.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SearchEmployeeComponent } from './components/employees/search-employee/search-employee.component';
import { AddEmployeeComponent } from './components/employees/add-employee/add-employee.component';

const routes: Routes = [
  { path: '', redirectTo: '/employees/addEmployee', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'files', component: FilesComponent },
  {
    path: 'employees',
    component: EmployeesComponent,
    children: [
      { path: 'addEmployee', component: AddEmployeeComponent },
      { path: 'searchEmployee', component: SearchEmployeeComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
