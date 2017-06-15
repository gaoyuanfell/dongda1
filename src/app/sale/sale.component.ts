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
        {id:1,name:'11'},
        {id:2,name:'22'},
        {id:3,name:'33'},
        {id:4,name:'44'},
        {id:5,name:'55'},
        {id:6,name:'66'},
        {id:7,name:'77'},
    ]

    select(value?){
        console.info(value);
    }

}
