import { Component } from '@angular/core';
import { PushNotificationsService } from 'ng-push';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _pushNotifications: PushNotificationsService) {
    this._pushNotifications.requestPermission();
  }
  notify() {
    //our function to be called on click
    let options = {
      //set options
      sticky: true,
      icon:
        'https://www.internal.cvsbrm.com/assets/images/cvs-health-cvs-pharmacy-heart.ico',
      body: 'We have updated CVS BRT to latest version'
    };
    this._pushNotifications.create('BRT Updated', options).subscribe(
      //creates a notification
      res => console.log(res),
      err => console.log(err)
    );
  }
}
