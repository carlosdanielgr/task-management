import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@shared/interfaces/state.interface';
import { actionChangeTaskStatus } from 'src/app/state/actions/task.action';

export interface Task {
  title: string;
  date: string;
  completed: boolean;
  people: any[];
}

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
  @Input() task: Task = {
    title: '',
    date: '',
    completed: false,
    people: [],
  };

  constructor(private readonly store: Store<AppState>) {}

  onToggleComplete(state: boolean) {
    this.store.dispatch(actionChangeTaskStatus({ state }));
  }
}
