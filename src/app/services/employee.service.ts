import { Injectable } from '@angular/core';
import { Employee } from '../models/employee'

@Injectable()
export class EmployeeService {

    // holds all the employee data
    private employeeData: { data: Employee[] } = JSON.parse(
        `{
        "data": [{
            "id": 1,
            "name": "Jhon",
            "phone": "9999999999",
            "address":
            {
                "city": "Pune",
                "address_line1": "ABC road",
                "address_line2": "XYZ building",
                "postal_code": "12455"
            }
        }, {

            "id": 2,
            "name": "Jacob",
            "phone": "AZ99A99PQ9",
            "address":
            {
                "city": "Pune",
                "address_line1": "PQR road",
                "address_line2": "ABC building",
                "postal_code": "13455"
            }
        }, {
            "id": 3,
            "name": "Ari",
            "phone": "145458522",
            "address":
            {
                "city": "Mumbai",
                "address_line1": "ABC road",
                "address_line2": "XYZ building",
                "postal_code": "12455"
            }
        }]
    }`);

    // gets details of all the employees
    getAllEmployeeDetails(): Employee[] {

        return this.employeeData.data;
    }

    // gets details of the employee whose id is passed
    getEmployeeDetails(id: number): Employee {

        return this.employeeData.data.find(employee => employee.id === id);
    }

    // gets employee details that matches the filter value over name and city
    getFilteredData(filterValue: string): Employee[] {
        // remove whitespace
        filterValue = filterValue.trim().toLowerCase();
        // filter
        return this.employeeData.data.filter(employee =>
            employee.name.toLowerCase().includes(filterValue) ||
            employee.address.city.toLowerCase().includes(filterValue))
    }

    // adds new employee
    addNewEmployee(employee: Employee): boolean {
        employee.id = this.employeeData.data
            .reduce((tempId, employee) => employee.id > tempId ? employee.id : tempId, 0) + 1;
        this.employeeData.data.push(employee);
        return true;
    }

    // update employee details
    updateEmployeeDetails(employeeDetails: Employee): boolean {
        let employeeIndex = this.employeeData.data
            .findIndex(employee => employee.id === employeeDetails.id)
        if (employeeIndex) {
            this.employeeData.data[employeeIndex] = employeeDetails;
            return true;
        } else {
            return false;
        }
    }

}