import { Component, OnInit, Input, Output} from '@angular/core';
import Todo from '../classes/Todo.model';
import { TodoService} from '../service/TodoService';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
})
export class TodoListComponent implements OnInit {


  todoList: Array<Todo> = [];
  todo : Todo;

  constructor(private todoService:TodoService) {
  }

  deleteTodos() {
    this.todoService.deleteServiceTodo().then(( todo)=>{
      this.todoList = todo;
    });

  }



  ngOnInit() {

  }

}
