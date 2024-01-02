// chat.component.ts
import { Component, OnInit } from '@angular/core';
import { ChatService       } from '../service/chat.service';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  parentData: any[] = [];

  constructor(private chatService: ChatService) {}

  ngOnInit() {
    this.chatService.getMessages().subscribe(messages => this.parentData = messages);
    this.chatService.onNewMessage.subscribe(message   => this.NotifyingMessage(message));
  }

  NotifyingMessage(message: string): void {
    console.log("Pushing data to client : " + message);
    //this.parentData.push(message);
    console.log("Message Array (client) : " + this.parentData);
  }

  sendMessage(message: string) {
    console.log("sending message: ", message);
    this.chatService.sendMessage(message);
  }
}