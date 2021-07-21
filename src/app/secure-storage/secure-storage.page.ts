import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SecureStorage, SecureStorageObject } from '@ionic-native/secure-storage/ngx';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-secure-storage',
  templateUrl: './secure-storage.page.html',
  styleUrls: ['./secure-storage.page.scss'],
})
export class SecureStoragePage implements OnInit {

  
  constructor(private secureStorage: SecureStorage) {
    this.secureStorage.create('my_store_name')
    .then((storage: SecureStorageObject) => {
  
       storage.get('key')
         .then(
           data => console.log(data),
           error => console.log(error)
       );
  
       storage.set('key', 'value')
         .then(
          data => console.log(data),
           error => console.log(error)
       );
  
       storage.remove('key')
       .then(
           data => console.log(data),
           error => console.log(error)
       );
  
    });
  }

  ngOnInit() {

  
    
  }



}
