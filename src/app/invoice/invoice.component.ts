import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'app-invoice',
    templateUrl: './invoice.component.html',
    styleUrls: ['./invoice.component.less']
})
export class InvoiceComponent implements OnInit {

    constructor(private _router: Router) {
    }

    ngOnInit() {
    }

    add() {
        this._router.navigate(['/!/invoice/0']);
    }
}
