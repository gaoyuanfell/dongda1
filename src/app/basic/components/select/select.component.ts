import {Component, ElementRef, EventEmitter, forwardRef, Input, OnDestroy, OnInit, Output, Renderer2, ViewChild} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SelectComponent),
    multi: true
};

@Component({
    selector: 'app-select',
    templateUrl: './select.component.html',
    styleUrls: ['./select.component.less'],
    providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class SelectComponent implements OnInit,OnDestroy,ControlValueAccessor {

    writeValue(obj: any): void {
    }

    registerOnChange(fn: any): void {
    }

    registerOnTouched(fn: any): void {
    }

    ngOnDestroy(): void {
        this.removeWindowClick && this.removeWindowClick();
    }

    constructor(private _renderer: Renderer2,private _elRef:ElementRef) {
    }

    ngOnInit() {
        this.initEvent();
    }

    removeWindowClick;
    selectStatus: 1 | 2 | 3 | 4 = 1;//1关闭状态 2正在打开状态 3打开状态 4正在关闭状态
    valueText:string = '全部';

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

    open() {

        this.inputSearch.nativeElement.select();
        this.inputSearch.nativeElement.focus();
        this._renderer.addClass(this.consoleDropDown.nativeElement, 'active');
        this.selectStatus = 2;
        setTimeout(() => {
            this.selectStatus = 3;
        }, 100)
    }

    close() {
        this._renderer.removeClass(this.consoleDropDown.nativeElement, 'active');
        this.selectStatus = 4;
        setTimeout(() => {
            this.selectStatus = 1;
        }, 100)
    }

    select(value){
        this.valueText = value[this.valueField];
        this.close();
        this.selected.emit(value);
    }

    initEvent(){
        this.removeWindowClick = this._renderer.listen('window', 'click', (e: Event) => {
            let bo = this._elRef.nativeElement.contains(e.target);
            !bo && this.close();
        });
        this._renderer.listen(this.inputSearch.nativeElement,'input',(e:any)=>{
            this.filterData(e.target.value);
        })
    }

    filterCache:any = {};

    filterData(newV){
        let list = this.list;
        let filterCache = this.filterCache;
        console.info(filterCache);
        if(!list) return;
        for (let a in filterCache) {
            if(!isNaN(parseInt(a))){
                list.splice(+a, 0, filterCache[a]);
                delete filterCache[a];
            }
        }
        let length = 0;
        for(let i = 0, j = list.length, l = list.length; i < j; i++){
            let ob = list[i];
            let name = ob[this.valueField];
            if (name.indexOf(newV) === -1) {
                filterCache[i + l - j] = list[i];
                list.splice(i, 1);
                ++length;
                --j;
                --i;
            }
        }
        filterCache.length = length;
    }

    @ViewChild("consoleDropDown") consoleDropDown: ElementRef;
    @ViewChild("consoleValue") consoleValue: ElementRef;
    @ViewChild("groupTitle") groupTitle: ElementRef;
    @ViewChild("inputSearch") inputSearch: ElementRef;

    @Input('valueField') valueField = 'name';
    @Input('keyField') keyField = 'id';
    @Input('list') list = [];

    @Output() selected = new EventEmitter<any>();

}
