import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from './data.service';
import { DTO } from './DTO';

@Component({
    selector: 'tests',
    templateUrl: './tests.component.html',
    styleUrls: ['./catTestsSubCat.component.scss']
})
export class TestsComponent implements OnInit {

    idSubCat: number;

    private subscription: Subscription;

    tests: DTO[];

    constructor(private dataService: DataService, activeRoute: ActivatedRoute) {
        this.subscription = activeRoute.queryParams.subscribe(
            (queryParam: any) => {
                this.idSubCat = queryParam['id'];
            }
        );
    }

    ngOnInit() {
        this.loadTests();
    }

    loadTests() {
        this.dataService.getTests(this.idSubCat)
            .subscribe((data: DTO[]) => this.tests = data);
    }
}