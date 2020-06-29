import { Component, OnInit } from '@angular/core';
import { of, pipe, BehaviorSubject } from 'rxjs';
import {map, debounceTime, switchMap,filter} from 'rxjs/operators';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-rxjs-operators2',
  templateUrl: './rxjs-operators2.component.html',
  styleUrls: ['./rxjs-operators2.component.css']
})
export class RxjsOperators2Component implements OnInit {
  dogs = [
    {id:1,name: 'dog 1',url:'1.jpg'},
    {id: 2,name: 'dog 2',url:'2.jpg'},
    {id: 3,name: 'dog 3',url:'3.jpeg'},
    {id:4,name: 'dog 4',url:'4.jpg'},
    {id: 5,name: 'dog 5',url:'5.jpeg'},
    {id: 6,name: 'dog 6',url:'6.jpg'}
  ]
  cats = [
    {name: 'cat 1',url:'a.jpeg'},
    {name: 'cat 2',url:'b.jpeg'},
    {name: 'cat 3',url:'c.jpg'},
    {name: 'cat 4',url:'d.jpeg'},
    {name: 'cat 5',url:'e.jpg'},
    {name: 'cat 6',url:'f.jpg'}
  ];
  dogs1 ;
  cats1;
  dogCount;
  catCount;
  dogsForm: FormGroup;
  dog;
  currentDog = new BehaviorSubject(null);
  constructor(private fb: FormBuilder) {
    this.dogsForm = this.fb.group({
      dogId: ['']
    })
   }

  ngOnInit() {
    this.dogs1 = of(this.dogs)
     of(this.cats).subscribe(res => this.cats1 = res);
    this.dogCount = of(this.dogs).pipe(map(dogs => dogs.length))
    this.catCount = of(this.cats).pipe(map(cats => cats.length))
    this.searchDog();
  }
  searchDog() {
    this.dogsForm.get('dogId').valueChanges.pipe(
      debounceTime(500),
      switchMap(id => {
        console.log(id);
        return this.dogs.filter(dog => dog.id === id)
      })
    ).subscribe(res => {console.log(res);this.dog = res});
   }
   changeDog(dog) {
     this.currentDog.next(dog);
   }

}
