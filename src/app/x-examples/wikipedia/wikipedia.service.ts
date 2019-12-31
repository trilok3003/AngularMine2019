import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {
  configUrl = 'assets/states_district.json';  
  constructor(private http: HttpClient ) { }
  search () {
    return this.http.jsonp('http://en.wikipedia.org/w/api.php?callback=JSONP_CALLBACK', 'callback');
  }
  getData() {
    const url = "https://archive.org/index.php?output=json&callback=archive";
    // Pass the key for your callback (in this case 'callback')
    // as the second argument to the jsonp method
    return this.http.jsonp(url, 'callback');
  }
  getConfig() {  
    return this.http.jsonp(this.configUrl, 'callback');  
  } 
}
