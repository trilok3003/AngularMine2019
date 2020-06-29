import { Component, OnInit } from '@angular/core';
import { Users } from './users';
import { ApiService } from './api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  name: string = ''; 
  users : Users[];
  user: any = {};
  constructor(public apiService: ApiService) { }

  ngOnInit() {
    this.getUserList();
  }
  getUserList() {
    this.apiService
    .getUsers()
    .subscribe((data:any) => {
      console.log(data);
      this.users = data.data;
    });
  }
  createUser(){
    console.log(this.user)
    this.apiService.createUsers(this.user).subscribe((res)=>{
    });
  }

}
