import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeRoutingModule} from "./home-routing.module";
import {HomeComponent} from "./home.component";
import {MoneyComponent} from "../money/money.component";
import {ReportComponent} from "app/report/report.component";
import {SaleComponent} from "../sale/sale.component";
import {CustomerComponent} from "../customer/customer.component";
import {PlatformComponent} from "../platform/platform.component";
import {AuthComponent} from "../auth/auth.component";
import {ContractComponent} from "../contract/contract.component";
import {InvoiceComponent} from "../invoice/invoice.component";
import {IndexComponent} from "../index/index.component";
import {UserComponent} from "../user/user.component";
import {PageNotFoundComponent} from "../page-not-found/page-not-found.component";

@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule,
    ],
    exports: [],
    declarations: [
        HomeComponent,
        PlatformComponent,
        AuthComponent,
        ContractComponent,
        InvoiceComponent,
        CustomerComponent,
        SaleComponent,
        ReportComponent,
        MoneyComponent,
        UserComponent,
        IndexComponent,
        PageNotFoundComponent,
    ]
})
export class HomeModule {
}
