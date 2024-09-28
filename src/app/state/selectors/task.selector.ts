import { createSelector } from '@ngrx/store';
import { AppState } from '@shared/interfaces/state.interface';
import { Task } from '@shared/interfaces/task.interface';

const currentTasks = (name: AppState) => name.tasks;

export const selectorTasks = createSelector(currentTasks, (tasks) => tasks);

const currentFilter = (name: AppState) => {
  const tasks = name.tasks;
  const filters = {
    completed: (task: Task) => task.completed,
    pending: (task: Task) => !task.completed,
  };

  return name.filter in filters
    ? tasks.filter(filters[name.filter as 'completed' | 'pending'])
    : tasks;
};

export const selectorFilter = createSelector(currentFilter, (filter) => filter);
