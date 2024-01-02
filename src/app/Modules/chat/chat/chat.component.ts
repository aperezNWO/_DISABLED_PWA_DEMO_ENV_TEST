// chat.component.ts
import { Component, OnInit } from '@angular/core';
import { ChatService       } from '../service/chat.service';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  messages: any[] = [];

  constructor(private chatService: ChatService) {}

  ngOnInit() {
    this.chatService.getMessages().subscribe(messages => this.messages = messages);
    this.chatService.onNewMessage.subscribe(message => this.messages.push(message));
  }

  sendMessage(message: string) {
    this.chatService.sendMessage(message);
  }
}