import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListStorageComponent } from './list-storage/list-storage.component';
import { TaskStorageformComponent } from './task-storageform/task-storageform.component';
import { TaskStorageComponent } from './task-storage/task-storage.component';


@NgModule({
  declarations: [
    ListStorageComponent,
    TaskStorageformComponent,
    TaskStorageComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[
    ListStorageComponent,
    TaskStorageformComponent,
    TaskStorageComponent
  ]
})
export class ComponentsModule { }