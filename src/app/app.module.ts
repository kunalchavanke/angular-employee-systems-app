import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import {
  MatToolbarModule,
  MatButtonModule,
  MatTableModule,
  MatSortModule
} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ViewEmployeeComponent } from './components/view-employee.component';
import { EmployeeDetailsComponent } from './components/employee-details.component';
import { AddEmployeeComponent } from './components/add-employee.component';
import { EditEmployeeComponent } from './components/edit-employee.component';
import { PhoneValidationPipe } from './pipes/phone-validation.pipe';

import { EmployeeService } from './services/employee.service';


@NgModule({
  declarations: [
    AppComponent,
    ViewEmployeeComponent,
    EmployeeDetailsComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
    PhoneValidationPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatTableModule,
    MatButtonModule,
    MatSortModule,
    FormsModule,
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
