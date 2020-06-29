import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-data-to-routes',
  templateUrl: './data-to-routes.component.html',
  styleUrls: ['./data-to-routes.component.css']
})
export class DataToRoutesComponent implements OnInit {

  mymsg: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.mymsg = data.msg;
    });
  }
}
