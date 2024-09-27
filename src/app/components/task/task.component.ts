import { Component, Input } from '@angular/core';
import { EllipsisPipe } from 'src/app/pipes/ellipsis.pipe';

export interface Task {
  title: string;
  description: string;
  completed: boolean;
  people: any[];
}

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [EllipsisPipe],
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
  @Input() task: Task = {
    title: '',
    description: '',
    completed: false,
    people: [],
  };
}
