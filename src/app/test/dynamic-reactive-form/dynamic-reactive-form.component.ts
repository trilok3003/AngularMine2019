import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-dynamic-reactive-form',
  templateUrl: './dynamic-reactive-form.component.html',
  styleUrls: ['./dynamic-reactive-form.component.scss']
})
export class DynamicReactiveFormComponent implements OnInit {
  public addresses: FormArray;
  public addressForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.addressForm = this.fb.group({
      addresses: this.fb.array([ this.createAddress() ])
    });
  }

  ngOnInit() {

  }

  get addressControls() {
    return this.addressForm.get('addresses')['controls'];
  }

  createAddress(): FormGroup {
    return this.fb.group({
      address: '',
      street: '',
      city: '',
      country: ''
    });
  }

  addAddress(): void {
    this.addresses = this.addressForm.get('addresses') as FormArray;
    this.addresses.push(this.createAddress());
  }

  removeAddress(i: number) {
    this.addresses.removeAt(i);
  }

  logValue() {
    console.log(this.addresses.value);
  }

}
