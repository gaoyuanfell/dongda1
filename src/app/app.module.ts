import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {httpInterceptor} from "../providers/Interceptor";
import {APP_BASE_HREF} from "@angular/common";
import {LoginComponent} from './login/login.component';
import {HomeModule} from "./home/home.module";
import {RegisterComponent} from './register/register.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HomeModule
    ],
    providers: [
        // {provide: APP_BASE_HREF, useValue: '/dongda1'},
        httpInterceptor,
    ],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {
}
