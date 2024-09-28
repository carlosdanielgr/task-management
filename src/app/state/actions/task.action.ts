import { createAction, props } from '@ngrx/store';
import { Task } from '@shared/interfaces/task.interface';

export const actionNewTask = createAction('[Task] New task', props<Task>());
