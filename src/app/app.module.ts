import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {httpInterceptor} from "../providers/Interceptor";
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
        AppRoutingModule,
        HomeModule
    ],
    providers: [
        httpInterceptor,
    ],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {
}
