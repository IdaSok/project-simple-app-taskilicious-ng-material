import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategoryModel } from '../models/category.model';
import { TaskModel } from '../models/task.model';

@Injectable({ providedIn: 'root' })
export class CategoryService {
  constructor(private _httpClient: HttpClient) {
  }

  //categories
  getAll(): Observable<CategoryModel[]> {
    return this._httpClient.get<CategoryModel[]>('https://63761992b5f0e1eb850298da.mockapi.io/categories')
    }

  create(createCategory: Omit<CategoryModel, 'id'>): Observable<CategoryModel> {
        return this._httpClient.post<CategoryModel>('https://63761992b5f0e1eb850298da.mockapi.io/categories', createCategory)
      }
      
  update(cat:CategoryModel): Observable<CategoryModel>{
        return this._httpClient.put<CategoryModel>('https://63761992b5f0e1eb850298da.mockapi.io/categories/' + cat.id, cat)
      }
      
  getOne(id:string): Observable<CategoryModel> {
        return this._httpClient.get<CategoryModel>('https://63761992b5f0e1eb850298da.mockapi.io/categories/' + id)
      }

  //tasks
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

