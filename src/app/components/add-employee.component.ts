import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { Employee } from '../models/employee';
import { EmployeeService } from '../services/employee.service';

@Component({
    selector: 'ansh-add-employee',
    templateUrl: './add-employee.component.html'
})
export class AddEmployeeComponent {

    constructor(
        private employeeService: EmployeeService,
        private router: Router,
    ) { }

    // called on save event from child component
    // adds new employee
    saveDetails(employeeDetails: Employee) {
        if (this.employeeService.addNewEmployee(employeeDetails)) {
            this.router.navigate(['/employees']);
        }
    }
}