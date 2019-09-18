import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resove-duplicasy',
  templateUrl: './resove-duplicasy.component.html',
  styleUrls: ['./resove-duplicasy.component.css']
})
export class ResoveDuplicasyComponent implements OnInit {
  original = [2,3,4,5,2,4,5,61,2,7,3,4];
  filtered = [];
  arrObjectOriginal = [
    { id: 1, name: "king" },
    { id: 2, name: "master" },
    { id: 3, name: "lisa" },
    { id: 4, name: "ion" },
    { id: 5, name: "jim" },
    { id: 6, name: "gowtham" },
    { id: 1, name: "jam" },
    { id: 1, name: "lol" },
    { id: 2, name: "kwick" },
    { id: 3, name: "april" },
    { id: 7, name: "sss" },
    { id: 8, name: "brace" },
    { id: 8, name: "peiter" },
    { id: 5, name: "hey" },
    { id: 6, name: "mkl" },
    { id: 9, name: "melast" },
    { id: 9, name: "imlast" },
    { id: 10, name: "glow" }
  ];
  arrObjectFilter= [];
  constructor() { }

  ngOnInit() {
    this.removeDuplicacyInArray(this.original);
    this.arrObjectFilter=this.getUnique(this.arrObjectOriginal, 'id');
    console.log(this.arrObjectFilter)
  }
  removeDuplicacyInArray(array) {
   this.filtered = array.filter((el, i, a) => i === a.indexOf(el))
  }
   removeDuplicacyInArray1(array,i) {
  array.splice(array.indexOf(i), 1);
   }
   // for array of object
    getUnique(arr, comp) {
    const unique = arr
         .map(e => e[comp])
        // store the keys of the unique objects
       .map((e, i, final) => final.indexOf(e) === i && i)
       // eliminate the dead keys & store unique objects
       .filter(e => arr[e]).map(e => arr[e]);
     return unique;
  }
}
