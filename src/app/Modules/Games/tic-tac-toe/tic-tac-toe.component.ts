import { Component,OnInit  } from '@angular/core';
import { CommonModule      } from '@angular/common';
import { BoardComponent    } from './board/board.component';
//
@Component({
    selector: 'app-tic-tac-toe',
    templateUrl: './tic-tac-toe.component.html',
    styleUrl: './tic-tac-toe.component.css',
    standalone:true,
    imports: [CommonModule,BoardComponent]
})
//
export class TicTacToeComponent implements OnInit {
  ////////////////////////////////
  // CAMPOS / PROPIEDADES
  ////////////////////////////////

  ////////////////////////////////
  // EVENT HANDLERS
  ////////////////////////////////
  constructor() {
      //
      console.log("[TIC-TAC-TOE - INICIO COMPONENTE");
  };
  //
  ngOnInit():void { 
    //
  }
  ////////////////////////////////
  // METODOS
  ////////////////////////////////
}


