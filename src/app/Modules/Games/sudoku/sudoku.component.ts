import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { AlgorithmService } from 'src/app/Services/algorithm.service';
import { Observable } from 'rxjs';
import { _languageName } from '../../../Models/algorithm-models.model';
//
@Component({
  selector: 'app-sudoku',
  templateUrl: './sudoku.component.html',
  styleUrl: './sudoku.component.css',
})
export class SudokuComponent implements OnInit {
  //
  board: number[][] = [];
  /*    
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9]
  */
  //
  protected tituloListadoLenguajes: string = 'Seleccione Backend';
  protected btnGenerateCaption: string = '[GENERAR]';
  protected btnSolveCaption: string = '[RESOLVER]';
  //
  @ViewChild('_languajeList') _languajeList: any;
  //
  public __languajeList: any;
  //
  public _cppSourceDivHidden: boolean = true;
  //
  public sudokuSolved: boolean = false;
  //
  public _sudokuGenerated: string = '';
  //-------------------------------------------------
  // file upload
  //-------------------------------------------------
  selectedFiles?: FileList;
  currentFile?: File;
  progress: number = 0;
  message: string = '';
  downloadLink: string = '';
  //
  constructor(private algorithmService: AlgorithmService) {
    //
    console.log('[SUDOKU - INGRESO]');
  }
  //
  ngOnInit(): void {
    //-----------------------------------------------------------------------------
    // LENGUAJES DE PROGRAMACION
    //-----------------------------------------------------------------------------
    this.__languajeList = new Array();
    //
    this.__languajeList.push(
      new _languageName(0, '(SELECCIONE OPCION..)', false),
    );
    //
    this.__languajeList.push(new _languageName(1, '(.NET Core/C++)', true));
    this.__languajeList.push(new _languageName(2, '(Node.js)', false));
    //
    this._cppSourceDivHidden = false;
    //
    this._GetSudoku(true);
  }
  //
  public _cppSourceDivHiddenChaged(): void {
    //
    console.log('SUDOKU - [DIV CPP SOURCE CHANGED]');
    //
    let _selectedIndex: number =
      this._languajeList.nativeElement.options.selectedIndex;
    this._cppSourceDivHidden = _selectedIndex != 1; // item 1 = "c++"
  }
  //
  public _GetSudoku(onLoad: boolean): void {
    //
    console.log('[SUDOKU - GENERATE]');
    //
    let generatedSudoku: Observable<string>;
    let selectedIndex: number = onLoad
      ? 1
      : this._languajeList.nativeElement.options.selectedIndex; // c++ by default
    //
    switch (selectedIndex) {
      case 1: // c++
        generatedSudoku = this.algorithmService._GetSudoku();
        break;
      case 2: // Typescript
        generatedSudoku = this.algorithmService._GetSudoku_NodeJS();
        break;
      default:
        return;
    }
    //
    this.sudokuSolved = false;
    //
    this.btnGenerateCaption = '[...generando...]';
    //
    const generatedSudokuObserver = {
      next: (jsondata: string) => {
        //
        console.log('[SUDOKU - GENERATE] - (return): ' + jsondata);
        //
        this._sudokuGenerated = jsondata;
        //
        jsondata = jsondata.replaceAll('[', '');
        jsondata = jsondata.replaceAll(']', '');
        jsondata = jsondata.replaceAll('},', '|');
        jsondata = jsondata.replaceAll('{', '');
        jsondata = jsondata.replaceAll('}', '');
        let jsonDataArray: string[] = jsondata.split('|');
        //
        this.board = [];
        //
        for (let i = 0; i < 9; i++) {
          const row: number[] = [];
          console.log(jsonDataArray[i]);
          const rowString: string[] = jsonDataArray[i].split(',');
          for (let j = 0; j < 9; j++) {
            //row.push(i * 3 + j);
            row.push(parseInt(rowString[j]));
          }
          this.board.push(row);
        }
      },
      error: (err: Error) => {
        //
        console.error(
          '[SUDOKU - GENERATE] - (ERROR) : ' + JSON.stringify(err.message),
        );
        //
        this.sudokuSolved = false;
        //
        this.btnGenerateCaption = '[GENERAR]';
      },
      complete: () => {
        //
        console.log('[SUDOKU - GENERATE] -  (COMPLETE)');
        //
        this.btnGenerateCaption = '[GENERAR]';
      },
    };
    //
    generatedSudoku.subscribe(generatedSudokuObserver);
  }
  //
  public _SolveSudoku(): void {
    //
    console.log('[SUDOKU - SOLVE] \n' + this._sudokuGenerated);
    //
    this.sudokuSolved = true;
    //
    this.btnSolveCaption = '[...resolviendo...]';
    //
    let solveSudoku: Observable<string>;
    //
    let selectedIndex: number =
      this._languajeList.nativeElement.options.selectedIndex; // c++ by default
    //
    switch (selectedIndex) {
      case 1: // c++
        solveSudoku = this.algorithmService._SolveSudoku(this._sudokuGenerated);
        break;
      case 2: // Typescript
        solveSudoku = this.algorithmService._SolveSudoku_NodeJS(
          this._sudokuGenerated,
        );
        break;
      default:
        return;
    }
    //
    const solveSudokuObserver = {
      next: (jsondata: string) => {
        //
        console.log('[SUDOKU - SOLVE] - (return): ' + jsondata);
        //
        this._sudokuGenerated = jsondata;
        //
        jsondata = jsondata.replaceAll('[', '');
        jsondata = jsondata.replaceAll(']', '');
        jsondata = jsondata.replaceAll('},', '|');
        jsondata = jsondata.replaceAll('{', '');
        jsondata = jsondata.replaceAll('}', '');
        let jsonDataArray: string[] = jsondata.split('|');
        //
        this.board = [];
        //
        for (let i = 0; i < 9; i++) {
          const row: number[] = [];
          console.log(jsonDataArray[i]);
          const rowString: string[] = jsonDataArray[i].split(',');
          for (let j = 0; j < 9; j++) {
            //row.push(i * 3 + j);
            row.push(parseInt(rowString[j]));
          }
          this.board.push(row);
        }
      },
      error: (err: Error) => {
        //
        console.error(
          '[SUDOKU - SOLVE] - (ERROR) : ' + JSON.stringify(err.message),
        );
      },
      complete: () => {
        //
        console.log('[SUDOKU - SOLVE] -  (COMPLETE)');
        //
        this.btnSolveCaption = '[RESOLVER]';
      },
    };
    //
    solveSudoku.subscribe(solveSudokuObserver);
  }
  //------------------------------------------------------
  // FILE UPLOAD METHODS / EVEND HANDLERS
  //------------------------------------------------------
  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }
  //
  upload(): void {
    //
    this.progress = 0;
    //
    this.message = '...cargando...';
    //
    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);
      //
      if (file) {
        //
        this.currentFile = file;
        //
        this.algorithmService.upload(this.currentFile).subscribe({
          next: (event: any) => {
            if (event.type === HttpEventType.UploadProgress) {
              //
              this.progress = Math.round((100 * event.loaded) / event.total);
            } else if (event instanceof HttpResponse) {
              //
              console.log('RESPONSE : ' + event.body);
              //
              this.message = event.body;
            }
          },
          error: (err: any) => {
            //
            console.log(err);
            //
            this.progress = 0;
            //
            if (err.error && err.error.message) {
              //
              this.message = err.error.message;
            } else {
              //
              this.message = 'Could not upload the file!';
            }
            //
            this.currentFile = undefined;
          },
        });
      }
      //
      this.selectedFiles = undefined;
    }
  }
}
