import { createAction, props } from '@ngrx/store';
import { FilterTask } from '@shared/interfaces/filter.interface';
import { Task } from '@shared/interfaces/task.interface';

export const actionNewTask = createAction(
  '[Task] New task',
  props<{
    isEdit?: boolean;
    task: Task;
  }>()
);

export const actionNewFilter = createAction(
  '[Task] New filter',
  props<FilterTask>()
);
