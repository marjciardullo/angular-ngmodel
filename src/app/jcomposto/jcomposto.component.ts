import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jcomposto',
  templateUrl: './jcomposto.component.html',
  styleUrls: ['./jcomposto.component.css'],
})
export class JcompostoComponent implements OnInit {
  va: number;
  tj: number;
  n: number;
  constructor() {
    this.va = 25000;
    this.tj = 3;
    this.n = 6;
  }

  ngOnInit() {}
}
