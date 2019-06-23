import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from './data.service';
import { DTO } from './DTO';

@Component({
    selector: 'sub-categories',
    templateUrl: './subCategories.component.html',
    providers: [DataService],
    styleUrls: ['./catTestsSubCat.component.css']
})
export class SubCategoriesComponent implements OnInit {

    idCat: number;

    private subscription: Subscription;

    subCategories: DTO[];

    constructor(private dataService: DataService, activeRoute: ActivatedRoute) {
        this.subscription = activeRoute.queryParams.subscribe(
            (queryParam: any) => {
                this.idCat = queryParam['id'];
            }
        );
    }

    ngOnInit() {
        this.loadSubCategories();
    }

    loadSubCategories() {
        this.dataService.getSubCategories(this.idCat)
            .subscribe((data: DTO[]) => this.subCategories = data);
    }
}