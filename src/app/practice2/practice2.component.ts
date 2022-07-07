import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice2',
  templateUrl: './practice2.component.html',
  styleUrls: ['./practice2.component.css']
})
export class Practice2Component implements OnInit {
  showDetails=false;
  logDetails=[];
  i=0;
  

  constructor() { }

  ngOnInit(): void {
  }
  onToggle(){
    this.showDetails = !this.showDetails;
    this.i=this.i+1;
    this.logDetails.push(new Date());
    console.log(this.logDetails);
  }

}
