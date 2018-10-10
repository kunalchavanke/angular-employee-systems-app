import { Component, OnInit } from '@angular/core';
import { Sort } from "@angular/material/sort";
import { Employee } from '../models/employee';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'ansh-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {

  // holds employee details
  employees: Employee[] = [];
  // holds ordered colums to display of tables 
  displayedColumns = [
    'id',
    'name',
    'phone',
    'city',
    'address_line1',
    'address_line2',
    'postal_code',
    'edit'
  ];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    // get details of all the employees
    this.employees = this.employeeService.getAllEmployeeDetails();
  }

  // called on click of sort arrow of table header
  // sorts the table data in asc/dec order for selected column
  sortData(sort: Sort): number {
    if (!sort.active || sort.direction == '') {
      return;
    }
    // copy employee data
    let dataToSort = this.employees.slice();
    // sort
    this.employees = dataToSort.sort((a, b) => {
      let reverse = sort.direction == 'asc' ? 1 : -1;
      switch (sort.active) {
        case 'id':
          return this.compare(a.id, b.id) * reverse;
        case 'name':
          return this.compare(a.name, b.name) * reverse;
        case 'phone':
          return this.compare(a.phone, b.phone) * reverse;
        case 'city':
          return this.compare(a.address.city, b.address.city) * reverse;
        case 'address_line1':
          return this.compare(a.address.address_line1, b.address.address_line1) * reverse;
        case 'address_line2':
          return this.compare(a.address.address_line2, b.address.address_line2) * reverse;
        case 'postal_code':
          return this.compare(a.address.postal_code, b.address.postal_code) * reverse;
        default:
          return 0;
      }
    });
  }

  // called on keyup event of filter input box
  // gets data that matches the filter value over name and city
  filterData(filterValue: string) {
    // get filtered data
    this.employees = this.employeeService.getFilteredData(filterValue);
  }

  // compares two items, returns 
  // 1 => first item is greater than second
  // -1 => first item is less than second
  private compare(first: string | number, second: string | number): number {
    return (first < second ? -1 : 1)
  }

}
