import { Directive,ElementRef, HostListener, Input }  from '@angular/core';

@Directive({
  selector: '[appPkmnBorderCard]'
})
export class BorderCardDirective {
 GREEN_COLOR = '#009688';
  GREY_COLOR = '#f5f5f5';

  constructor(private element:ElementRef) {
    this.setBorder(this.GREEN_COLOR);
    this.setHeight(180);
   }
   private setBorder(color: string){
     const border = 'solid 4px ' +color;
     this.element.nativeElement.style.border= border;
   }
   private setHeight(height: number){

     this.element.nativeElement.style.height= height + 'px';
   }
   @HostListener('mouseenter') onMouseEnter() {
      this.setBorder(this.borderColor || this.GREEN_COLOR);
   }

  @HostListener('mouseleave') onMouseLeave() {
      this.setBorder(this.GREY_COLOR);
   }
   @Input('appPkmnBorderCard') borderColor ;
}
