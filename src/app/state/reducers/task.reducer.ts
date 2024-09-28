import { createReducer, on } from '@ngrx/store';
import {
  actionExternalTask,
  actionNewFilter,
  actionNewTask,
} from '../actions/task.action';
import { Task } from '@shared/interfaces/task.interface';
import { NameFilter } from '@shared/interfaces/filter.interface';

export const reducerExternalTask = createReducer(
  [] as Task[],
  on(actionExternalTask, (currentState, { tasks }) => tasks)
);

export const reducerNewTask = createReducer(
  [] as Task[],
  on(actionNewTask, (currentState: Task[], next) => {
    const tasks = [...currentState];
    tasks.push(next);
    return tasks;
  })
);

export const reducerNewFilter = createReducer(
  'all' as NameFilter,
  on(actionNewFilter, (currentState, { name }) => name)
);
