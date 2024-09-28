import { NgFor, NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@shared/interfaces/state.interface';
import { actionNewTask } from 'src/app/state/actions/task.action';

export interface Task {
  title: string;
  date: string;
  completed: boolean;
  people: any[];
}

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [NgIf, NgFor, ReactiveFormsModule],
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  @Input() id = 0;

  @Input() task: Task = {
    title: '',
    date: '',
    completed: false,
    people: [],
  };

  checkControl = new FormControl(false);

  constructor(private readonly store: Store<AppState>) {}

  ngOnInit(): void {
    this.checkControl.setValue(this.task.completed);
  }

  onToggleComplete() {
    this.store.dispatch(
      actionNewTask({
        task: { ...this.task, completed: this.checkControl.value as boolean },
        isEdit: true,
      })
    );
  }
}
