import { NgModule                      } from '@angular/core';
import { NgbModule                     } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule                  } from '@angular/common';
import { FormsModule                   } from '@angular/forms';
import { ReactiveFormsModule           } from '@angular/forms';
import { BrowserModule                 } from '@angular/platform-browser';
import { BrowserAnimationsModule       } from '@angular/platform-browser/animations';
import { RouterModule                  } from '@angular/router';
import { HttpClient                    } from '@angular/common/http';
import { HttpClientModule              } from '@angular/common/http';
import { AppComponent                  } from './app.component';
import { HomeComponent                 } from './Modules/home/home.component';
import { SudokuComponent               } from './Modules/Games/sudoku/sudoku.component';
import { TicTacToeComponent            } from './Modules/Games/tic-tac-toe/tic-tac-toe.component';
import { UntTestingComponent           } from './Modules/UnitTesting/unt-testing/unt-testing.component';
//
const routes = [
  { path: 'Home'       , component: HomeComponent       },
  { path: 'Sudoku'     , component: SudokuComponent     },
  { path: 'TicTacToe'  , component: TicTacToeComponent  },
  { path: 'UnitTesting', component: UntTestingComponent },
  { path: '**'         , component: AppComponent        },
];
@NgModule({
    declarations: [AppComponent, HomeComponent, SudokuComponent],
    providers: [HttpClient],
    bootstrap: [AppComponent],
    imports: [
        NgbModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule,
        RouterModule.forRoot(routes),
    ]
})
export class AppModule {}
