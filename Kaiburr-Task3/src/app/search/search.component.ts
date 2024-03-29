import { TaskService } from '../task.service';
import { Task } from '../model/task.model';
import { Component } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  taskId: string;
  taskName: string;
  assignee: string;
  foundTasks: Task[];
  errorMessage: string;

  constructor(private taskService: TaskService) {}

  searchTaskById() {
    this.taskService.getTaskById(this.taskId).subscribe(
      (task) => {
        console.log('Task found:', task);
        this.foundTasks = [task];
        this.errorMessage = null;
      },
      (error: HttpErrorResponse) => {
        if (error.status === 404) {
          this.errorMessage = '404 Task not found';
          this.foundTasks = null;
        } else {
          console.error('Error searching task by ID:', error);
          this.errorMessage = 'Error searching task. Please try again later.';
          this.foundTasks = null;
        }
      }
    );
  }

  searchTasksByName() {
    this.taskService.findTasksByName(this.taskName).subscribe(
      (tasks) => {
        console.log('Tasks found:', tasks);
        this.foundTasks = tasks;
        this.errorMessage = null;
      },
      (error) => {
        console.error('Error searching tasks by name:', error);
        this.errorMessage = 'Error searching tasks. Please try again later.';
        this.foundTasks = null;
      }
    );
  }

  searchFirst10TasksByAssignee() {
    this.taskService.findFirst10TasksByAssignee(this.assignee).subscribe(
      (tasks) => {
        console.log('First 10 tasks found:', tasks);
        this.foundTasks = tasks;
        this.errorMessage = null;
      },
      (error) => {
        console.error('Error searching first 10 tasks by assignee:', error);
        this.errorMessage = 'Error searching tasks. Please try again later.';
        this.foundTasks = null;
      }
    );
  }
}
