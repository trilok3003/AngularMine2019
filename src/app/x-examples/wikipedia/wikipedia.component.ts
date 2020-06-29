import { Component, OnInit } from '@angular/core';
import { WikipediaService } from './wikipedia.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-wikipedia',
  templateUrl: './wikipedia.component.html',
  styleUrls: ['./wikipedia.component.css']
})
export class WikipediaComponent implements OnInit {
  items: Array<string>;
  term = new FormControl();
  constructor(private wikiediaService: WikipediaService) { }

  ngOnInit() {
    this.wikiediaService.getConfig().subscribe(res => {
      console.log(res)
    })
    // this.term.valueChanges
    // .debounceTime(400)
    // .subscribe(term => this.wikipediaService.search(term).then(items => this.items = items));
 
    // this.term.valueChanges
    //      .debounceTime(400)
    //      .distinctUntilChanged()
    //      .flatMap(term => this.wikipediaService.search(term))
    //      .subscribe(items => this.items = items);


    // this.items = this.term.valueChanges
    // .debounceTime(400)
    // .distinctUntilChanged()
    // .switchMap(term => this.wikipediaService.search(term));
  }
  // search(term) {
  //   this.wikiediaService.search(term)
  //                        .then(items => this.items = items);
  // }
  search(term) {

  }

}
