import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Task } from './components/task/task.component';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private readonly API_URL = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private readonly http: HttpClient) {}

  getCurrentTasks() {
    return this.http.get<Task[]>(this.API_URL).pipe(
      map((task) =>
        task.slice(0, 10).map(
          (data) =>
            ({
              title: data.title,
              completed: true,
              date: new Date().toISOString().split('T')[0],
              people: [],
            } as Task)
        )
      )
    );
  }
}
