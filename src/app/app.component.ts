import { Component, OnDestroy, OnInit } from '@angular/core';
import { TaskService } from './services/task.service';
import { Task } from './components/task/task.component';
import { Store } from '@ngrx/store';
import { AppState } from '@shared/interfaces/state.interface';
import { selectorFilter, selectorTasks } from './state/selectors/task.selector';
import { Subject, takeUntil } from 'rxjs';
import { actionExternalTask } from './state/actions/task.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  private readonly unsubscribeSignal$: Subject<void> = new Subject<void>();

  tasks: Task[] = [];

  constructor(
    private readonly taskService: TaskService,
    private readonly store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.getCurrentTasks();
    this.getCurrentFilter();
    this.getExternalTasks();
  }

  ngOnDestroy(): void {
    this.unsubscribeSignal$.next();
    this.unsubscribeSignal$.complete();
  }

  private getExternalTasks() {
    this.taskService
      .getExternalTasks()
      .pipe(takeUntil(this.unsubscribeSignal$))
      .subscribe({
        next: (res) => {
          this.store.dispatch(actionExternalTask({ tasks: res }));
        },
      });
  }

  private getCurrentTasks() {
    this.store
      .select(selectorTasks)
      .pipe(takeUntil(this.unsubscribeSignal$))
      .subscribe({
        next: (res) => {
          this.tasks = res;
        },
      });
  }

  private getCurrentFilter() {
    this.store
      .select(selectorFilter)
      .pipe(takeUntil(this.unsubscribeSignal$))
      .subscribe({
        next: (res) => {
          this.tasks = res;
        },
      });
  }
}
