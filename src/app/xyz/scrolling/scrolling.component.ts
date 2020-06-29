import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-scrolling',
  templateUrl: './scrolling.component.html',
  styleUrls: ['./scrolling.component.css']
})
export class ScrollingComponent implements OnInit {

  currentSection = 'section1';

  constructor(private _router: Router, private _route: ActivatedRoute, private _location: Location) {
  }

  ngOnInit() {
    this._route.params.subscribe(params => {
      this.currentSection = params['sectionId'];
      this.scrollTo(this.currentSection);
    });
  }

  onSectionChange(sectionId: string) {
    this._location.go(sectionId);
    // this._router.navigateByUrl(`scrollingMenu/:${sectionId}`)
    this.currentSection = sectionId;
  }

  scrollTo(section) {
    document.querySelector('#' + section)
      .scrollIntoView();
  }

}
