import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tower',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tower.component.html',
  styleUrl: './tower.component.css'
})
export class TowerComponent {
  @Input() tower: any;

}
