import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { Practice2Component } from './practice2/practice2.component';
import { AppComponent } from './app.component';
import { NewcomponentComponent } from './newcomponent/newcomponent.component';
import { ServerComponent } from './server/server.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  
  {
    path:'practice',
    component:Practice2Component
  },
  {
    path:'newcomponent',
    component:NewcomponentComponent
  },
  {
    path:'',
    component:HomeComponent
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
export const routingComponent = [Practice2Component, NewcomponentComponent,HomeComponent ]