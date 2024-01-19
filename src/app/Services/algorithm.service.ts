import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlgorithmService {
  ////////////////////////////////////////////////////////////////
  // CAMPOS
  ////////////////////////////////////////////////////////////////
  public HTTPOptions_Text = {
    headers: new HttpHeaders({
      Accept: 'application/text',
    }),
    responseType: 'text' as 'json',
  };
  //
  public HTTPOptions_JSON = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
    responseType: 'text' as 'json',
  };
  ////////////////////////////////////////////////////////////////
  // CAMPOS
  ////////////////////////////////////////////////////////////////
  constructor(public http: HttpClient) {
    ////
  }
  //
  _GetSudoku(): Observable<string> {
    //
    let p_url: string =
      'https://webapiangulardemo.somee.com/Demos/Sudoku_Generate_CPP';
    //
    let sudokuGenerated: Observable<string> = this.http.get<string>(
      p_url,
      this.HTTPOptions_Text,
    );
    //
    return sudokuGenerated;
  }
  //
  _GetSudoku_NodeJS(): Observable<string> {
    //
    let p_url: string = 'https://ms7tks-4000.csb.app/Sudoku_Generate_NodeJS';
    //
    let sudokuGenerated: Observable<string> = this.http.get<string>(
      p_url,
      this.HTTPOptions_JSON,
    );
    //
    return sudokuGenerated;
  }
  //
  _SolveSudoku(p_matrix: string): Observable<string> {
    //
    let p_url: string = `https://webapiangulardemo.somee.com/Demos/Sudoku_Solve_CPP?p_matrix=${p_matrix}`;
    //
    let sudokuSolved: Observable<string> = this.http.get<string>(
      p_url,
      this.HTTPOptions_Text,
    );
    //
    return sudokuSolved;
  }
  //
  _TestNodeJs(): Observable<string> {
    //
    let p_url: string = `https://ms7tks-4000.csb.app/databaseconnect`;
    // let p_url: string ='https://fluffy-space-barnacle-vrwvjp6qjvphw9g-4000.app.github.dev/databaseconnect';
    //
    let nodeJsOutput: Observable<string> = this.http.get<string>(
      p_url,
      this.HTTPOptions_JSON,
    );
    //
    console.log('Testing Url : ' + p_url);
    //
    return nodeJsOutput;
  }
}
