import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-money',
    templateUrl: './money.component.html',
    styleUrls: ['./money.component.less']
})
export class MoneyComponent implements OnInit {

    query:any = {time:new Date()}

    change(){

    }

    constructor() {
    }

    ngOnInit() {
    }

}
