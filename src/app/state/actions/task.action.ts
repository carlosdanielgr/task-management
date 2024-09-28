import { createAction, props } from '@ngrx/store';
import { FilterTask } from '@shared/interfaces/filter.interface';
import { Task } from '@shared/interfaces/task.interface';

export const actionExternalTask = createAction(
  '[Task] External task',
  props<{ tasks: Task[] }>()
);

export const actionNewTask = createAction('[Task] New task', props<Task>());

export const actionNewFilter = createAction(
  '[Task] New filter',
  props<FilterTask>()
);
