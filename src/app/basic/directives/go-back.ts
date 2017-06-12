import {AfterViewInit, Directive, ElementRef, Renderer2} from "@angular/core";
import {Router} from "@angular/router";
@Directive({
    selector: '[ngyGoBack]',
    exportAs: 'ngyGoBack'
})
export class GoBackDirective implements AfterViewInit {
    ngAfterViewInit(): void {
        this._renderer.listen(this._elRef.nativeElement,'click',()=>{
            window.history.go(-1);
        })
    }
    constructor(private _elRef: ElementRef, private _renderer: Renderer2,private _router:Router) {

    }

}
