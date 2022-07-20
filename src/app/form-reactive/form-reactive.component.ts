import { Component, OnInit } from '@angular/core';
import { FormArray, FormArrayName, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.css']
})
export class FormReactiveComponent implements OnInit {
  paymentTypes=["Paytm", "RWallet", "UPI or Payment gateway"];
  dropDownArray=["Option1","Option2","Option3","Option4"];
  jobSearchArray=["Full Time", "Part Time", "Internship", "Freelance"];
  registerForm:FormGroup;
  formDataObj={}

  constructor() { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
    'userData': new FormGroup({
      'firstName': new FormControl('Maaz', Validators.required),
      'lastName': new FormControl('Orawala'),
    }),

    'search': new FormControl('Searching...'),
    'textArea': new FormControl('TextArea input fields'),
    'entryTime': new FormControl(null),
    'month': new FormControl(null),
    'email': new FormControl("test@test.com", [Validators.required, Validators.email]),

    'password': new FormControl(null, [Validators.required, Validators.minLength(8)]),
    
    'mobile': new FormControl("8999979567", [ Validators.minLength(10), Validators.maxLength(10)]),
    'time': new FormControl(null),
    'url': new FormControl(null),
    'week': new FormControl(null),
    'comment': new FormControl("Sample text to fill the text area"),
    'paymentMethod':new FormControl('RWallet', Validators.required),
    'dropDown': new FormControl("Option3"),
    'jobSearch': new FormControl("Full Time"),

    })
  }

  

 numbersOnlyValidator(event: any) {
    const pattern = /^[0-9\-]*$/;
    if (!pattern.test(event.target.value)) {
      event.target.value = event.target.value.replace(/[^0-9\-]/g, '');
    }
  }

  onSubmit(){
    console.log(this.registerForm);
    
    this.formDataObj={
    comment:this.registerForm.value.comment,
    dropdown:this.registerForm.value.jobSearch,
  }
  }

}
//search, name, lastname, textarea, entryTime, month, email, password, mobile, time, url, week, comment, radio, dropdown, checkbox, submit