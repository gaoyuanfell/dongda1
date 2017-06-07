import {Component, OnInit} from '@angular/core';
import {GlobalService} from "../../service/global-service";

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.less'],
})
export class UserComponent implements OnInit {

    global;

    constructor(private _global: GlobalService) {
        this.global = _global.global;
    }

    ngOnInit() {
        console.info(this._global.global);
    }

    setName() {
        this._global.global.name = 'hello gaoyuan';
    }

}
