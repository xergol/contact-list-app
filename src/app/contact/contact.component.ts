import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [ContactService]
})
export class ContactComponent implements OnInit {
  updateIndex: any;
  contacts: any;
  curentContacts: any;
  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.contactService.getData().subscribe(
      response => {
        console.log(response);
        this.contacts = response;
      }
    );
  }

  createContact(cfirst: HTMLInputElement, clast: HTMLInputElement,
                cemail: HTMLInputElement, cphone: HTMLInputElement, cstatus: HTMLInputElement) {

    const newcontact = {
      firstName: cfirst.value,
      lastName: clast.value,
      email: cemail.value,
      phone: cphone.value,
      status: cstatus.value
    };

    cfirst.value = '';
    clast.value = '';
    cemail.value = '';
    cphone.value = '';
    cstatus.value = '';

    this.contactService.makeAContact(newcontact)
      .subscribe(response => {
        console.log(response);
      });


  }

  getCurrentData(contact) {
    console.log(contact);
    this.curentContacts = contact;
    $('#firstNameEdit').val(this.curentContacts.firstName);
    $('#lastNameEdit').val(this.curentContacts.lastName);
    $('#emailEdit').val(this.curentContacts.email);
    $('#phoneEdit').val(this.curentContacts.phone);
    $('#statusEdit').val(this.curentContacts.status);

    const contactIndex = this.contacts.indexOf(contact);
    console.log(contactIndex);

    this.updateIndex = contactIndex;

  }


  editContact(cfirstedit: HTMLInputElement, clastedit: HTMLInputElement,
              cemailedit: HTMLInputElement, cphoneedit: HTMLInputElement, cstatusedit: HTMLInputElement) {

    const updatecontact = {
      firstName: cfirstedit.value,
      lastName: clastedit.value,
      email: cemailedit.value,
      phone: cphoneedit.value,
      status: cstatusedit.value
    };

    console.log(updatecontact);

    this.contactService.updateContact(this.updateIndex, updatecontact)
      .subscribe(response => {
        console.log(response);
      });
  }



  trashContact() {
    this.contactService.deleteContact(this.updateIndex)
      .subscribe(response => {
        console.log(response);
      });
  }

}
