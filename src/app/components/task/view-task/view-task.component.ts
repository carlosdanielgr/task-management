import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Task } from '@shared/interfaces/task.interface';
import { ManageTaskComponent } from '../../manage-task/manage-task.component';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.scss'],
})
export class ViewTaskComponent {
  @Input() task: Task = {
    title: '',
    date: '',
    completed: false,
    people: [],
  };

  constructor(private readonly modalService: NgbModal) {}

  closeModal() {
    this.modalService.dismissAll();
  }

  openManageTask() {
    const modalRef = this.modalService.open(ManageTaskComponent);
    modalRef.componentInstance.task = this.task;
  }
}
