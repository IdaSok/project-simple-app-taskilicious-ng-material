import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskModel } from '../models/task.model';

@Injectable({ providedIn: 'root' })
export class TaskService {
    constructor(private _httpClient: HttpClient) {
    }
    
  getAllTasks(): Observable<TaskModel[]> {
    return this._httpClient.get<TaskModel[]>('https://63761992b5f0e1eb850298da.mockapi.io/tasks')
  }

createTask(createTask:TaskModel): Observable<TaskModel> {
    return this._httpClient.post<TaskModel>('https://63761992b5f0e1eb850298da.mockapi.io/tasks', createTask)
  }
  
deleteTask(id: string): Observable<TaskModel> {
    return this._httpClient.delete<TaskModel>('https://63761992b5f0e1eb850298da.mockapi.io/tasks/' + id)
  }

editTask(task:TaskModel): Observable<TaskModel>{
    return this._httpClient.put<TaskModel>('https://63761992b5f0e1eb850298da.mockapi.io/tasks/' + task.id, task)
  }

getOneTask(id: TaskModel): Observable<TaskModel> {
    return this._httpClient.get<TaskModel>('https://63761992b5f0e1eb850298da.mockapi.io/tasks/' + id);
  }
}
