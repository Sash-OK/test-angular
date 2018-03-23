import { Component } from '@angular/core';
const View = require('./second.html');

@Component({
    selector: 'app-second',
    template: View
})

export class SecondComponent {
    second = 'Second Component';
}