import { Component          } from '@angular/core';
import { DiskInfo           } from 'src/app/Models/algorithm-models.model';
//
@Component({
    selector: 'app-hanoi-towers',
    templateUrl: './hanoi-towers.component.html',
    styleUrl: './hanoi-towers.component.css',
})
//
export class HanoiTowersComponent {
  //
  public    towerA              : DiskInfo[] = [];
  public    towerB              : DiskInfo[] = [];
  public    towerC              : DiskInfo[] = [];
  public    message             : string     = "";
  protected steps               : string[]   = [];
  protected _steps              : string[]   = [];
  protected _stepsIndex         : number     = 0;
  protected _startGame          : boolean    = true;
  private   delayInMilliseconds : number     = 1500;
  protected _stepsAmt           : number     = 0;
  //
  constructor(){
      //
  }
  //
  printSteps()
  {
    // END RECURSION
    if (this._stepsIndex > this._stepsAmt + 1)
        return;
    //
    this.steps.push(this._steps[this._stepsIndex]);
    this._stepsIndex++;
    //
    setTimeout(() => {
      this.printSteps();
    }, this.delayInMilliseconds); // Delay each move by 1 second        
  }
  //
  saveStep(n: number, from: string, to: string) {
    // Implement logic to move a single disk from 'from' tower to 'to' tower
    let message : string = `Move disk ${n} from Tower ${from} to Tower ${to}`;
    //
    console.log(message);
    //
    this._steps.push(message);
    //
    this._stepsAmt++;
  }
  //
  towerOfHanoi(n : number, from_rod : string, to_rod : string, aux_rod : string ):void
  {
      if (n === 0) {
        return;
      }
      this.towerOfHanoi(n - 1, from_rod, aux_rod, to_rod);
      this.saveStep(n,from_rod,to_rod);
      this.towerOfHanoi(n - 1, aux_rod, to_rod, from_rod);
  }
  //
  newGame():void {
    //
    console.log("[HANOI TOWERS] - [NEW GAME]")
    //
    this.towerA    = [new DiskInfo(1,"*") ,new DiskInfo(2,"**"),  new DiskInfo(3,"***"), new DiskInfo(4,"****")];
    this.towerB    = [new DiskInfo(0,"-") ,new DiskInfo(0,"-") ,  new DiskInfo(0,"-")  , new DiskInfo(0,"-")];
    this.towerC    = [new DiskInfo(0,"-") ,new DiskInfo(0,"-") ,  new DiskInfo(0,"-")  , new DiskInfo(0,"-")];
    //
    this.steps        = [];
    this._steps       = [];
    this._stepsIndex  = 0;
    this._stepsAmt    = 0;
    //
    this._startGame  = false;
  }
  //  
  startGame():void {
    //
    console.log("[HANOI TOWERS] - [START GAME]")
    //
    this._startGame = true;
    //
    let N : number = 4;
		// A, B and C are names of rods
    //
    this._steps.push("[BEGIN STEPS]");
    this.towerOfHanoi(N, 'A', 'C', 'B');
    this._steps.push("[END STEPS]");
    //
    this.printSteps();
  }
}
