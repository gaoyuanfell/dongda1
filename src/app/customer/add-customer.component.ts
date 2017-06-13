import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-add-customer',
    templateUrl: './add-customer.component.html',
    styleUrls: ['./add-customer.component.less']
})
export class AddCustomerComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

    add() {
        window.history.go(-1);
    }

}
