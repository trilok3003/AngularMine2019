import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
@Component({
  selector: 'app-add-product-template',
  templateUrl: './add-product-template.component.html',
  styleUrls: ['./add-product-template.component.css']
})
export class AddProductTemplateComponent implements OnInit {
  product: any = {}
  formSubmitted = false;
  productTypes = ['Laptop', 'Mobile' ];
  constructor(public productService: ProductsService) { }
  ngOnInit() {
  }
  addProduct() {
    this.productService.addProduct(this.product);
    this.formSubmitted = true;
  }
}
