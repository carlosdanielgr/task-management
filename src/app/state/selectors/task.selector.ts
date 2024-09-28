import { createSelector } from '@ngrx/store';
import { AppState } from '@shared/interfaces/state.interface';

const currentTasks = (name: AppState) => name.tasks;

export const selectorTasks = createSelector(currentTasks, (tasks) => tasks);
