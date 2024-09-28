import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '@shared/interfaces/task.interface';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private readonly API_URL = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private readonly http: HttpClient) {}

  getExternalTasks() {
    return this.http.get<Task[]>(this.API_URL).pipe(
      map((task) =>
        task.slice(0, 10).map(
          (data, index) =>
            ({
              title: data.title,
              completed: index < 5 ? true : false,
              date: new Date().toISOString().split('T')[0],
              people: [],
            } as Task)
        )
      )
    );
  }
}
