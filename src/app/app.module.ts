import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { AppComponent } from './components/root/root';
import { HeaderComponent } from './components/header/header';
import { FooterComponent } from './components/footer/footer';
import {AsideComponent} from "./components/aside/aside";
import {ContentComponent} from "./components/content/content";
import {AppRoutingModule} from "./app-router.module";
import {SecondComponent} from "./components/second/second";

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        AsideComponent,
        ContentComponent,
        SecondComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }