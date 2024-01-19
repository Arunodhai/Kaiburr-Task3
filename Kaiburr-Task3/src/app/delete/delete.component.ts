// delete.component.ts
import { Component } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {
  taskId: string;
  deletedData: string;

  constructor(private taskService: TaskService) {}

  onDelete() {
    this.taskService.deleteTask(this.taskId).subscribe(
      () => {
        // On successful deletion
        this.deletedData = `Task with ID ${this.taskId} deleted successfully.`;
      },
      (error) => {
          this.deletedData = `Error deleting task. Please try again.`;
      }
    );
  }

  closeModal() {
    this.deletedData = null;
  }
}
