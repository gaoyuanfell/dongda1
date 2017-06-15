import {AfterViewInit, Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, Renderer2, ViewChild} from '@angular/core';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.less']
})
export class SearchComponent implements AfterViewInit,OnDestroy {
    ngOnDestroy(): void {
        this.removeWindowClick && this.removeWindowClick();
    }

    ngAfterViewInit(): void {
        this.initEvent();
        if(this.list[0]){
            this.value = this.list[0];
        }
    }

    constructor(private _renderer: Renderer2,private _elRef:ElementRef) {
    }

    targetDropDown() {
        switch (this.selectStatus) {
            case 1:
                this.open();
                break;
            case 3:
                this.close();
                break;
        }
    }

    open(){
        this._renderer.addClass(this.consoleDropDown.nativeElement, 'active');
        this.selectStatus = 2;
        setTimeout(() => {
            this.selectStatus = 3;
        }, 100)
    }

    close(){
        this._renderer.removeClass(this.consoleDropDown.nativeElement, 'active');
        this.selectStatus = 4;
        setTimeout(() => {
            this.selectStatus = 1;
        }, 100)
    }

    initEvent(){
        this.removeWindowClick = this._renderer.listen('window', 'click', (e: Event) => {
            let bo = this.consoleDropDown.nativeElement.contains(e.target);
            let bo1 = this.inputSearch.nativeElement.contains(e.target);
            !bo && !bo1 && this.close();
        });
        this._renderer.listen(this.inputSearch.nativeElement,'click',()=>{
            this.targetDropDown();
        })
    }

    select(value){
        this.value = value;
        this.close();
        this.search && (this.selected.emit({[value[this.keyField]]:this.search}));
    }

    enter(){
        if(this.value && this.search){
            this.selected.emit({[this.value[this.keyField]]:this.search})
        }
    }

    removeWindowClick;
    selectStatus: 1 | 2 | 3 | 4 = 1;//1关闭状态 2正在打开状态 3打开状态 4正在关闭状态
    valueText:string = '全部';
    value:any = {};
    search;

    @ViewChild('inputSearch') inputSearch:ElementRef;
    @ViewChild('consoleDropDown') consoleDropDown:ElementRef;

    @Input('valueField') valueField = 'name';//展示的文本
    @Input('keyField') keyField = 'id';//选择的标识
    @Input('list') list = [];

    @Output() selected = new EventEmitter<any>();

}
