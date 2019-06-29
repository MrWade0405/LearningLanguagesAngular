import { Component } from '@angular/core';

import { DataService } from './data.service';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    providers: [DataService]
})
export class AppComponent { }