import { templateJitUrl } from '@angular/compiler';
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
  submitted = false;
  
  employeeList: any = [
    {
    id: 1,
    name: 'E1'
  },{
    id: 2,
    name: 'E2'
  },{
    id: 3,
    name: 'E3'
  },{
    id: 4,
    name: 'E4'
  },{
    id:5,
    name:'E5'
  }];
  
  empList: any = ['E1','E2','E3','E4']
  genders = ['male', 'female'];

  formObj: any = {
    search: 'angular',
    name: 'maaz',
    lastname: 'orawala',
    answernew : 'sample',
    entryTime: '2022-07-14 15:51:39',
    entryTimeMonth: '2024-02',
    email: 'test@test.com',
    password: '13245',
    mobile: '8999979567',
    time: '21:35',
    url: 'https://maazorawala.github.io/Sneaker-Store-Website/',
    week: '2004-W04',
    comment: 'nnnnnnnnnnnnnnnnnn',
    radio: 'male',
    checkbox: 1,
    dropdown1:'E4',
    dropdown2:{}

  };
  
  constructor(){

    setTimeout(()=>{
      this.formObj.dropdown2 = {
    "id": 5,
    "name": "E5"
  }
    },500)

  }

  /* Return true or false if it is the selected */
 compareByOptionId(idFist, idSecond) {
    return idFist && idSecond && idFist.id == idSecond.id && idFist.name == idSecond.name;
 }
  
  // finalObj: any = {
  //   search: '',
  //   firstname: '',
  //   lastname: '',
  //   textarea: '',
  //   entryTime: '',
  //   month: '',
  //   email: '',
  //   password: '',
  //   mobile: '',
  //   time: '',
  //   url: '',
  //   week: '',
  //   comment: '',
  //   radio: '',
  //   checkbox: '',
  // };

  // suggestUserName(){
  //   const suggestedName = "Superuser";
  //   this.signupForm.setValue({
  //     userData: {
  //       firstName: suggestedName,
  //       lastName: '',
  //       datetimelocal: '',
  //       search: '',
  //       questionAnswer: 'ffefe',

  //       month: '',
  //       email: '',
  //       password: '',
  //       tel: '',
  //       time: '',
  //       url: '',
  //       week: '',
  //       comment: '',
  //       radio: 'male',
  //       checkbox: '',
  //     },
  //   });
  // }

  log(x: any) {
    console.log(x);
  }
  logLastName(y: any) {
    console.log(y);
  }
counter(i: number) {
    return new Array(i);
}
  onSubmit() {
    this.submitted = true;
    console.log(this.signupForm);
    console.log(this.employeeList);
    /*
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
      document.getElementById('datetimelocal')
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
*/
    
    
  }

  numbersOnlyValidator(event: any) {
    const pattern = /^[0-9\-]*$/;
    if (!pattern.test(event.target.value)) {
      event.target.value = event.target.value.replace(/[^0-9\-]/g, '');
    }
  }
}
