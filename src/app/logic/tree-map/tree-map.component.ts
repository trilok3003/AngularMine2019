import { Component, OnInit } from '@angular/core';
import { citiesData } from './source-data';

@Component({
  selector: 'app-tree-map',
  templateUrl: './tree-map.component.html',
  styleUrls: ['./tree-map.component.css']
})
export class TreeMapComponent implements OnInit {
  cities;
  colors: [
    ["#0c81c5", "#c5dceb"], ["#3aa2de", "#d8ecf8"],
    ["#449000", "#dae9cc"], ["#76b800", "#dae7c3"],
    ["#ffae00", "#f5e5c3"], ["#ef4c00", "#f1b092"],
    ["#9e0a61", "#eccedf"]
]
  constructor() { 
  }

  ngOnInit() {
    this.cities = this.treeMapping(citiesData)
  }
  treeMapping(response) {          
    var nodesById = {}, roots = [];
    response.forEach((n)=> {
      nodesById[n.id] = {
        name: n.field0,
        value: +n.field2,
        items: []
      };
      
      if (n.parentId === null) {
        roots.push(nodesById[n.id]);
      }
    });
    response.forEach((n)=> {
      var node = nodesById[n.id];
      if (n.parentId === null) {
        return;
      }
      var parent = nodesById[n.parentId];

      parent.items.push(node);
    });
    response.forEach((n)=>{
      if (nodesById[n.id].items.length === 0) {
        delete nodesById[n.id].items;
      }  
    });
    return roots;
  }

}
