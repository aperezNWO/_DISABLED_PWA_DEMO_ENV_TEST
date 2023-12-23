import { Component,OnInit  } from '@angular/core';
import { CommonModule      } from '@angular/common';
import { BoardComponent    } from './board/board.component';
import { ListItem } from 'src/app/Models/algorithm-models.model';
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
  //
  protected tituloSource    : string = '¿Quien Inicia?';
  //
  __SourceList              : any;
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
  ////////////////////////////////
  // METODOS
  ////////////////////////////////
}



