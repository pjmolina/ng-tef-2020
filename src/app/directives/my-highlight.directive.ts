import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMyHighlight]'
})
export class MyHighlightDirective implements OnInit {
  @Input() appMyHighlight = 'yellow';

  constructor(private el: ElementRef, private renderer: Renderer2) {

    // renderer.setElementStyle(el.nativeElement,
    //   'backgroundColor', 'yellow');

  }
  ngOnInit(): void {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', this.appMyHighlight);

  }

}
