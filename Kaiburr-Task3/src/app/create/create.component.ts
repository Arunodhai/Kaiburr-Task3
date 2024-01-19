import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../task.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  taskForm: FormGroup;
  successMessage:string=""

  constructor(private formBuilder: FormBuilder, private taskService: TaskService) {
    this.taskForm = this.formBuilder.group({
      name: ['', Validators.required],
      id: ['', Validators.required],
      assignee: ['', Validators.required],
      project: ['', Validators.required],
      startTime: ['', Validators.required],
      arunodhaiVProperty: [''],
    });
  }

  onSubmit() {
    this.generateArunodhaiVProperty();

    const task = this.taskForm.value;
    this.taskService.createTask(task).subscribe(
      (createdTask) => {
        console.log('Task created:', createdTask);
        this.taskForm.reset();
        this.successMessage = 'Task created successfully!';

      },
      (error) => {
        console.error('Error creating task:', error);
        this.successMessage = 'Error creating task. Please try again.';

      }
    );
  }


  generateArunodhaiVProperty() {
    const sourceString = 'ArunodhaiV';
    const randomCharacters = Array.from({ length: 5 }, () => sourceString[Math.floor(Math.random() * sourceString.length)]);
    this.taskForm.patchValue({ arunodhaiVProperty: randomCharacters.join('') });
  }

}
