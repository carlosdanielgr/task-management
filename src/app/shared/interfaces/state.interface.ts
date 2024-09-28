import { NameFilter } from './filter.interface';
import { Task } from './task.interface';

export interface AppState {
  tasks: Task[];
  externalTasks: Task[];
  filter: NameFilter;
}
