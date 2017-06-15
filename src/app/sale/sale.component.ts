import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-sale',
    templateUrl: './sale.component.html',
    styleUrls: ['./sale.component.less']
})
export class SaleComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

    list = [
        {id:0,name:'全部'},
        {id:1,name:'11'},
        {id:2,name:'22'},
        {id:3,name:'33'},
    ]

    query:any = {}

    select(value?){
        console.info(value);
    }

    selected(value){
        console.info(value);
    }

}
