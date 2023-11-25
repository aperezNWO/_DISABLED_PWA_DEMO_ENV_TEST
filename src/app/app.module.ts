import { NgModule                      } from '@angular/core';
import { BrowserModule                 } from '@angular/platform-browser';
import { RouterModule                  } from '@angular/router';
import { AppComponent                  } from './app.component';
import { SudokuComponent               } from './Modules/Algorithm/sudoku/sudoku.component';
//
const routes = [
  {  path: 'Sudoku'                , component: SudokuComponent                       },
];
@NgModule({
  declarations: [
    AppComponent,
    SudokuComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot( routes ),
  ],
  exports  : [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
