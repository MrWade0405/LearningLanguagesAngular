import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from './data.service';
import { DTO } from './DTO';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'manual',
    templateUrl: './manual.component.html',
    providers: [DataService, NgbCarouselConfig],
    styleUrls: ['./manual.component.css']
})
export class ManualComponent implements OnInit {

    idSubCat: number;

    private subscription: Subscription;

    words: DTO[];

    constructor(private dataService: DataService, activeRoute: ActivatedRoute, config: NgbCarouselConfig) {
        config.interval = 0;
        config.showNavigationArrows = true;
        config.keyboard = true;
        config.wrap = true;
        this.subscription = activeRoute.queryParams.subscribe(
            (queryParam: any) => {
                this.idSubCat = queryParam['id'];
            }
        );
    }

    ngOnInit() {
        this.loadWords();
    }

    loadWords() {
        this.dataService.getWords(this.idSubCat)
            .subscribe((data: DTO[]) => this.words = data);
    }
}