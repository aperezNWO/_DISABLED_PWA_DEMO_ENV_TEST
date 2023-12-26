import { Component          } from '@angular/core';
import { CommonModule       } from '@angular/common';
import { TowerComponent     } from './tower/tower.component';
@Component({
    selector: 'app-hanoi-towers',
    templateUrl: './hanoi-towers.component.html',
    styleUrl: './hanoi-towers.component.css',
})
//
export class HanoiTowersComponent {
  //
  public towerOne: any;
  public towerTwo: any;
  public towerThree: any;
}
