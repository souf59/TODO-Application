import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import Todo from '../classes/Todo.model';
import _ from 'lodash';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
newTodo : string;
  @Input()
  todo: Todo;

  @Output()
  todoListevent: EventEmitter<Todo> = new EventEmitter<Todo>();

  newEvent(newTodo) {
    if (newTodo.value.trim().length) {
      this.todoListevent.emit(new Todo(this.newTodo, false));
      console.log(newTodo.value);
    }
    else      {
      throw new Error(' veuillez recommencer');
    }
  }

  constructor() {
  }


  ngOnInit() {

  }

}
