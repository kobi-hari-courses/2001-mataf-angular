import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-string-selector',
  templateUrl: './string-selector.component.html',
  styleUrls: ['./string-selector.component.css']
})
export class StringSelectorComponent  {
  @Input()
  options: string[] = [];

  @Input()
  selected: string;

  @Output()
  selectionRequested = new EventEmitter<string>()

  onSelect(value: string) {
    this.selectionRequested.emit(value);
  }


}
