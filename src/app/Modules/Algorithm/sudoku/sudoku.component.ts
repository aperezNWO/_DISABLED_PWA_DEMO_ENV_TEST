import { Component, OnInit, ViewChild  }  from '@angular/core';
import { _languageName                 }  from '../../../Models/algorithm-models.model';
//
@Component({
  selector: 'app-sudoku',
  templateUrl: './sudoku.component.html',
  styleUrl: './sudoku.component.css'
})
export class SudokuComponent implements OnInit {
  //
  board: number[][] = [    
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9]
  ];
  //
  protected tituloListadoLenguajes                   : string = "Seleccione Lenguaje";
  //
  @ViewChild('_languajeList')    _languajeList       : any;
  //
  public __languajeList                              : any;
  //
  public _cppSourceDivHidden                         : boolean = true;
  //
  ngOnInit():void
  {
      //-----------------------------------------------------------------------------
      // LENGUAJES DE PROGRAMACION
      //-----------------------------------------------------------------------------
      this.__languajeList = new Array();
      //
      this.__languajeList.push( new _languageName(0,"(SELECCIONE OPCION..)"));        
      this.__languajeList.push( new _languageName(1,"C++"));  
      this.__languajeList.push( new _languageName(2,"C#"));        
      this.__languajeList.push( new _languageName(3,"Typescript (Node.js)"));        
   }
  //
  public _cppSourceDivHiddenChaged():void  
  {
    //
    console.log("SUDOKU - [DIV CPP SOURCE CHANGED]");
    //
    let _selectedIndex       : number  = this._languajeList.nativeElement.options.selectedIndex;
    this._cppSourceDivHidden = (_selectedIndex != 1) // item 2 = "c++"
  }
  //
  public _GetSudoku():void
  {

  }
  //
  public _SolveSudoku():void
  {

  }
}

/*
  {5, 3, 0, 0, 7, 0, 0, 0, 0},
  {6, 0, 0, 1, 9, 5, 0, 0, 0},
  {0, 9, 8, 0, 0, 0, 0, 6, 0},
  {8, 0, 0, 0, 6, 0, 0, 0, 3},
  {4, 0, 0, 8, 0, 3, 0, 0, 1},
  {7, 0, 0, 0, 2, 0, 0, 0, 6},
  {0, 6, 0, 0, 0, 0, 2, 8, 0},
  {0, 0, 0, 4, 1, 9, 0, 0, 5},
  {0, 0, 0, 0, 8, 0, 0, 7, 9}

Sudoku solved:

  5 3 4 6 7 8 9 1 2 
  6 7 2 1 9 5 3 4 8 
  1 9 8 3 4 2 5 6 7 
  8 5 9 7 6 1 4 2 3 
  4 2 6 8 5 3 7 9 1 
  7 1 3 9 2 4 8 5 6 
  9 6 1 5 3 7 2 8 4 
  2 8 7 4 1 9 6 3 5 
  3 4 5 2 8 6 1 7 9

*/
