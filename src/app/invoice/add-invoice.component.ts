import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-add-invoice',
    templateUrl: './add-invoice.component.html',
    styleUrls: ['./add-invoice.component.less']
})
export class AddInvoiceComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

    add(){
        window.history.go(-1);
    }
}
