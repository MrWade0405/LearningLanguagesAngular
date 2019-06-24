var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from './data.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
var SlideshowComponent = /** @class */ (function () {
    function SlideshowComponent(dataService, activeRoute, config) {
        var _this = this;
        this.dataService = dataService;
        this.config = config;
        this.duration = 0;
        config.interval = 3000;
        config.showNavigationArrows = false;
        config.keyboard = false;
        config.wrap = true;
        config.pauseOnHover = false;
        this.subscription = activeRoute.queryParams.subscribe(function (queryParam) {
            _this.idSubCat = queryParam['id'];
        });
    }
    SlideshowComponent.prototype.ngOnInit = function () {
        this.loadWords();
    };
    SlideshowComponent.prototype.loadWords = function () {
        var _this = this;
        this.dataService.getWords(this.idSubCat)
            .subscribe(function (data) { return _this.words = data; });
    };
    SlideshowComponent.prototype.onSlide = function (slideData) {
        var listAudio;
        if (this.words[slideData.current].enableSound) {
            var sound = new Audio();
            sound.src = this.words[slideData.current].sound;
            listAudio.push(sound);
        }
        if (this.words[slideData.current].enablePronounceLearnLang) {
            var pronounceLearn = new Audio();
            pronounceLearn.src = this.words[slideData.current].pronounceLearn;
            listAudio.push(pronounceLearn);
        }
        if (this.words[slideData.current].enablePronounceNativeLang) {
            var pronounceNative = new Audio();
            pronounceNative.src = this.words[slideData.current].pronounceNative;
            listAudio.push(pronounceNative);
        }
        var _loop_1 = function (i) {
            if (i === 0) {
                listAudio[i].play();
            }
            else {
                listAudio[i - 1].addEventListener('ended', function () {
                    listAudio[i].play();
                });
            }
        };
        for (var i = 0; i < listAudio.length; i++) {
            _loop_1(i);
        }
        for (var i = 0; i < listAudio.length; ++i) {
            this.duration += listAudio[i].duration;
        }
        this.config.interval = this.duration;
    };
    SlideshowComponent = __decorate([
        Component({
            selector: 'slideshow',
            templateUrl: './slideshow.component.html',
            providers: [DataService, NgbCarouselConfig],
            styleUrls: ['./slideshow.component.css']
        }),
        __metadata("design:paramtypes", [DataService, ActivatedRoute, NgbCarouselConfig])
    ], SlideshowComponent);
    return SlideshowComponent;
}());
export { SlideshowComponent };
//# sourceMappingURL=slideshow.component.js.map