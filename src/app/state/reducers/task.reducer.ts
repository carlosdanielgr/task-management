import { createReducer, on } from '@ngrx/store';
import { actionNewTask } from '../actions/task.action';
import { Task } from '@shared/interfaces/task.interface';

export const reducerNewTask = createReducer(
  [] as Task[],
  on(actionNewTask, (currentState: Task[], next) => {
    const tasks = [...currentState];
    tasks.push(next);
    return tasks;
  })
);
