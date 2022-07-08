import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';



@Component({
  selector: 'contact-form',
  templateUrl: './newcomponent.component.html',
  styleUrls: ['./newcomponent.component.css'],
})
export class NewcomponentComponent  {
  @ViewChild('f') signupForm:NgForm;
  defaultValue='maaz';
  user={
    fistname:'',
    lastname:'',
    search:'',
    dateandtime:'',
    month:'',
    email:'',
    password:'',
    mobile:'',
    time:'',
    url:'',
    week:'',
    comment:'',
    radio:'',
    checkbox:'',

  };

  
  log(x: any) {
    console.log(x);
  }
  logLastName(y: any) {
    console.log(y);
  }

  onSubmit(){
    console.log(this.signupForm);
  }

numbersOnlyValidator(event: any) {
    const pattern = /^[0-9\-]*$/;
    if (!pattern.test(event.target.value)) {
      event.target.value = event.target.value.replace(/[^0-9\-]/g, '');
    }
  }



  
}
