import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

    routes = [
        {name: '首页', link: 'index'},
        {name: '个人信息', link: 'user'},
        {name: '平台信息', link: 'platform'},
        {name: '权限', link: 'auth'},
        {name: '合同信息', link: 'contract'},
        {name: '发票信息', link: 'invoice'},
        {name: '客户资料', link: 'customer'},
        {name: '销售计划', link: 'sale'},
        {name: '应收账款', link: 'money'},
        {name: '报表', link: 'report'},
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
