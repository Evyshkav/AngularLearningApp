import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {
  isParagraphVisible : boolean;
  buttonText : string;
  logs: Array<string>;

  constructor() { 
    this.isParagraphVisible = false;
    this.buttonText = 'Display Details';
    this.logs = [];
  }

  ngOnInit(): void {
  }

  onButtonClick(){
    this.isParagraphVisible = !this.isParagraphVisible;
    this.buttonText = this.isParagraphVisible ? "Hide Details" : "Display Details"

    var dateString = new Date().toLocaleString();
    this.logs.push("Button clicked " + dateString);
    
    console.log(this.logs);
  }
}
