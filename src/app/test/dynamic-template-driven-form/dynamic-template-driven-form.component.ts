import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-template-driven-form',
  templateUrl: './dynamic-template-driven-form.component.html',
  styleUrls: ['./dynamic-template-driven-form.component.scss']
})
export class DynamicTemplateDrivenFormComponent implements OnInit {
  public addresses: any[] = [{
    address: '',
    street: '',
    city: '',
    country: ''
  }];
  constructor() {

  }

  ngOnInit() {

  }

  addAddress() {
    this.addresses.push({
      address: '',
      street: '',
      city: '',
      country: ''
    });
  }

  removeAddress(i: number) {
    this.addresses.splice(i, 1);
  }

  logValue() {
    console.log(this.addresses);
  }
}
