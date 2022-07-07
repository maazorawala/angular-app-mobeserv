import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'contact-form',
  templateUrl: './newcomponent.component.html',
  styleUrls: ['./newcomponent.component.css'],
})
export class NewcomponentComponent  {
  form = this.fb.group({
    lessons:this.fb.array([])
  })

  constructor(private fb:FormBuilder){

  }

  log(x: any) {
    console.log(x);
  }
  logLastName(y: any) {
    console.log(y);
  }

numbersOnlyValidator(event: any) {
    const pattern = /^[0-9\-]*$/;
    if (!pattern.test(event.target.value)) {
      event.target.value = event.target.value.replace(/[^0-9\-]/g, '');
    }
  }

  
}
