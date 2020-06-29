import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-html-template',
  templateUrl: './dynamic-html-template.component.html',
  styleUrls: ['./dynamic-html-template.component.css']
})
export class DynamicHtmlTemplateComponent implements OnInit {
  dynamicTemplate = `
  <div>
    <h1>[TITLE]</h1>
    <h2>[SUBTITLE]</h2>
    <p>[CONTENT]</p>
  </div>
`;
  constructor() { }

  ngOnInit() {
  }
  getDynamicTemplate() {
    let dynamicTemplateParsed = this.dynamicTemplate;
    dynamicTemplateParsed = dynamicTemplateParsed.replace('[TITLE]', 'Some Title');
    dynamicTemplateParsed = dynamicTemplateParsed.replace('[SUBTITLE]', 'Some Sub Title');
    dynamicTemplateParsed = dynamicTemplateParsed.replace('[CONTENT]', 'My dynamic content');
    return dynamicTemplateParsed;
  }
}
