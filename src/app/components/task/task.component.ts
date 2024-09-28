import { NgFor, NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { AppState } from '@shared/interfaces/state.interface';
import { Task } from '@shared/interfaces/task.interface';
import { actionNewTask } from 'src/app/state/actions/task.action';
import { ViewTaskComponent } from './view-task/view-task.component';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [NgIf, NgFor, ReactiveFormsModule],
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  @Input() id = 0;

  @Input() task: Task = {
    title: '',
    date: '',
    completed: false,
    people: [],
  };

  description = '';

  checkControl = new FormControl(false);

  constructor(
    private readonly store: Store<AppState>,
    private readonly modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.checkControl.setValue(this.task.completed);
    if (this.task.description) {
      if (this.task.description?.length > 40)
        this.description = this.task.description?.slice(0, 40) + '...';
      else this.description = this.task.description;
    }
  }

  openViewTask() {
    const modalRef = this.modalService.open(ViewTaskComponent, {
      centered: true,
    });
    modalRef.componentInstance.task = this.task;
  }

  onToggleComplete() {
    this.store.dispatch(
      actionNewTask({
        task: { ...this.task, completed: this.checkControl.value as boolean },
        isEdit: true,
      })
    );
  }
}
