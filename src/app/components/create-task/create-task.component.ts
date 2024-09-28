import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  FormsModule,
  Validators,
  FormControl,
} from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { dateAfterOrEqualToday } from './date-validator';
import { NgFor, NgIf } from '@angular/common';
import { uniqueNameValidator } from './person-validator';
import { AppState } from '@shared/interfaces/state.interface';
import { Store } from '@ngrx/store';
import { actionNewTask } from 'src/app/state/actions/task.action';

type PersonForm = FormGroup<{
  name: FormControl<string | null>;
  age: FormControl<null>;
  skills: FormArray<FormControl<unknown>>;
}>;

@Component({
  selector: 'app-create-task',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgFor, FormsModule],
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss'],
})
export class CreateTaskComponent implements OnInit {
  form!: FormGroup;
  constructor(
    private readonly modalService: NgbModal,
    private readonly fb: FormBuilder,
    private readonly store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.formInit();
  }

  private formInit() {
    this.form = this.fb.group({
      title: ['', Validators.required],
      date: ['', [Validators.required, dateAfterOrEqualToday()]],
      people: this.fb.array([], Validators.required),
    });
  }

  closeModal() {
    this.modalService.dismissAll();
  }

  addPerson() {
    const personForm: PersonForm = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          uniqueNameValidator(
            this.people.value.map((person) => person.name) as string[]
          ),
        ],
      ],
      age: [null, [Validators.required, Validators.min(18)]],
      skills: this.fb.array([], Validators.required),
    });
    this.people.push(personForm);
  }

  removePerson(index: number) {
    this.people.removeAt(index);
  }

  addSkill(personIndex: number) {
    const skills = this.people.at(personIndex).get('skills') as FormArray;
    skills.push(this.fb.control('', Validators.required));
  }

  removeSkill(personIndex: number, skillIndex: number) {
    const skills = this.people.at(personIndex).get('skills') as FormArray;
    skills.removeAt(skillIndex);
  }

  saveTask() {
    this.store.dispatch(actionNewTask(this.form.value));
    this.closeModal();
  }

  get date() {
    return this.form.get('date');
  }

  get people(): FormArray<PersonForm> {
    return this.form.get('people') as FormArray<PersonForm>;
  }
}
