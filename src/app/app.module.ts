import { APP_INITIALIZER, NgModule, isDevMode } from '@angular/core';
import { NgbModule                     } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule, DatePipe        } from '@angular/common';
import { FormsModule                   } from '@angular/forms';
import { ReactiveFormsModule           } from '@angular/forms';
import { BrowserModule                 } from '@angular/platform-browser';
import { provideClientHydration        } from '@angular/platform-browser';
import { BrowserAnimationsModule       } from '@angular/platform-browser/animations';
import { RouterModule                  } from '@angular/router';
import { HttpClient                    } from '@angular/common/http';
import { HttpClientModule              } from '@angular/common/http';
import { AppComponent                  } from './app.component';
import { HomeComponent                 } from './Modules/home/home.component';
import { SudokuComponent               } from './Modules/Games/sudoku/sudoku.component';
import { BoardComponent                } from "./Modules/Games/tic-tac-toe/offline/board/board.component";
import { TicTacToeComponent            } from './Modules/Games/tic-tac-toe/offline/tic-tac-toe.component';
import { TicTacToeOnlineComponent      } from './Modules/Games/tic-tac-toe/tic-tac-toe-online/tic-tac-toe-online.component';
import { UntTestingComponent           } from './Modules/UnitTesting/unt-testing/unt-testing.component';
import { TowerComponent                } from "./Modules/Games/hanoi-towers/tower/tower.component";
import { HanoiTowersComponent          } from './Modules/Games/hanoi-towers/game-hanoi.component';
import { MessageComponent              } from './Modules/chat/message/message.component';
import { ChatComponent                 } from './Modules/chat/chat/chat.component';
import { BoardOnlineComponent          } from './Modules/Games/tic-tac-toe/tic-tac-toe-online/board/board.component';
import { ConfigService                 } from './Services/config.service';
import { ServiceWorkerModule           } from '@angular/service-worker';
//
const routes = [
  { path: 'Home'             , component: HomeComponent              },
  { path: 'Sudoku'           , component: SudokuComponent            },
  { path: 'TicTacToe'        , component: TicTacToeComponent         },
  { path: 'TicTacToeOnline'  , component: TicTacToeOnlineComponent   },
  { path: 'Hanoi'            , component: HanoiTowersComponent       },
  { path: 'UnitTesting'      , component: UntTestingComponent        },
  { path: 'Chat'             , component: ChatComponent              },
  { path: '**'               , component: AppComponent               },
];

//
export function loadConfig(configService: ConfigService) {
  return () => configService.loadConfig();
}

@NgModule({
    declarations: [AppComponent, HomeComponent, SudokuComponent, TicTacToeComponent, HanoiTowersComponent, UntTestingComponent, MessageComponent, ChatComponent, TicTacToeOnlineComponent ],
    providers: [DatePipe, HttpClient, provideClientHydration(),
      [
        ConfigService,
        {
          provide   : APP_INITIALIZER,
          useFactory: loadConfig,
          deps      : [ConfigService],
          multi     : true
        }
      ],
    ],
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
        BoardComponent,
        TowerComponent,
        BoardOnlineComponent,
        ServiceWorkerModule.register('ngsw-worker.js', {
          enabled: !isDevMode(),
          // Register the ServiceWorker as soon as the application is stable
          // or after 30 seconds (whichever comes first).
          registrationStrategy: 'registerWhenStable:30000'
        })
    ]
})
export class AppModule {}
