import {Component, OnInit} from '@angular/core';
import {GlobalService} from "../../service/global-service";

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.less'],
})
export class UserComponent implements OnInit {

    constructor(private _globalService: GlobalService) {
    }

    ngOnInit() {
    }

}
