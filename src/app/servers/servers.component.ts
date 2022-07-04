import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',// use div attribute
  //selector:'.app-servers',// use class
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {

  allowNewServer:boolean = false;
  serverCreationStatus = 'No server was created';
  serverName="TestServer";
  serverCreated = false;
  servers=['TestServer', 'TestServer 2', 'TestServer3']

  constructor() {
    setTimeout(() =>{
      this.allowNewServer = true;
    },4000 )
  }

  ngOnInit(): void {}
  onCreateServer(){
    this.serverCreationStatus ="Server was created! Name is " + this.serverName;
    this.servers.push(this.serverName);
    this.serverCreated = true;
  }
  
  onUpdateServerName(event: any){
    console.log(event);
    this.serverName = event.target.value;
  }
}
