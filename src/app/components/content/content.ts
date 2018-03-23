import { Component } from '@angular/core';
const View = require('./content.html');

@Component({
    selector: 'app-content',
    template: View
})

export class ContentComponent {
    content = 'Content Component';
}