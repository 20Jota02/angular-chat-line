import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule   } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DasboardComponent } from './componets/dasboard/dasboard.component';
import { HomeComponent } from './views/home/home.component';
import { RoomForumComponent } from './views/room-forum/room-forum.component';
import { CookieService } from 'ngx-cookie-service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewforumComponent } from './views/newforum/newforum.component';
import { NewuserComponent } from './views/newuser/newuser.component';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { LoginComponent } from './views/login/login.component';


const { v4: uuidv4 } = require('uuid');


const config: SocketIoConfig = {
  url: 'http://localhost:3000',
  options: {
    query: {
      nameQuestion: localStorage.getItem('name_room'),
      id_Question: uuidv4()
    }
  }
};

@NgModule({
  declarations: [
    AppComponent,
    DasboardComponent,
    HomeComponent,
    RoomForumComponent,
    NewforumComponent,
    NewuserComponent,
    LoginComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SocketIoModule.forRoot(config),
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    HttpClientModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
