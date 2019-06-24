﻿import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { DTO } from './DTO';

@Component({
    selector: 'categories',
    templateUrl: './categories.component.html',
    providers: [DataService],
    styleUrls: ['./catTestsSubCat.component.css']
})
export class CategoriesComponent implements OnInit {

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