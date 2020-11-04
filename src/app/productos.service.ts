import { Injectable } from '@angular/core';
import { Product } from './product.model';
@Injectable({
  providedIn: 'root',
})
export class ProductosService {
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
  constructor() {}

  getAllProducts() {
    return this.products;
  }

  getProduct(id: string) {
    return this.products.find((item) => id === item.id);
  }
}
