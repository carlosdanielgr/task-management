import { Component, Input, OnInit } from '@angular/core';
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
import { People, Task } from '@shared/interfaces/task.interface';

type PersonForm = FormGroup<{
  name: FormControl<string | null>;
  age: FormControl<number | null>;
  skills: FormArray<FormControl<unknown>>;
}>;

@Component({
  selector: 'app-manage-task',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgFor, FormsModule],
  templateUrl: './manage-task.component.html',
  styleUrls: ['./manage-task.component.scss'],
})
export class ManageTaskComponent {
  @Input() task!: Task;

  form!: FormGroup;
  constructor(
    private readonly modalService: NgbModal,
    private readonly fb: FormBuilder,
    private readonly store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.formInit();
    if (this.task) this.handleEditTask();
  }

  private formInit() {
    this.form = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      date: ['', [Validators.required, dateAfterOrEqualToday()]],
      completed: false,
      people: this.fb.array([], Validators.required),
    });
  }

  private handleEditTask() {
    this.form.patchValue(this.task);
    this.form.get('title')?.disable();
    this.task.people.forEach((person, index) => {
      this.addPerson(person);
      if (person.skills.length)
        person.skills.forEach((skill) => {
          this.addSkill(index, skill);
        });
    });
  }

  closeModal() {
    this.modalService.dismissAll();
  }

  addPerson(values?: People) {
    const personForm: PersonForm = this.fb.group({
      name: [
        values?.name ?? '',
        [
          Validators.required,
          Validators.minLength(5),
          uniqueNameValidator(
            this.people.value.map((person) => person.name) as string[]
          ),
        ],
      ],
      age: [values?.age ?? null, [Validators.required, Validators.min(18)]],
      skills: this.fb.array([], Validators.required),
    });
    this.people.push(personForm);
  }

  removePerson(index: number) {
    this.people.removeAt(index);
  }

  addSkill(personIndex: number, value?: string) {
    const skills = this.people.at(personIndex).get('skills') as FormArray;
    skills.push(this.fb.control(value ?? '', Validators.required));
  }

  removeSkill(personIndex: number, skillIndex: number) {
    const skills = this.people.at(personIndex).get('skills') as FormArray;
    skills.removeAt(skillIndex);
  }

  saveTask() {
    this.store.dispatch(
      actionNewTask({
        task: this.form.getRawValue(),
        isEdit: !!this.task,
      })
    );
    this.closeModal();
  }

  get date() {
    return this.form.get('date');
  }

  get people(): FormArray<PersonForm> {
    return this.form.get('people') as FormArray<PersonForm>;
  }
}
