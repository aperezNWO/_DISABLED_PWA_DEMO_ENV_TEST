import { Component, VERSION } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //
  title          : string = '[PWA DEMO - UNIT TESTING]';
  appName        : string = '[PWA DEMO - UNIT TESTING]';
  appVersion     : string = '1.0.2.3';
  runtimeVersion : string = VERSION.full;
  //
  constructor(private router: Router) {
    //
    router.navigateByUrl('/Home');
  }
}
