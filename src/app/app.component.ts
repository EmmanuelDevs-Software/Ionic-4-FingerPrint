import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';
import { Router } from '@angular/router';
import { KeychainTouchId } from '@ionic-native/keychain-touch-id/ngx';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private faio: FingerprintAIO,
    private router: Router,
    private keychainTouchId: KeychainTouchId
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

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
    });
  }
}
