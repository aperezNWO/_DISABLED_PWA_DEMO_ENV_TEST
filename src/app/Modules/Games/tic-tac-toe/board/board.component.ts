import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule                 } from '@angular/common';
import { SquareComponent              } from "../square/square.component";
import { ListItem                     } from 'src/app/Models/algorithm-models.model';
//
enum MoveType  {
  COMPUTERMOVE  = '0',
  HUMANMOVE     = 'X'
};
//
@Component({
    selector: 'app-board',
    standalone: true,
    templateUrl: './board.component.html',
    styleUrl: './board.component.css',
    imports: [CommonModule, SquareComponent]
})
export class BoardComponent implements OnInit {
  //
  squares: ('X' | 'O' | null)[] = Array(9).fill(null);
  xIsNext = true;
  winner: 'X' | 'O' | null = null;
  //
  protected tituloSource                   : string = '¿Quien Inicia?';
  //
  protected __SourceList                   : any;
  @ViewChild('_SourceList')   _sourceList  : any;
  //
  constructor() {
    //
  }
  //
  ngOnInit(): void {
    // Additional initialization logic if needed
    console.log("[TIC-TAC-TOE - INICIAR VALORES");
    //
    this.__SourceList = new Array();
    this.__SourceList.push(new ListItem(0, '(SELECCIONE OPCION..)', false));
    this.__SourceList.push(new ListItem(1, '[INICIA JUGADOR]'     , true));
    this.__SourceList.push(new ListItem(2, '[INICIA MAQUINA]'     , false));
  }
  //
  _tituloSourceChanged():void{
    //
  }
  //
  makeMove(index: number): void {
    if (this.squares[index] || this.winner) {
      return;
    }
    this.squares[index] = this.xIsNext ? 'X' : 'O';
    this.checkWinner();
    this.xIsNext = !this.xIsNext;
  }
  //
  checkWinner(): void {
    // Logic to check for a winner
    // Implement logic to check rows, columns, and diagonals for a winner
  }
  //
  newGame():void{
    //
    console.log("[GAME - TIC-TAC-TOE] - [NEW GAME]")
    //
    this.squares = Array(9).fill(null);
    //
    this._sourceList.nativeElement.options.selectedIndex = 0;
  }
  //
  startGame():void{ 
    //      
    console.log("[GAME - TIC-TAC-TOE] - [START GAME]")
    //
    let selectedIndex : number = this._sourceList.nativeElement.options.selectedIndex;
    //
    switch (selectedIndex)  
    {
        case 1 : this.playTicTacToe(MoveType.HUMANMOVE)
          break;
        case 2 : this.playTicTacToe(MoveType.COMPUTERMOVE)
          break;
    }
  }
  //
  playTicTacToe(moveType:MoveType):void
  {
    //
  }
};

