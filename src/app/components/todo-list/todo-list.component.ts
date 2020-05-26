import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Todo[]; 

  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        id:1,
        description: "Wash car",
        isComplete: true
      },
      {
        id:2,
        description: "Cut hair",
        isComplete: false
      },
      {
        id:3,
        description: "Write some code",
        isComplete: false
      }
    ];
  }

}
