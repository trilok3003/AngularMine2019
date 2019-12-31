import { Component, OnInit } from '@angular/core';
import { WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-wikipedia',
  templateUrl: './wikipedia.component.html',
  styleUrls: ['./wikipedia.component.css']
})
export class WikipediaComponent implements OnInit {

  constructor(private wikiediaService: WikipediaService) { }

  ngOnInit() {
    this.wikiediaService.getConfig().subscribe(res => {
      console.log(res)
    })
  }

}
