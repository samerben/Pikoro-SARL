import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Task } from '../_models/task';
import { TasksService } from '../_services/tasks/tasks.service';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent implements OnInit {

  @Input()
  public taskInfo!: Task;

  @Input()
  public taskid!: string;

  constructor(private datepipe: DatePipe, private modal: NgbModal, private api: TasksService, private router:Router) { }

  ngOnInit(): void {

    console.log(this.taskInfo)

  }

  updateTask(form: any) {
    this.datepipe.transform(form.value.date, 'yyyy-MM-dd')
    let task = new Task(form.value.title, form.value.desc, form.value.adresse, form.value.date)
    console.log(task)
    this.api.updateTask(this.taskid,this.taskInfo).subscribe((res: any) => {

      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/tasks']); // navigate to same route

      });    },
      err => {
        console.log(err);
      },
    )
  }
  close() {
    this.modal.dismissAll()
  }
}


