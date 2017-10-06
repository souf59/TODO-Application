import {Injectable} from '@angular/core';
import Todo from '../classes/Todo.model';
import {TodoApi} from './todo.api';


@Injectable()
export class TodoService  {
  constructor( private todoApi: TodoApi) {
  }
  deleteServiceTodo(): Promise <Array<Todo>> {
    return this.todoApi.deletefecthTodo();

  }
}

