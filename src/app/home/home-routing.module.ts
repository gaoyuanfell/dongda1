import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from "./home.component";
import {UserComponent} from "../user/user.component";
import {IndexComponent} from "../index/index.component";
import {PlatformComponent} from "../platform/platform.component";
import {AuthComponent} from "../auth/auth.component";
import {ContractComponent} from "../contract/contract.component";
import {InvoiceComponent} from "../invoice/invoice.component";
import {CustomerComponent} from "../customer/customer.component";
import {SaleComponent} from "../sale/sale.component";
import {ReportComponent} from "../report/report.component";
import {MoneyComponent} from "../money/money.component";
import {PageNotFoundComponent} from "../page-not-found/page-not-found.component";

const routeList: Routes = [
    {
        path: 'user',
        component: UserComponent
    },
    {
        path: 'index',
        component: IndexComponent
    },
    {
        path: 'platform',
        component: PlatformComponent
    },
    {
        path: 'auth',
        component: AuthComponent
    },
    {
        path: 'contract',
        component: ContractComponent
    },
    {
        path: 'invoice',
        component: InvoiceComponent
    },
    {
        path: 'customer',
        component: CustomerComponent
    },
    {
        path: 'sale',
        component: SaleComponent
    },
    {
        path: 'money',
        component: MoneyComponent
    },
    {
        path: 'report',
        component: ReportComponent
    }
];

const routes: Routes = [
    {
        path: '!',
        component: HomeComponent,
        children: routeList
    },
    {
        path: '**',
        component: PageNotFoundComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule {
}
