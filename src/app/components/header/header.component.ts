import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ManageTaskComponent } from '../manage-task/manage-task.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private readonly modalService: NgbModal) {}

  openCreateTask() {
    this.modalService.open(ManageTaskComponent);
  }
}
