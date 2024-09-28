import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { NameFilter } from '@shared/interfaces/filter.interface';
import { AppState } from '@shared/interfaces/state.interface';
import { actionNewFilter } from 'src/app/state/actions/task.action';

@Component({
  selector: 'app-task-filter',
  templateUrl: './task-filter.component.html',
  styleUrls: ['./task-filter.component.scss'],
})
export class TaskFilterComponent {
  currentFilter: NameFilter = 'all';

  constructor(private readonly store: Store<AppState>) {}

  onToggleFilter(name: NameFilter) {
    this.currentFilter = name;
    this.store.dispatch(actionNewFilter({ name }));
  }
}
