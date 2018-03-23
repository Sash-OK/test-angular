import { Component } from '@angular/core';
const View = require('./root.html');

@Component({
    selector: 'app-root',
    template: View
})
export class AppComponent {
    title = 'Root Component';
}