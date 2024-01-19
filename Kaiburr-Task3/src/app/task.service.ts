import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from './model/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = 'http://localhost:8080/tasks';

  constructor(private http: HttpClient) {}

  getAllTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }

  getTaskById(id: string): Observable<Task> {
    return this.http.get<Task>(`${this.apiUrl}/${id}`);
  }

  createTask(task: Task): Observable<Task> {

    return this.http.put<Task>(this.apiUrl, task);
  }


  deleteTask(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  findTasksByName(name: string): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.apiUrl}/findByName?name=${name}`);
  }

  findFirst10TasksByAssignee(assignee: string): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.apiUrl}/findFirst10TasksByAssignee?assignee=${assignee}`);
  }
}
