import { Component } from '@angular/core';
const View = require('./aside.html');

@Component({
    selector: 'app-aside',
    template: View
})

export class AsideComponent {
    aside = 'Aside Component';
}