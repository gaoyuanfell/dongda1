import {Component} from '@angular/core';
import {GlobalService} from "../service/global-service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less'],
    providers:[
        GlobalService
    ]
})
export class AppComponent {

}
