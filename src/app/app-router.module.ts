import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContentComponent} from "./components/content/content";
import {SecondComponent} from "./components/second/second";

const routes: Routes = [
    { path: '', component: ContentComponent },
    { path: 'second', component: SecondComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}