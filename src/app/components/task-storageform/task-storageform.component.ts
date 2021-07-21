import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-task-storageform',
  templateUrl: './task-storageform.component.html',
  styleUrls: ['./task-storageform.component.scss'],
})
export class TaskStorageformComponent implements OnInit {

  title: string;
  description: string;

  constructor(public taskService: LocalStorageService) { }

  ngOnInit() {
  }

  addTask(newTitle: HTMLInputElement, newDescription: HTMLInputElement) {
    this.taskService.addTask({
      title: newTitle.value,
      description: newDescription.value,
      hide: true
    });
    newTitle.value = '';
    newDescription.value = '';
    return false;
  }

}
