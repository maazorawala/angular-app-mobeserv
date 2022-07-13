import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'contact-form',
  templateUrl: './newcomponent.component.html',
  styleUrls: ['./newcomponent.component.css'],
})
export class NewcomponentComponent {
  @ViewChild('f') signupForm: NgForm;
  defaultValue = 'maaz';
  answernew = '';

  finalObj: any = {
    search: '',
    firstname: '',
    lastname: '',
    textarea: '',
    entryTime: '',
    month: '',
    email: '',
    password: '',
    mobile: '',
    time: '',
    url: '',
    week: '',
    comment: '',
    radio: '',
    checkbox: '',
  };

  log(x: any) {
    console.log(x);
  }
  logLastName(y: any) {
    console.log(y);
  }
  onSubmit() {
    console.log(this.signupForm);

    this.finalObj.search = (<HTMLInputElement>(
      document.getElementById('search')
    )).value;

    this.finalObj.firstname = (<HTMLInputElement>(
      document.getElementById('firstName')
    )).value;

    this.finalObj.lastname = (<HTMLInputElement>(
      document.getElementById('lastName')
    )).value;

    this.finalObj.textarea = (<HTMLTextAreaElement>(
      document.getElementById('textArea')
    )).value;

    this.finalObj.entryTime = (<HTMLInputElement>(
      document.getElementById('datetime-local')
    )).value;

    this.finalObj.month = (<HTMLInputElement>(
      document.getElementById('month')
    )).value;

    this.finalObj.email = (<HTMLInputElement>(
      document.getElementById('email')
    )).value;

    this.finalObj.password = (<HTMLInputElement>(
      document.getElementById('password')
    )).value;

    this.finalObj.mobile = (<HTMLInputElement>(
      document.getElementById('tel')
    )).value;

    this.finalObj.time = (<HTMLInputElement>(
      document.getElementById('time')
    )).value;

    this.finalObj.url = (<HTMLInputElement>(
      document.getElementById('url')
    )).value;

    this.finalObj.week = (<HTMLInputElement>(document.getElementById('week'))).value;

    this.finalObj.comment = (<HTMLInputElement>(document.getElementById('comment'))).value;

    this.finalObj.radio = (<HTMLInputElement>(document.getElementById('radio'))).value;

    this.finalObj.checkbox = (<HTMLInputElement>(document.getElementById('checkbox'))).value;

    console.log(this.finalObj.checkbox);
  }

  numbersOnlyValidator(event: any) {
    const pattern = /^[0-9\-]*$/;
    if (!pattern.test(event.target.value)) {
      event.target.value = event.target.value.replace(/[^0-9\-]/g, '');
    }
  }
}
