import { Component } from '@angular/core';
const View = require('./footer.html');

@Component({
    selector: 'app-footer',
    template: View
})
export class FooterComponent {
    footer = 'Footer Component';
}