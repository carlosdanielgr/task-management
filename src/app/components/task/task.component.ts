import { Component } from '@angular/core';

export interface Task {
  title: string;
  description?: string;
  completed: boolean;
  people: any[];
}

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {}
