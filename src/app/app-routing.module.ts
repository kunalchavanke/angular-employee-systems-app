import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ViewEmployeeComponent } from './components/view-employee.component';
import { AddEmployeeComponent } from './components/add-employee.component';
import { EditEmployeeComponent } from './components/edit-employee.component';

const routes: Routes = [
  { path: 'employees/:id/edit', component: EditEmployeeComponent },
  { path: 'employees/add', component: AddEmployeeComponent },
  { path: 'employees', component: ViewEmployeeComponent },
  { path: '', redirectTo: '/employees', pathMatch: 'full' }
  // { path: '**', component: ViewEmployeeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }