import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
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
import {ModalComponent, PagingComponent, DatepickerModule} from "../basic/components";
import {AddPlatformComponent} from "../platform/add-platform.component";
import {GoBackDirective} from "../basic/directives/go-back";
import {AddInvoiceComponent} from "../invoice/add-invoice.component";

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        HomeRoutingModule,
        DatepickerModule.forRoot(),
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
        AddPlatformComponent,
        AddInvoiceComponent,

        PagingComponent,
        ModalComponent,
        GoBackDirective,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeModule {
}
