import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlighter]'
})
export class HighlighterDirective implements OnInit{
@Input() age !: any
constructor(private elementRef:ElementRef, private renderer:Renderer2) { }


ngOnInit(){
  this.highlightAge();
}

highlightAge(){
  if (this.age < 28){
    this.renderer.setStyle(this.elementRef.nativeElement,'backgroundColor','orange');
  }
  if (this.age > 42){
    this.renderer.setStyle(this.elementRef.nativeElement,'backgroundColor','yellow');
  }
 }
}
