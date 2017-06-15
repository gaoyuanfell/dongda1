import {AfterViewInit, Component, ElementRef, EventEmitter, forwardRef, Input, OnDestroy, OnInit, Output, Renderer2, ViewChild} from '@angular/core';
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
export class SelectComponent implements OnDestroy,ControlValueAccessor,AfterViewInit {

    onChange = (value: any) => {};

    writeValue(obj: any): void {
        if(obj !== null || obj !== undefined){
            let l = this.list.map((d)=> {return d[this.keyField]});
            let index = l.indexOf(obj);
            if(index !== -1){
                this.value = this.list[index];
            }
        }
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
    }

    ngOnDestroy(): void {
        this.removeWindowClick && this.removeWindowClick();
    }

    constructor(private _renderer: Renderer2,private _elRef:ElementRef) {
    }

    ngAfterViewInit(): void {
        this.initEvent();
    }

    removeWindowClick;
    selectStatus: 1 | 2 | 3 | 4 = 1;//1关闭状态 2正在打开状态 3打开状态 4正在关闭状态
    valueText:string = '全部';
    filterCache:any = {};
    value:any = {};

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
        if(this.searchCtrl){
            this.inputSearch.nativeElement.select();
            this.inputSearch.nativeElement.focus();
        }
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
        this.close();
        this.selected.emit(value);
        this.onChange(value[this.keyField]);
        this.value = value;
    }

    initEvent(){
        this.removeWindowClick = this._renderer.listen('window', 'click', (e: Event) => {
            let bo = this._elRef.nativeElement.contains(e.target);
            !bo && this.close();
        });
        if(this.searchCtrl){
            this._renderer.listen(this.inputSearch.nativeElement,'input',(e:any)=>{
                this.filterData(e.target.value);
            })
        }
    }

    filterData(newV){
        let list = this.list;
        let filterCache = this.filterCache;
        console.info(filterCache);
        if(!list) return;
        for (let a in filterCache) {
            if(!filterCache.hasOwnProperty(a)) continue;
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

    @Input('valueField') valueField = 'name';//展示的文本
    @Input('keyField') keyField = 'id';//选择的标识
    @Input('searchCtrl') searchCtrl = true;//开启下拉搜索
    @Input('list') list = [];
    @Input('label') label;

    @Output() selected = new EventEmitter<any>();

}
