import { Component } from '@angular/core';
import * as moment from 'moment';
import * as $ from 'jquery';
import * as _ from 'lodash';
const View = require('./second.html');

@Component({
    selector: 'app-second',
    template: View
})

export class SecondComponent {
    second = 'Second Component';
}