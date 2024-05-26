import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appClickOutside]'
})
export class ChooseLanguagesDirective {
  @Output() appClickOutside = new EventEmitter();

  constructor(private elementRef: ElementRef) {  }

  @HostListener('document:click', ['$event'])
  public onClick(event: MouseEvent) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.appClickOutside.emit();
    }
  }
}
