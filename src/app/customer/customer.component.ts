import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'app-customer',
    templateUrl: './customer.component.html',
    styleUrls: ['./customer.component.less']
})
export class CustomerComponent implements OnInit {

    constructor(private _router: Router) {
    }

    ngOnInit() {
    }

    add() {
        this._router.navigate(['/!/customer/0']);
    }

}
