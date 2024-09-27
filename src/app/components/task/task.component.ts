import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

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
}
