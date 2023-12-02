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
  constructor(private algorithmService: AlgorithmService) {
    //
  }
  //
  TestNodeJs(): void {
    //
    console.log('[TEST NODE.JS] \n');
    //
    let testNodeJsObservable: Observable<string> =
      this.algorithmService._TestNodeJs();
    //
    const testNodeJsObserver = {
      next: (jsondata: string) => {
        //
        console.log(
          '[TEST - NODEJS] - (return): ' +
            JSON.parse(jsondata)['recordsets'][0][0]['NombreCompleto'],
        );
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
