import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products = [];
  constructor() {
    // this.products = MockData.Products;
  }
  getProducts(): any[] {
    return this.products;
  }
  addProduct(product: any) {
    this.products.push(product);
  }
  removeProduct(product: any) {
    let index = this.products.indexOf(product);
    if (index !== -1) {
      this.products.splice(index, 1);
    }

}
}
