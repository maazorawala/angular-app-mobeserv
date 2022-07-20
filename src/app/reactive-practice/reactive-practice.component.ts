import { Component, OnInit } from '@angular/core';
import { FormArray, FormArrayName, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive-practice.component.html',
  styleUrls: ['./reactive-practice.component.css']
})
export class ReactivePracticeComponent implements OnInit {
  genders=["male", "female"];
  // var name to hold our form
  signupForm:FormGroup;
  forbiddenUsernames=['Anna', 'Ann'];
  

  constructor(private formBuilder:FormBuilder ) { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'userData':new FormGroup({
        'username': new FormControl(null,[Validators.required, this.forbiddenNames.bind(this)]),
        'email':new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails  ),
      }),
      'gender':new FormControl(null),  
      'hobbies':new FormArray([]),
    });
    // this.signupForm.valueChanges.subscribe(
    //   (value) => console.log(value)
    // )
    this.signupForm.statusChanges.subscribe(
      (status) => console.log(status)
      );

      //statusValue is used to change the data in the form 

      this.signupForm.patchValue({
        'userData':{
          'username':'Max',
          'email':'max@gmail.com',
        },
        'gender':'male',
        'hobbies':[]
      })
  }

  onSubmit(){
    console.log(this.signupForm);
  }

  get Controls(){
    return (this.signupForm.get('hobbies') as FormArray).controls; 
 }
    onAddHobby() {
      const control = new FormControl(null,Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control) 
    
  }
  
    forbiddenNames(control: FormControl): {[s: string]: boolean} {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1 ) {
      return {'nameIsForbidden': true};
    }
    return null;
  }
 // asynchronous validators wait for a response before returning a value of true or false

 // Asynchronous programming is a technique that enables your program to start a potentially long-running task and still be able to be responsive to other events while that task runs, rather than having to wait until that task has finished

 // We use asynchronous validators to send the data to the http servers to check if the data we sent is valid or not 
  forbiddenEmails(control: FormControl): Promise<any> | Observable<any>{
    const promise = new Promise<any>((resolve, reject) =>{
      setTimeout(() =>{
        if(control.value === 'test@test.com'){
          resolve({'emailIsForbidden':true});
        }
        else{
          resolve(null);
        }
      },1500);
    });
    return promise;
  }
}
