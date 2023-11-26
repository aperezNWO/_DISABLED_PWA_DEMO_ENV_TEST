import { NgModule                      } from '@angular/core';
import { BrowserModule                 } from '@angular/platform-browser';
import { RouterModule                  } from '@angular/router';
import { AppComponent                  } from './app.component';
import { HomeComponent                 } from './Modules/home/home.component';
import { SudokuComponent               } from './Modules/Algorithm/sudoku/sudoku.component';
//
const routes = [
  {  path: 'Sudoku' , component: SudokuComponent  },
  {  path: 'Home'   , component: HomeComponent    },
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SudokuComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot( routes ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
