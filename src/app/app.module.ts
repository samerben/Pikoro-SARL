import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TasksComponent } from './tasks/tasks.component';
import { FormsModule } from '@angular/forms';
import { AddTaskComponent } from './add-task/add-task.component'
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {DatePipe} from '@angular/common';
import { UpdateTaskComponent } from './update-task/update-task.component';



@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    AddTaskComponent,
    UpdateTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule, HttpClientModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
