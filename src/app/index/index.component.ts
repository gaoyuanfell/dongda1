import {Component, OnInit} from '@angular/core';
import {GlobalService} from "../../service/global-service";

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.less'],
})
export class IndexComponent implements OnInit {

    constructor(private _globalService: GlobalService) {
    }

    ngOnInit() {
    }

}
