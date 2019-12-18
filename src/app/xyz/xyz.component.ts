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
  overlay: boolean
  constructor(private http: HttpClient, private formBuilder: FormBuilder) { 
    this.form = this.formBuilder.group({
      first: ['', Validators.required],
      last: ['', Validators.required],
    });
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

}
