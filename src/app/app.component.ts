import { Component } from '@angular/core';
import Todo from './classes/Todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  todos: Array <Todo> = [
    new Todo('ecrire txt', false),
    new Todo('verfie txt', false),
    new Todo('supprime txt', false),
  ];


}
