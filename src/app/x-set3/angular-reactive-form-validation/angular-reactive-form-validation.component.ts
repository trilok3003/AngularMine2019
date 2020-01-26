import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {phoneNumberValidator} from '../../_helpers/validators/phone-validator'
@Component({
  selector: 'app-angular-reactive-form-validation',
  templateUrl: './angular-reactive-form-validation.component.html',
  styleUrls: ['./angular-reactive-form-validation.component.css']
})
export class AngularReactiveFormValidationComponent implements OnInit {
  countries = ['', 'USA', 'Germany', 'Italy', 'France'];
  contactForm: FormGroup;
  constructor() {
    this.contactForm = this.createFormGroup();
   }

  ngOnInit() {
  }
  createFormGroup() {
    return new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      mobile: new FormControl('', [Validators.required, phoneNumberValidator]),
      country: new FormControl('', [Validators.required])
    });
  }
  revert() {
    this.contactForm.reset();
  }
  
  onSubmit() {
    // ...
  }
  get mobile() {
    return this.contactForm.get('mobile');
  }
  
  get email() {
    return this.contactForm.get('email');
  }
}
