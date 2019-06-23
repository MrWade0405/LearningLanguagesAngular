import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
    selector: 'home',
    template: `<h3>Home</h3>`,
    providers: [DataService]
})
export class HomeComponent implements OnInit {

    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.setSession();
    }

    setSession() {
        this.dataService.setSession()
            .subscribe();
    }
}