import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

    routes = [
        {name: '首页', link: 'index',icon:'&#xe601;'},
        {name: '个人信息', link: 'user',icon:'&#xe61c;'},
        {name: '平台信息', link: 'platform',icon:'&#xe629;'},
        {name: '权限', link: 'auth',icon:'&#xe62d;'},
        {name: '合同信息', link: 'contract',icon:'&#xe63a;'},
        {name: '发票信息', link: 'invoice',icon:'&#xe647;'},
        {name: '客户资料', link: 'customer',icon:'&#xe711;'},
        {name: '销售计划', link: 'sale',icon:'&#xe644;'},
        {name: '应收账款', link: 'money',icon:'&#xe724;'},
        {name: '报表', link: 'report',icon:'&#xe639;'},
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
