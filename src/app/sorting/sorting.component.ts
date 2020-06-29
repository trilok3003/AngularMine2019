import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.css']
})
export class SortingComponent implements OnInit {
  originalProducts;
  orderedInAssendingProducts;
  orderedInDessendingProducts;
  products = [
    {'name': 'lenavo mobile', 'price': 2000},
    {'name': 'samsung', 'price': 3000},
    {'name': 'redmi', 'price': 7000},
    {'name': 'oppo', 'price': 4000},
    {'name': 'realme', 'price': 1000},
    {'name': 'voto', 'price': 8000},
    {'name': 'apple', 'price': 10000},
  ]
  
  ngOnInit() {
      this.getProducts();
  }
  
  getProducts() {
    of(this.products)
      .subscribe((data) => {
      this.originalProducts = data;
      this.sortByAssendingOrder('price');  
      this.sortByDessendingOrder('price')
    });
  }
  
  sortByAssendingOrder(field: string) {
  
          this.originalProducts.sort((a: any, b: any) => {
              if (a[field] < b[field]) {
                  return -1;
              } else if (a[field] > b[field]) {
                  return 1;
              } else {
                  return 0;
              }
          });
          this.orderedInAssendingProducts = this.originalProducts;
  }
  sortByDessendingOrder(field: string) {
  
   this.originalProducts.sort((a: any, b: any) => {
        if (a[field] < b[field]) {
            return 1;
        } else if (a[field] > b[field]) {
            return -1;
        } else {
            return 0;
        }
    });
    this.orderedInDessendingProducts = this.originalProducts;
}

}
