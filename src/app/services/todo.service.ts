import { Injectable } from '@angular/core';
import { Todo } from '../models/Todo';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class TodoService {

  httpOptions:object = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  todosURL:string = 'https://jsonplaceholder.typicode.com/todos';
  limit: string = '?_limit=5';

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.todosURL}${this.limit}`);
  }

  toggleComplete(todo: Todo): Observable<any> {
    return this.http.put<Todo>(`${this.todosURL}/${todo.id}`,todo, this.httpOptions);
  }

  deleteTodo(todo: Todo): Observable<Todo> {
    return this.http.delete<Todo>(`${this.todosURL}/${todo.id}`, this.httpOptions);
  }
}
