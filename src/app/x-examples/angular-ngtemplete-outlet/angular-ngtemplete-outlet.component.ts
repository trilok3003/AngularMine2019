import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-angular-ngtemplete-outlet',
  templateUrl: './angular-ngtemplete-outlet.component.html',
  styleUrls: ['./angular-ngtemplete-outlet.component.css']
})
export class AngularNgtempleteOutletComponent implements OnInit {
  @Input() items: {
    header: string,
    content: string
  }[] = [];

  @Input() mode: 'card' | 'list' = 'card';
  constructor() { }

  ngOnInit() {
  }

}
