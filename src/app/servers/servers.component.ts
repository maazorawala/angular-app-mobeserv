import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',// use div attribute
  //selector:'.app-servers',// use class
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
