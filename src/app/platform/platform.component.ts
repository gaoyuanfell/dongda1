import {Component, OnInit} from '@angular/core';
import {Page} from "../model";
import {Router} from "@angular/router";

@Component({
    selector: 'app-platform',
    templateUrl: './platform.component.html',
    styleUrls: ['./platform.component.less']
})
export class PlatformComponent implements OnInit {

    constructor(private _router: Router) {
    }

    ngOnInit() {
    }

    date = {year: 2017, month: 6, day: 7};

    page: Page<any> = {
        totalPage: 120,
        pageIndex: 10,
    };

    goPage(page) {
        console.info(page)
    }

    change() {
        console.info(this.date)
    }

    add() {
        this._router.navigate(['/!/platform/0'])
    }

}
