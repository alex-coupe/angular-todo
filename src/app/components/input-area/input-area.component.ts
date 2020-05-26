import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-input-area',
  templateUrl: './input-area.component.html',
  styleUrls: ['./input-area.component.css']
})
export class InputAreaComponent implements OnInit {

  @Output() addTodo: EventEmitter<Todo> = new EventEmitter();

  title: string;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit():void {
    const todo: Todo = {
      id: 99,
      title: this.title,
      isComplete: false
    }
    this.addTodo.emit(todo);
    this.title = "";
  }

}
