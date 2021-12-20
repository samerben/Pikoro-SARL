import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from 'src/app/_models/task';


@Injectable({
  providedIn: 'root'
})
export class TasksService {

  readonly api = "http://192.168.1.18:3000/api/Task";

  constructor(private httpClient: HttpClient) { }

  tasksList() {
    return this.httpClient.get(this.api)
  }

  addTask(task: Task) {
    return this.httpClient.post(this.api, task)
  }

  deleteTask(taskID: any) {
    return this.httpClient.delete(this.api + "/" + taskID)
  }

  updateTask(id: any,task: Task) {
    return this.httpClient.put(this.api + "/" + id, task)
  }
}
