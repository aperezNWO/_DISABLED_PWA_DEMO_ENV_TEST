import { CommonModule } from '@angular/common';
import { Component    } from '@angular/core';
import { ChatService  } from 'src/app/Services/chat.service';

@Component({
  selector: 'app-board-online',
  standalone: true,
  imports    : [  CommonModule ],
  templateUrl: './board.component.html',
  styleUrl: './board.component.css'
})
export class BoardOnlineComponent {
  //
  parentData: any[] = [];
  //
  constructor(private chatService: ChatService) {}
  //
  ngOnInit() {
    this.chatService.getMessages().subscribe(messages => this.parentData = messages);
    this.chatService.onNewMessage.subscribe(message   => this.NotifyingMessage(message));
  }
  //
  NotifyingMessage(message: string): void {
    console.log("Pushing data to client : " + message);
    //this.parentData.push(message);
    console.log("Message Array (client) : " + this.parentData);
  }
  //
  sendMessage(message: string) {
    console.log("sending message: ", message);
    this.chatService.sendMessage(message);
  }

}
