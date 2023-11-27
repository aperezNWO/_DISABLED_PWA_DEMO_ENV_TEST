import { Injectable                      } from '@angular/core';
import { HttpClient, HttpHeaders         } from '@angular/common/http';
import { Observable                      } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlgorithmService {
    ////////////////////////////////////////////////////////////////  
    // CAMPOS
    ////////////////////////////////////////////////////////////////  
    public HTTPOptions_Text = {
      headers: new HttpHeaders({
        'Accept':'application/text'
      }),
      'responseType'  : 'text' as 'json'
    };
    //    
    public HTTPOptions_JSON = {
      headers: new HttpHeaders({
        'Content-Type' : 'application/json'
      })
      ,'responseType' : 'text' as 'json'
    }; 
    ////////////////////////////////////////////////////////////////  
    // CAMPOS
    ////////////////////////////////////////////////////////////////  
    constructor(public http: HttpClient) { 
      ////
    }
    //
    _GetSudoku(): Observable<string>
   {
     //
     // https://webapiangulardemo.somee.com/Demos/Sudoku_Generate_CPP
     // let p_url         : string  = `${this._prefix}demos/_GetAppVersion`;
     let p_url         : string  = 'https://webapiangulardemo.somee.com/Demos/Sudoku_Generate_CPP';
     //
     let sudokuGenerated    : Observable<string> =  this.http.get<string>(p_url,this.HTTPOptions_Text);
     //
     return sudokuGenerated;
   };
}
