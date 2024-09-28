import { ActionReducerMap } from '@ngrx/store';
import { AppState } from '@shared/interfaces/state.interface';
import { reducerNewFilter, reducerNewTask } from './reducers/task.reducer';

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  tasks: reducerNewTask,
  filter: reducerNewFilter,
};
