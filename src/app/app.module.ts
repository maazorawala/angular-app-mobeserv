import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AlertModule } from 'ngx-bootstrap/alert';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule, routingComponent } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatIconModule} from '@angular/material/icon';
import { ReactivePracticeComponent } from './reactive-practice/reactive-practice.component';
import { FormReactiveComponent } from './form-reactive/form-reactive.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    routingComponent,
    HomeComponent,
    ReactivePracticeComponent,
    FormReactiveComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    AppRoutingModule,
    AlertModule.forRoot(),
    BrowserAnimationsModule,
    MatIconModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
