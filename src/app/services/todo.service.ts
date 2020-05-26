import { Injectable } from '@angular/core';
import { Todo } from '../models/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  getTodos(): Todo[]
  {
    return [
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
