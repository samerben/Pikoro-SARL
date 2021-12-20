import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Task } from '../_models/task';
import { TasksService } from '../_services/tasks/tasks.service';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  currentDate: Date = new Date();


  constructor(private datepipe: DatePipe, private modal: NgbModal, private api: TasksService, private router:Router) { }

  ngOnInit(): void {

  }

  close() {
    this.modal.dismissAll()
  }

  addTask(form: any) {

    this.datepipe.transform(form.value.date, 'yyyy-MM-dd')
    let task = new Task(form.value.title, form.value.desc, form.value.adresse, form.value.date)
    console.log(task)
    this.api.addTask(task).subscribe((res: any) => {
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/tasks']);
    }); 
    
    },
      err => {
        console.log(err);
      },
    )
  }


  

}
