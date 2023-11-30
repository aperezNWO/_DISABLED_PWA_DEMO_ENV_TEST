import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './Modules/home/home.component';
import { SudokuComponent } from './Modules/Algorithm/sudoku/sudoku.component';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
//
const routes = [
  { path: 'Home'  , component: HomeComponent     },
  { path: 'Sudoku', component: SudokuComponent   },
  { path: '**'    , component: AppComponent      },
];
@NgModule({
  declarations: [AppComponent, HomeComponent, SudokuComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(routes),
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {}
