import { Component, OnInit } from '@angular/core';
import { NgxIndexeddbService } from '../services/ngx-indexeddb.service';

@Component({
  selector: 'app-ngx-indexeddb',
  templateUrl: './ngx-indexeddb.page.html',
  styleUrls: ['./ngx-indexeddb.page.scss'],
})
export class NgxIndexeddbPage implements OnInit {
nombre = 'Chadwick';
  email: 'Chadwick@chadwick.com';

  nombre2 = 'Chadwick2'
  email2: 'Chadwic2k@chadwick.com';
  data: any[];


  constructor(private dbService: NgxIndexeddbService ) { 

  }

  ngOnInit() {

    this.dbService.getAll().then(
      people => {
          console.log(people);
          this.data = people;
          return people;
      },
      error => {
          console.log(error);
      }
  );
  
  }

 delete(id){
   this.dbService.delete(id);
 }
}
