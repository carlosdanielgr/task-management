import { Component, OnInit } from '@angular/core';
import { TaskService } from './task.service';
import { Task } from './components/task/task.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private readonly taskService: TaskService) {}

  ngOnInit(): void {
    this.getCurrentTasks();
  }

  getCurrentTasks() {
    this.taskService.getCurrentTasks().subscribe({
      next: (res) => {
        this.tasks = res;
      },
    });
  }
}
