import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {httpInterceptor} from "../providers/Interceptor";
import {APP_BASE_HREF} from "@angular/common";

@NgModule({
    declarations: [
        AppComponent
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
