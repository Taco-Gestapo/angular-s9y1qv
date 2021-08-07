import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];

  constructor(private http: HttpClient) {}

  addToCart(product: Product) {
    console.log('cartservice.addtocart :' + product);
    this.items.push(product);
  }

  getItems() {
    console.log('cartservice.getitems :' + this.items);
    return this.items;
  }

  clearCart() {
    console.log('cartservice.clearcart');
    this.items = [];
    return this.items;
  }
}
