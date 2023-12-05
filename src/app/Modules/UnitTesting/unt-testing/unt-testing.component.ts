import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlgorithmService } from 'src/app/Services/algorithm.service';
import { Observable } from 'rxjs';
//
@Component({
  selector: 'app-unt-testing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './unt-testing.component.html',
  styleUrl: './unt-testing.component.css',
})
//
export class UntTestingComponent {
  //
  protected lblStatusNodeJs : string = "";
  //
  protected BtnTestNodeJSCaption : string = "[TEST NODE.JS]";
  //
  constructor(private algorithmService: AlgorithmService) {
    //
  }
  //
  TestNodeJs(): void {
    //
    console.log('[TEST NODE.JS] \n');
    //
    this.BtnTestNodeJSCaption  = "...(retrieving data)...";
    //
    let testNodeJsObservable: Observable<string> =
      this.algorithmService._TestNodeJs();
    //
    const testNodeJsObserver = {
      next: (jsondata: string) => {
        //
        this.lblStatusNodeJs = JSON.parse(jsondata)['recordsets'][0][0]['NombreCompleto'];
        //
        console.log(
          '[TEST - NODEJS] - (return): ' +
            this.lblStatusNodeJs,
        );
        //
        this.BtnTestNodeJSCaption = '[TEST NODE.JS]';
      },
      error: (err: Error) => {
        //
        console.error(
          '[TEST - NODEJS] - (ERROR) : ' + JSON.stringify(err.message),
        );
      },
      complete: () => {
        //
        console.log('[TEST - NODEJS]  -  (COMPLETE)');
        //
      },
    };
    //
    testNodeJsObservable.subscribe(testNodeJsObserver);
  }
}
