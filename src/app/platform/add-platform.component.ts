import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-add-platform',
    templateUrl: './add-platform.component.html',
    styleUrls: ['./add-platform.component.less']
})
export class AddPlatformComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

    add(){
        window.history.go(-1);
    }

}
