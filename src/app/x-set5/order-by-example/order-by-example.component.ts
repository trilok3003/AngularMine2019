import { Component, OnInit } from '@angular/core';
import { OrderPipe } from 'src/app/pipes/order.pipe';

@Component({
  selector: 'app-order-by-example',
  templateUrl: './order-by-example.component.html',
  styleUrls: ['./order-by-example.component.css']
})
export class OrderByExampleComponent implements OnInit {
  items = [
    { title: "third", value: "three", digit: 44 },
    { title: "second", value: "two", digit: 14 },
    { title: "first", value: "one", digit: 100 },
  ];

  order = "title";
  reverse = false;
  constructor(private orderPipe: OrderPipe) {
    console.log("order by digit");
    console.log(this.orderPipe.transform(this.items, 'digit'));
  } 

  ngOnInit() {
  }

}
