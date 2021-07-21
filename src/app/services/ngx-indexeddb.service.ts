import { Injectable } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';

@Injectable({
  providedIn: 'root'
})
export class NgxIndexeddbService {
  data: any[];

  constructor(private dbService: NgxIndexedDBService) { }



  add(id,name, email){
    this.dbService.add('people', {id:id, name:name, email: email }).then(
      () => {
         this.getAll();
      },
      error => {
          console.log(error);
      }
  );
  }

  update(id,name, email){
    this.dbService.update('people', { id: id, name: name, email: email }).then(
      () => {
        return this.data;
      },
      error => {
        console.log(error);
      }
    );

  }

  getAll(){
   return this.dbService.getAll('people');
  }

  delete(id){
   return this.dbService.delete('people', id);
  }
}
