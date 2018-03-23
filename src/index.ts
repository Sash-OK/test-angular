require('./polyfill');
import '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import '@angular/core';
import '@angular/common';
import '@angular/http';
import '@angular/router';
import 'rxjs';


import './styles/index';

if (!process.env.ENV) {
    enableProdMode();
}

import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);