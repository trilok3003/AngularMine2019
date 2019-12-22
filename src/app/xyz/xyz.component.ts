import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { interval } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-xyz',
  templateUrl: './xyz.component.html',
  styleUrls: ['./xyz.component.css']
})
export class XyzComponent implements OnInit {
  overlay: boolean;
  w= 400;
  h= 200;
  selectedValues = {};
  animals = ['Dog', 'Cat', 'Elephant'];
  form1: FormGroup;
  ratingForm: FormGroup;
  constructor(private http: HttpClient, private formBuilder: FormBuilder) { 
    this.form = this.formBuilder.group({
      first: ['', Validators.required],
      last: ['', Validators.required],
    });
    this.form1 = this.formBuilder.group({
      bigTitle: 'Big title',
      smallerTitle: 'Smaller one',
      text: 'Text text text text text text text text.'
    })
    this.ratingForm = this.formBuilder.group({
      rating: [null, Validators.required]
    })
    
  }
  // loader inter ceptor example
  callApi() {
    this.http.get('https://reqres.in/api/users?page=2')
      .subscribe(data => {
        console.log(data);
      })
  }
  //  Focus first invalid input on submit
  form: FormGroup;
  submit() {
    if (this.form.valid) {
      console.log(this.form);
    }
  }
  ngOnInit() {
  }
  onChange(value) {
    console.log(value)
  }
  // file upload

  base64textString = undefined;

  onUploadChange(evt: any) {
    const file = evt.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = this.handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }
  }

  handleReaderLoaded(e) {
    this.base64textString = 'data:image/png;base64,' + btoa(e.target.result);
  }

  delete() {
    this.base64textString = undefined;
  }
  //....
  names = [{value: 'Angular'}, {value: 'ReactJS'}];
  namesString = 'Angular,ReactJS'
  valueChanged(names: string) {
    this.names = names.split(',').map(_ => ({value: _}));
  }
  // local storage
  values: any = [];
  model;
  //

}
