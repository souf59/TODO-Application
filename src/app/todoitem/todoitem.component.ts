import {Component, OnInit, Input} from '@angular/core';
import Todo from '../classes/Todo.model';

@Component({
  selector: 'app-todoitem',
  templateUrl: './todoitem.component.html',
  styleUrls: ['./todoitem.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input()
  todo: Todo;

  constructor() {
  }

  ngOnInit() {
  }
  handleClick() {
    console.log('TODO', this.todo);
  }
}
