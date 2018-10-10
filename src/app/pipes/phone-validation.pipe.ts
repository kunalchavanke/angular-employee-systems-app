import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'anshPhoneValidation' })
export class PhoneValidationPipe implements PipeTransform {

    transform(phone: string): string {
        // check if phone number is not a numeric value
        if (isNaN(+phone)) {
            return 'NA';
        } else {
            return phone;
        }
    }
}