import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {User} from "../model";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

    user:User = {};

    constructor(private router: Router) {
    }

    ngOnInit() {
    }

    login() {
        this.router.navigate(['!/index']);
    }

    register(){
        this.router.navigate(['register']);
    }
}
