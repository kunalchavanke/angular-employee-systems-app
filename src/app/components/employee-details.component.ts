import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Employee, Address } from '../models/employee';

@Component({
  selector: 'ansh-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  // holds name of employee
  name: string = '';
  // holds phone number of employee
  phone: string = '';
  // holds city name of employee
  city: string = '';
  // holds address line 1 of employee
  addressLine1: string = '';
  // holds address line 2 of employee
  addressLine2: string = '';
  // holds postal code of employee
  postalCode: string = '';
  // determines whether name property has value
  nameIsEmpty: boolean;
  // determines if name has mininum required length
  nameMinLengthError: boolean
  // determines whether phone property has value
  phoneIsEmpty: boolean;
  // determines if name has mininum required length
  phoneIsInvalid: boolean
  // holds employee details
  @Input() employeeDetails: Employee;
  // save event, triggered after save validations
  @Output() saveDetails = new EventEmitter<Employee>();
  // holds id of employee
  private id: number;

  ngOnInit() {
    if (this.employeeDetails) {
      this.initializeEmployee(this.employeeDetails);
    }
  }

  // initializes employee's properties
  private initializeEmployee(employeeDetails: Employee) {
    this.name = employeeDetails.name || '';
    this.phone = employeeDetails.phone || '';
    this.city = employeeDetails.address.city || '';
    this.addressLine1 = employeeDetails.address.address_line1 || '';
    this.addressLine2 = employeeDetails.address.address_line2 || '';
    this.postalCode = employeeDetails.address.postal_code || '';
  }

  private validateName(): boolean {
    this.name = this.name.trim();
    this.nameIsEmpty = false;
    this.nameMinLengthError = false;
    if (!this.name) {
      // empty check
      this.nameIsEmpty = true;
      return false;
    } else if (this.name.length < 4) {
      // min length check
      this.nameMinLengthError = true;
      return false;
    }
    return true;
  }

  private validatePhone(): boolean {
    this.phone = this.phone.trim();
    this.phoneIsEmpty = false;
    this.phoneIsInvalid = false;
    if (!this.phone) {
      // empty check
      this.phoneIsEmpty = true;
      return false;
    } else if (isNaN(+this.phone)) {
      // not a number check
      this.phoneIsInvalid = true;
      return false;
    }
    return true;
  }

  // called on click of save button
  // emits saveDetails event passing employee details
  save() {
    // validate data
    if (this.validateName() && this.validatePhone()) {
      // create employee
      let tempEmployee: Employee = {
        name: this.name,
        phone: this.phone,
        address: {
          city: this.city,
          address_line1: this.addressLine1,
          address_line2: this.addressLine2,
          postal_code: this.postalCode
        },
      }
      if (this.employeeDetails && this.employeeDetails.id) {
        tempEmployee.id = this.employeeDetails.id;
      }
      // emit save event
      this.saveDetails.emit(tempEmployee);
    }
  }

}
