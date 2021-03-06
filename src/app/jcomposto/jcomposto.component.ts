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
    this.n = 8;
  }

  ngOnInit() {}

  valorTotalJuros() {
    return this.JurosComposto(this.n);
  }

  JurosComposto(n: number) {
    return this.va * Math.pow(1 + this.tj / 100, n);
  }

  periodoParcelas() {
    let parcelas: Number[] = [];
    for (let i = 1; i <= this.n; i++) {
      parcelas.push(this.JurosComposto(i));
    }
    return parcelas;
  }
}
