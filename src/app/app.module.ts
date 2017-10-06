import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todolist/todolist.component';
import { TodoItemComponent } from './todoitem/todoitem.component';
import { FormComponent } from './form/form.component';
import {TodoApi} from './service/todo.api';
import {TodoService} from './service/TodoService';
import {ApiserviceService} from "./services/apiservice.service";

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoItemComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [TodoApi,TodoService,ApiserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

