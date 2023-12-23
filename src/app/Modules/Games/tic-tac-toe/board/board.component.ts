import { Component, OnInit } from '@angular/core';
import { CommonModule      } from '@angular/common';
import { SquareComponent   } from "../square/square.component";
//
@Component({
    selector: 'app-board',
    standalone: true,
    templateUrl: './board.component.html',
    styleUrl: './board.component.css',
    imports: [CommonModule, SquareComponent]
})
//
export class BoardComponent implements OnInit {
  //
  squares: ('X' | 'O' | null)[] = Array(9).fill(null);
  xIsNext = true;
  winner: 'X' | 'O' | null = null;
  //
  ngOnInit(): void {
    // Additional initialization logic if needed
  }
  //
  makeMove(index: number): void {
    if (this.squares[index] || this.winner) {
      return;
    }
    this.squares[index] = this.xIsNext ? 'X' : 'O';
    this.checkWinner();
    this.xIsNext = !this.xIsNext;
  }
  //
  checkWinner(): void {
    // Logic to check for a winner
    // Implement logic to check rows, columns, and diagonals for a winner
  }
}




