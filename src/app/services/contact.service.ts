import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contacts: Array<object> = [
    { firstName: 'Conor', lastName: 'McGregor', email: 'McGregor@gmail.com', phone: 7974730773, status: 'Active' },
    { firstName: 'Jane', lastName: 'Smith', email: 'Smith@gmail.com', phone: 7974730273, status: 'Inative' },
    { firstName: 'Amit', lastName: 'Sharma', email: 'Amit@gmail.com', phone: 7974730373, status: 'Inative' },
    { firstName: 'Bhavesh', lastName: 'Murug', email: 'Bhavesh@gmail.com', phone: 7974760773, status: 'Active' },
    { firstName: 'Ankit', lastName: 'Shroti', email: 'Shroti@gmail.com', phone: 7974737773, status: 'Inative' }
  ];

  constructor() { }

  getData() {
    return of(this.contacts);
  }

  makeAContact(newcontact) {
    this.contacts.unshift(newcontact);
    return of(this.contacts);
  }

  updateContact(index, updatecontact) {
    this.contacts.splice(index, 1, updatecontact);
    return of(this.contacts);
  }

  deleteContact(contactIndex) {
    this.contacts.splice(contactIndex, 1);
    return of(this.contacts);
  }
}
