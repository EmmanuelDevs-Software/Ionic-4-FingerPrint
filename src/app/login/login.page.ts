import { Component, OnInit } from '@angular/core';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import {KeychainTouchId} from '@ionic-native/keychain-touch-id/ngx';
import {AndroidFingerprintAuth} from '@ionic-native/android-fingerprint-auth/ngx';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  data: any;
  userPass : string = 'OO1231okaskda';
  constructor(private faio: FingerprintAIO, private router: Router, public storage: Storage, private keychainTouchId: KeychainTouchId ,
              private androidFingerprintAuth: AndroidFingerprintAuth) {
    this.data = {};
    // Set String Value
    this.setValue('name', 'Chadwick');
    // Set Integer Value
    this.setValue('phone', 8908904);

    const sampleObj = [
      {
        country: 'Spain',
        address: '638 gran',
        phone: '444.555.666'
      },
    ];

    // Set Object Value
    this.setValue('offices', sampleObj);
   }

  ngOnInit() {
  }

  login() {
    this.faio.show({
      clientId: 'Fingerprint-Demo', // Android: Used for encryption. iOS: used for dialogue if no `localizedReason` is given.
      clientSecret: 'o7aoOMYUbyxaD23oFAnJ', // Necessary for Android encrpytion of keys. Use random secret key.
      disableBackup: true,  // Only for Android(optional)
      localizedFallbackTitle: 'Use Pin', // Only for iOS
      localizedReason: 'Please authenticate' // Only for iOS
    })
      .then((result: any) => {
        console.log(result);
        this.router.navigateByUrl('/home');
      })
      .catch((error: any) => {
        console.log('err: ', error);
      });

  }


 // set a key/value
 setValue(key: string, value: any) {
  this.storage.set(key, value).then((response) => {
    console.log('set' + key + ' ', response);

    // get Value Saved in key
    this.getValue(key);

  }).catch((error) => {
    console.log('set error for ' + key + ' ', error);
  });
}

// get a key/value pair
getValue(key: string) {
  this.storage.get(key).then((val) => {
    console.log('get ' + key + ' ', val);
    this.data[key] = '';
    this.data[key] = val;
  }).catch((error) => {
    console.log('get error for ' + key + '', error);
  });
}

// Remove a key/value pair
removeKey(key: string) {
  this.storage.remove(key).then(() => {
    console.log('removed ' + key);
    this.data[key] = '';
  }).catch((error) => {
    console.log('removed error for ' + key + '', error);
  });
}

// Get Current Storage Engine Used
driverUsed() {
  console.log('Driver Used: ' + this.storage.driver);
}

// Traverse key/value pairs
traverseKeys() {
  // tslint:disable-next-line:ban-types
  this.storage.forEach((value: any, key: string, iterationNumber: Number) => {
    console.log('key ' + key);
    console.log('iterationNumber ' + iterationNumber);
    console.log('value ' + value);
  });
}

// Traverse key/value pairs
listKeys() {
  this.storage.keys().then((k) => {
    console.table(k);
  });
}

// Total Keys Stored
getKeyLength() {
  // tslint:disable-next-line:ban-types
  this.storage.length().then((keysLength: Number) => {
    console.log('Total Keys ' + keysLength);
  });
}

android() {
  this.keychainTouchId.isAvailable()
      .then((res: any) => console.log(res))
      .catch((error: any) => console.error(error));
}

androidAdd(){
    this.keychainTouchId.save('emmanuel', this.userPass, true)
        .then((res: any) => console.log(res))
        .catch((error: any) => console.error(error));
}

  androidverify(){
    this.keychainTouchId.verify('emmanuel', 'hola soy un mensaje')
        .then((res: any) => console.log(res))
        .catch((error: any) => console.error(error));
  }

  androidhas(){
    this.keychainTouchId.has('emmanuel')
        .then((res: any) => console.log(res))
        .catch((error: any) => console.error(error));
  }


}
