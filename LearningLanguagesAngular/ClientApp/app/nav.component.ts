import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-nav',
    styles: [` 
        .active {color:black;}
    `],
    templateUrl: './nav.component.html'
})
export class NavComponent implements OnInit {

    usersInfo: any;
    constructor(private dataService: DataService, private router: Router) {

    }

    ngOnInit() {
        this.getUsersInfo();
    }

    getUsersInfo() {
        this.dataService.getUsersInfo().subscribe((data: any) => { this.usersInfo = data; console.log(this.usersInfo); });
    }

    logout() {
        this.dataService.logout().subscribe((data: any) => {
            this.router.navigate(["#"]);
            this.getUsersInfo();
        });
    }
}