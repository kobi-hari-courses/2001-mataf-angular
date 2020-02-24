import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appNoSpace]'
})
export class NoSpaceDirective implements OnInit {
  private lastValidValue: string;

  isValid(value: string):boolean {
    return !value.includes(' ');
  }

  // on the host write: (input)="onInput($event)"
  @HostListener('input', ['$event'])
  onInput(data: InputEvent) {
    let elem = <any>data.srcElement;
    console.log(data)

    this.validate(data.srcElement);
  }

  validate(elem: any) {
    let val = elem.value;

    if (this.isValid(val)) {
      this.lastValidValue = val;
    } else {
      elem.value = this.lastValidValue;
    }
  }

  constructor(
    private elem: ElementRef
  ) { }

  ngOnInit(): void {
    this.lastValidValue = '';
    this.validate(this.elem.nativeElement);
  }

}
