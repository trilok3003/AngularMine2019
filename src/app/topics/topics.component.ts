import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppSidebarConfig } from '../app-sidebar-config';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent implements OnInit {
  topics;
  constructor(public router: Router) { }

  ngOnInit() {
    this.topics = AppSidebarConfig
  }
  toNavigate(path) {
   this.router.navigate([path]);
  }

}
