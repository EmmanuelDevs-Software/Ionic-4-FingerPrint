import { Component, OnInit } from '@angular/core';
import { LocalStorageService, Task } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-list-storage',
  templateUrl: './list-storage.component.html',
  styleUrls: ['./list-storage.component.scss'],
})
export class ListStorageComponent implements OnInit {

 
  tasks: Task[];

  constructor(public taskService: LocalStorageService) {
    
  }

  ngOnInit() {
    this.tasks = this.taskService.getTasks();
  }

  addTask(task: Task) {
    console.log(task);
    this.taskService.addTask(task);
  }

}
