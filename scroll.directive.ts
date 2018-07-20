import { Directive, HostListener, ElementRef, Input, Output, EventEmitter } from "@angular/core";
import * as $ from 'jquery';

@Directive({
    selector: '[scrollBottom]'
})
export class ScrollBottomDirective
{
    @Output() scrollEnd:EventEmitter<boolean> = new EventEmitter<boolean>();

    scrl_top:string;
    client_height:string;
    scrl_height:string;

    constructor(
        public el: ElementRef
    )
    {}

    @HostListener('scroll')
    scroll()
    {
        this.scrl_top = this.el.nativeElement.scrollTop;
        this.client_height = this.el.nativeElement.clientHeight;
        this.scrl_height = this.el.nativeElement.scrollHeight;

        // console.log('s top ', this.scrl_top, ' client height ', this.client_height, ' scrl - height ', this.scrl_height)
        if((this.scrl_top+this.client_height) === this.scrl_height)
        {
            if(this.scrollEnd) {
                this.scrollEnd.emit(true);
            }
        }
    }
}