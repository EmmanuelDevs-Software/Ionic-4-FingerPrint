import { Component, OnInit, Input } from '@angular/core';
import { Task, LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-task-storage',
  templateUrl: './task-storage.component.html',
  styleUrls: ['./task-storage.component.scss'],
})
export class TaskStorageComponent implements OnInit {

  @Input() task: Task;
  constructor(public taskService:LocalStorageService) { }

  ngOnInit() {
  }

  deleteTask(task: Task) {
    if(confirm('Are you sure you want to delete this task?')) {
      this.taskService.deleteTask(task);
    }
  }

}
