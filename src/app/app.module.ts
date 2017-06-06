import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {httpInterceptor} from "../providers/Interceptor";
import {APP_BASE_HREF} from "@angular/common";
import {UserComponent} from './user/user.component';
import { IndexComponent } from './index/index.component';

@NgModule({
    declarations: [
        AppComponent,
        UserComponent,
        IndexComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [
        {provide: APP_BASE_HREF, useValue: '/'},
        httpInterceptor
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
