import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { DTO } from './DTO';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    providers: [DataService],
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    categories: DTO[];              

    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.loadCategories();   
    }

    loadCategories() {
        this.dataService.getCategories()
            .subscribe((data: DTO[]) => this.categories = data);
    }
}