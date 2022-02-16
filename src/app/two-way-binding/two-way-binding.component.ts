import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent implements OnInit {
  userName = 'Initial value via TWB';

  constructor() { }

  ngOnInit(): void {
  }
  onButtonClick() {
    this.userName = "";
  }
}
