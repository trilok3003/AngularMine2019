import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-auto-complete',
  templateUrl: './search-auto-complete.component.html',
  styleUrls: ['./search-auto-complete.component.css']
})
export class SearchAutoCompleteComponent implements OnInit {
  public search:any = '';
  locked: any[] = [];
  query = '';
  constructor() { }

  ngOnInit() {
    this.locked = [
      {ID: 1, User: 'Agustin', AuthID: '68114', FormName: 'Fellman', WinHandle: 'Oak Way'},
      {ID: 2, User: 'Alden', AuthID: '98101', FormName: 'Raccoon Run', WinHandle: 'Newsome'},
      {ID: 3, User: 'Ramon', AuthID: '28586', FormName: 'Yorkshire Circle', WinHandle: 'Dennis'},
      {ID: 4, User: 'Elbert', AuthID: '91775', FormName: 'Lee', WinHandle: 'Middleville Road'},
  ]
  }
  openModal(event,lock) {
    console.log(event.target.value);
    console.log(lock)
  }

}
