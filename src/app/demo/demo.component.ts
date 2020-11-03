import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = 'platzi-angular';
  amigos = ['Lauta', 'Lean', 'Mati', 'Kily', 'Sabri'];

  obj = {};

  power = 10;

  addItem() {
    this.amigos.push('Un amigo');
  }

  deleteItem(index: number) {
    this.amigos.splice(index, 1);
  }

}
