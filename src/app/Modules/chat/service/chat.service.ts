// chat.service.ts
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import io from 'socket.io-client';
import { of } from 'rxjs';

//
@Injectable({ providedIn: 'root' })
export class ChatService {
  private socket: any;
  private messages: any[] = [];
  onNewMessage = new Subject<any>();

  //
  constructor() {
    this.socket = io('http://localhost:4200'); // Replace with your server URL
    this.socket.on('message', (message: any) => {
      this.messages.push(message);
      this.onNewMessage.next(message);
    });
  }

  //
  getMessages(): Observable<any[]> {
    return of(this.messages);
  }

  //
  sendMessage(message: string) {
    this.socket.emit('message', message);
  }
}
