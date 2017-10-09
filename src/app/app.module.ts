import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {AppRoutingModule} from './app.route.module'
import { AppComponent } from './app.component';
import {HomeComponent} from '../home/home.component';
import {StudentComponent} from '../students/student.component';
import {PageNotFoundComponent} from './page-not-found.component'

import {StudentModule} from '../students/student.module'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StudentModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
