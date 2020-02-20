import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-filter-list',
  templateUrl: './search-filter-list.component.html',
  styleUrls: ['./search-filter-list.component.css']
})
export class SearchFilterListComponent implements OnInit {
  contacts;
  currentContact;
  searchModel;
  constructor() { }

  ngOnInit() {
    this.contacts = [
      {
          "name": "Jhon Leee",
          "email":"Jhon@hotmail.com"
      },
      {
        "name": "Mark Wood",
          "email":"mar45@rediffmail.com"
      },
      {
        "name": "Stephen Fluin",
          "email":"stephebfkuin@gmial.com"
      },
      {
        "name": "Lary page ",
          "email":"page43@hotmail.co.uk"
      },
      {
        "name": "Adel Semper",
          "email":"adelsemper5506@gmail.com"
      },
      {
        "name": "Mary Quer",
          "email":"quer@yahoo.co.in"
      }
  ]
  }
  public onSelect(contact): void {
    this.currentContact = contact; 
  }
}
