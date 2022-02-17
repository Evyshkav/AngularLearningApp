import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  ref;
  counter: number;
  @Output() gameStarted = new EventEmitter<number>();

  constructor() {
    this.counter = 1;
   }

  ngOnInit(): void {
  }

  onStart() {
    this.ref = setInterval(() => {
      this.gameStarted.emit(this.counter);
      this.counter++;
    }, 1000);
  }

  onPause() {
    clearInterval(this.ref);
  }
}
