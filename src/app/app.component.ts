import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'platzi-angular';
  amigos = ['Lauta', 'Lean', 'Mati', 'Kily', 'Sabri'];

  obj = {};

  power = 10;

  products: Product[] = [
    {
      id: '1',
      image: 'assets/images/mather.png',
      title: 'Camiseta',
      price: 80000,
      description: 'bla bla bla bla bla',
    },
    {
      id: '2',
      image: 'assets/images/memoria.jpg',
      title: 'Hoodie',
      price: 80000,
      description: 'bla bla bla bla bla',
    },
    {
      id: '3',
      image: 'assets/images/micro.jpg',
      title: 'Mug',
      price: 80000,
      description: 'bla bla bla bla bla',
    },
    {
      id: '4',
      image: 'assets/images/placaDeVideo.jpg',
      title: 'Pin',
      price: 80000,
      description: 'bla bla bla bla bla',
    },
  ];

  addItem() {
    this.amigos.push('Un amigo');
  }

  deleteItem(index: number) {
    this.amigos.splice(index, 1);
  }
  clickProduct(id: number) {
    console.log('product');
    console.log(id);
  }
}
