import { Directive, ElementRef, Renderer2, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input('appHighlight')
  color: string;

  @HostBinding('style.background')
  background: string = '';

  @HostListener('mouseenter')
  start() {
    if (this.color) {
      this.background = this.color;
    } else {
      this.background = 'yellow';
    }

  }

  @HostListener('mouseleave')
  stop() {
    this.background = '';
  }

  constructor(
    // private elem: ElementRef, 
    // private renderer: Renderer2
  ) {
    // console.log('Hightlight Directive Created');
    // this.renderer.setStyle(elem.nativeElement, 'background', 'yellow');
  }

}
