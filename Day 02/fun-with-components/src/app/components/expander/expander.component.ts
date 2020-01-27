import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-expander',
  templateUrl: './expander.component.html',
  styleUrls: ['./expander.component.css']
})
export class ExpanderComponent  {
  isExpanded: boolean;

  @Input()
  caption: string = '';

  @Input()
  content: string = '';

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

}
