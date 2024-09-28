import { Component, OnInit } from '@angular/core';
import { TaskService } from './services/task.service';
import { Task } from './components/task/task.component';
import { Store } from '@ngrx/store';
import { AppState } from '@shared/interfaces/state.interface';
import { selectorTasks } from './state/selectors/task.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  tasks: Task[] = [];

  constructor(
    private readonly taskService: TaskService,
    private readonly store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.getExternalTasks();
    this.getCurrentTasks();
  }

  private getExternalTasks() {
    this.taskService.getExternalTasks().subscribe({
      next: (res) => {
        this.tasks = res;
      },
    });
  }

  private getCurrentTasks() {
    this.store.select(selectorTasks).subscribe({
      next: (res) => {
        this.tasks = [...res, ...this.tasks];
      },
    });
  }
}
