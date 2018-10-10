import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../models/employee';
import { EmployeeService } from '../services/employee.service';

@Component({
    selector: 'ansh-edit-employee',
    templateUrl: './edit-employee.component.html'
})
export class EditEmployeeComponent implements OnInit {
    
    // holds employee details
    employeeDetails: Employee;
    
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private employeeService: EmployeeService
    ) { }

    ngOnInit() {
        let id = +this.route.snapshot.paramMap.get('id');
        this.employeeDetails = this.employeeService.getEmployeeDetails(id);
    }

    // called on save event from child component
    // updates employee
    saveDetails(updatedEmployeeDetails: Employee) {
        if(this.employeeService.updateEmployeeDetails(updatedEmployeeDetails)){
            this.router.navigate(['/employees']);
        }
    }

}