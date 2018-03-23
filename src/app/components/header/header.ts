import { Component } from '@angular/core';
const View = require('./header.html');

@Component({
    selector: 'app-header',
    template: View
})
export class HeaderComponent {
    heading = 'Header Component';
}