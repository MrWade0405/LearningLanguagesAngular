﻿import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from './data.service';
import { DTO } from './DTO';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'slideshow',
    templateUrl: './slideshow.component.html',
    providers: [DataService, NgbCarouselConfig],
    styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit {

    idSubCat: number;

    private subscription: Subscription;

    words: DTO[];
    duration: number = 500;
    iterator: number = 1;

    constructor(private dataService: DataService, activeRoute: ActivatedRoute, public config: NgbCarouselConfig) {
        config.showNavigationArrows = false;
        config.keyboard = false;
        config.wrap = true;
        config.pauseOnHover = false;
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

    onSlide(slideData: any) {
        this.duration = 500;
        var listAudio: Array<HTMLAudioElement> = [];
        if (this.words[0].enableSound) {
            var sound = new Audio();
            var word = this.words[this.iterator];
            if (word) {
                sound.src = word.sound;
            }
            listAudio.push(sound);
        }

        if (this.words[0].enablePronounceLearnLang) {
            var pronounceLearn = new Audio();
            var word = this.words[this.iterator];
            if (word) {
                pronounceLearn.src = word.pronounceLearn;
            }
            listAudio.push(pronounceLearn);
        }

        if (this.words[0].enablePronounceNativeLang) {
            var pronounceNative = new Audio();
            var word = this.words[this.iterator];
            if (word) {
                pronounceNative.src = word.pronounceNative;
            }
            listAudio.push(pronounceNative);
        }
        for (let i = 0; i < listAudio.length; ++i) {
            var _this = this;
            listAudio[i].addEventListener('loadedmetadata', function () {
                _this.duration += listAudio[i].duration * 1000;
            });
        }

        for (let i = 0; i < listAudio.length; i++) {
            if (i === 0) {
                listAudio[i].play()
            } else {
                listAudio[i - 1].addEventListener('ended', function () {
                    listAudio[i].play()
                })
            }
        }

        if (this.iterator == this.words.length - 1) {
            this.iterator = 0;
        }
        else {
            this.iterator++;
        }
    }

}