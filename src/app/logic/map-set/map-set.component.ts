import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-set',
  templateUrl: './map-set.component.html',
  styleUrls: ['./map-set.component.css']
})
export class MapSetComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let map = new Map();

map.set('1', 'str1');   // a string key
map.set(1, 'num1');     // a numeric key
map.set(true, 'bool1'); // a boolean key

// remember the regular Object? it would convert keys to string
// Map keeps the type, so these two are different:
console.log( map.get(1)   ); // 'num1'
console.log( map.get('1') ); // 'str1'
console.log( map.has('1') ); // true
console.log( map.size ); // 3
console.log( map.keys() ); // 3
console.log(map.values() ); // 3
console.log(map.entries() ); // 3

let recipeMap = new Map([
  ['cucumber', 500],
  ['tomatoes', 350],
  ['onion',    50]
]);

// iterate over keys (vegetables)
for (let vegetable of recipeMap.keys()) {
  console.log(vegetable); // cucumber, tomatoes, onion
}

// iterate over values (amounts)
for (let amount of recipeMap.values()) {
  console.log(amount); // 500, 350, 50
}

// iterate over [key, value] entries
for (let entry of recipeMap) { // the same as of recipeMap.entries()
  console.log(entry); // cucumber,500 (and so on)
}
recipeMap.forEach((value, key, map)=> {
  console.log(`${key}: ${value}, ${map}`)
})

let obj = {
  name: "John",
  age: 30
};

let map1 = new Map(Object.entries(obj));

console.log( map1.get('name'))

let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// visits, some users come multiple times
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

// set keeps only unique values
console.log( set.size ); // 3

for (let user of set) {
  console.log(user); // John (then Pete and Mary)
}

let set1 = new Set(["oranges", "apples", "bananas"]);

for (let value of set1) console.log(value);

// the same with forEach:
set1.forEach((value, valueAgain, set) => {
  console.log(value);
});
let values = ["Hare", "Krishna", "Hare", "Krishna",
"Krishna", "Krishna", "Hare", "Hare", ":-O"
];
  console.log(this.getUnique(values))
  let sorted = values[1] // PAN
  .toLowerCase() // pan
  .split('') // ['p','a','n']
  .sort() // ['a','n','p']
  .join(''); // anp
  console.log(sorted)
  console.log(this.getUnique2(values))
  }
  getUnique(arr) {
    return Array.from(new Set(arr));
  }
  getUnique2(arr) {
    return [...(new Set(arr)).values()];
  }

}
