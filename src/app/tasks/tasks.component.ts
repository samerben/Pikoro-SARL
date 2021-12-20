import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddTaskComponent } from '../add-task/add-task.component';
import { UpdateTaskComponent } from '../update-task/update-task.component';
import { Task } from '../_models/task';
import { TasksService } from '../_services/tasks/tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  taskCollection!: Task[];

  constructor(private modal: NgbModal, private api: TasksService, private router:Router) { }

  ngOnInit(): void {

    this.api.tasksList().subscribe((res: any) => {
      this.taskCollection = res
    },
      err => {
        console.log(err);
      },
    )
  }

  openAddModal() {
    this.modal.open(AddTaskComponent, { backdrop: 'static', size: 'lg', keyboard: false, centered: true });
  }

  updateTask(id:any, task: Task) {
    let updateModal = this.modal.open(UpdateTaskComponent, { backdrop: 'static', size: 'lg', keyboard: false, centered: true });
    updateModal.componentInstance.taskid = id;
    updateModal.componentInstance.taskInfo = task;

  }

  removeTask(id: any) {
    this.api.deleteTask(id).subscribe(res => {

      const currentRoute = this.router.url;

            this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
              this.router.navigate([currentRoute]); // navigate to same route

            });

        
    },
      err => {
        console.log(err);
        const currentRoute = this.router.url;

            this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
              this.router.navigate([currentRoute]); // navigate to same route

            });
      },
    )
  }

}
