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
var TestComponent = /** @class */ (function () {
    function TestComponent(dataService, activeRoute) {
        var _this = this;
        this.dataService = dataService;
        this.countOptions = 2;
        this.randomTestWordsId = [1, 2];
        this.totalResult = 0;
        this.first = true;
        this.questionNumber = 0;
        this.totalQuestions = this.words.length;
        this.firstId = this.words[0].id;
        this.lastId = this.words[this.words.length - 1].id;
        this.randomWords = [];
        this.subscription = activeRoute.queryParams.subscribe(function (queryParam) {
            _this.idSubCat = queryParam['id'];
        });
    }
    TestComponent.prototype.ngOnInit = function () {
        this.loadWords();
        this.check();
    };
    TestComponent.prototype.loadWords = function () {
        var _this = this;
        this.dataService.getWords(this.idSubCat)
            .subscribe(function (data) { return _this.words = data.sort(_this.compareRandom); });
    };
    TestComponent.prototype.compareRandom = function (a, b) {
        return Math.random() - 0.5;
    };
    TestComponent.prototype.GetTestRandom = function () {
        var randomWordsId = [];
        this.randomWords[0] = this.words[this.questionNumber - 1];
        randomWordsId[0] = this.words[this.questionNumber - 1].id;
        var randomIds = [];
        for (var i = this.firstId; i <= this.lastId; ++i) {
            randomIds.push(i);
        }
        randomIds.splice(randomIds.indexOf(randomWordsId[0]), 1);
        randomIds.sort(this.compareRandom);
        for (var i = 1; i < this.countOptions; i++) {
            randomWordsId[i] = randomIds[0];
            randomIds.splice(0, 1);
            for (var j = 0; j < this.words.length; j++) {
                if (this.words[j].id == randomWordsId[i]) {
                    this.randomWords[i] = this.words[j];
                }
            }
        }
        this.randomWords;
    };
    TestComponent.prototype.check = function () {
        if (($("[type=radio]:checked").val() == this.correctAnswer)) {
            this.totalResult++;
        }
        else if (($("[type=radio]:checked").val() == undefined)) {
            if (!this.first) {
                $('#error').show();
                return;
            }
        }
        if (this.first) {
            this.first = false;
        }
        $('#error').hide();
        if (this.questionNumber == this.totalQuestions) {
            return;
        }
        this.questionNumber++;
        this.randomTestWordsId.sort(this.compareRandom);
        this.GetTestRandom();
        for (var i = 0; i < Object.keys(this.randomWords).length; i++) {
            if (this.randomTestWordsId[i] - 1 == 0) {
                this.correctAnswer = i + 1;
            }
        }
    };
    TestComponent = __decorate([
        Component({
            selector: 'test',
            templateUrl: './test.component.html',
            providers: [DataService],
            styleUrls: ['./test.component.css']
        }),
        __metadata("design:paramtypes", [DataService, ActivatedRoute])
    ], TestComponent);
    return TestComponent;
}());
export { TestComponent };
//# sourceMappingURL=test.component.js.map