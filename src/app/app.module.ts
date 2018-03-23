import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { AppComponent } from './components/root/root';
import { HeaderComponent } from './components/header/header';
import { FooterComponent } from './components/footer/footer';
import {AsideComponent} from "./components/aside/aside";
import {ContentComponent} from "./components/content/content";

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        AsideComponent,
        ContentComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }