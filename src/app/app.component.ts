import { Component, VERSION } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //
  title          : string = '[WEB API DEMO - UNIT TESTING]';
  appName        : string = '[WEB API DEMO - UNIT TESTING]';
  appVersion     : string = '1.0.0.18';
  runtimeVersion : string = VERSION.full;
  //
  constructor(private router: Router) {
    //
    router.navigateByUrl('/Home');
  }
}
