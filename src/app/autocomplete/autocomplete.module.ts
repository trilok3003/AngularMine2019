import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutocompleteComponent1 } from './autocomplete1.component';
import { AutocompleteDirective } from './autocomplete.directive';
import { AutocompleteContentDirective } from './autocomplete-content.directive';
import { OptionComponent } from './option/option.component';

const publicApi = [
  AutocompleteComponent1,
  AutocompleteDirective,
  AutocompleteContentDirective,
  OptionComponent
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [publicApi],
  exports: [publicApi]
})
export class AutocompleteModule {
}
