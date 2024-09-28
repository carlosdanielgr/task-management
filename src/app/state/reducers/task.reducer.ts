import { createReducer, on } from '@ngrx/store';
import { actionNewFilter, actionNewTask } from '../actions/task.action';
import { Task } from '@shared/interfaces/task.interface';
import { NameFilter } from '@shared/interfaces/filter.interface';

export const reducerNewTask = createReducer(
  [] as Task[],
  on(actionNewTask, (currentState: Task[], next) => {
    const tasks = [...currentState];
    if (next.isEdit) {
      const indexTask = tasks.findIndex(
        (task) => task.title === next.task.title
      );
      tasks[indexTask] = next.task;
      return tasks;
    }
    tasks.unshift(next.task);
    return tasks;
  })
);

export const reducerNewFilter = createReducer(
  'all' as NameFilter,
  on(actionNewFilter, (currentState, { name }) => name)
);
