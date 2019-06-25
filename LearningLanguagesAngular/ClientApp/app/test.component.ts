import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from './data.service';
import { DTO } from './DTO';

@Component({
    selector: 'test',
    templateUrl: './test.component.html',
    providers: [DataService],
    styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

    idSubCat: number;
    idTest: number;

    private subscription: Subscription;

    words: DTO[];

    correctAnswer: number;
    countOptions: number = 4;
    randomTestWordsId: number[] = [1, 2, 3, 4];
    totalResult: number = 0;
    first: boolean = true;
    questionNumber: number = 0;
    totalQuestions: number;
    firstId: number;
    lastId: number; 
    randomWords: DTO[] = [];
    checkboxes: boolean[] = [];
    isCorrect: boolean;
    notSelect: boolean = true;

    constructor(private dataService: DataService, activeRoute: ActivatedRoute) {
        this.subscription = activeRoute.queryParams.subscribe(
            (queryParam: any) => {
                this.idSubCat = queryParam['id'];
                this.idTest = queryParam['idTest'];
                if (this.idTest == 1 || this.idTest == 5) {
                    this.countOptions = 2;
                    this.randomTestWordsId = [1, 2];
                }
            }
        );
    }

    ngOnInit() {
        this.loadWords();
    }

    loadWords() {
        this.dataService.getWords(this.idSubCat)
            .subscribe((data: DTO[]) => {
                this.firstId = data[0].id;
                this.lastId = data[data.length - 1].id;
                this.words = data.sort(this.compareRandom);
                this.totalQuestions = data.length;
                this.check();
            });
    }

    compareRandom(a:any, b:any) {
        return Math.random() - 0.5;
    }

    GetTestRandom() {
        var randomWordsId = [];

        if (this.words) {
            this.randomWords[0] = this.words[this.questionNumber - 1];
            randomWordsId[0] = this.words[this.questionNumber - 1].id;
        }

        var randomIds = [];

        for (let i = this.firstId; i <= this.lastId; ++i) {
            randomIds.push(i);
        }
        randomIds.splice(randomIds.indexOf(randomWordsId[0]), 1);

        randomIds.sort(this.compareRandom);

        for (let i = 1; i < this.countOptions; i++) {
            randomWordsId[i] = randomIds[0];
            randomIds.splice(0, 1);
            if (this.words) {
                for (let j = 0; j < this.words.length; j++) {
                    if (this.words[j].id == randomWordsId[i]) {
                        this.randomWords[i] = this.words[j];
                    }
                }
            }
        }
    }

    check(event: any = null) {
        console.log(event);
        if ((this.idTest == 5) && (event != null) && (event.target.value == this.correctAnswer)) {
            this.totalResult++;
            this.isCorrect = true;
        }
        else {
            this.isCorrect = false;
        }

        if (this.questionNumber == 1) {
            this.first = false;
        }

        if (this.idTest != 5) {
            console.log(this.checkboxes);
            this.notSelect = this.checkboxes.length == 0;

            if (this.questionNumber == 0) {
                this.notSelect = false;
            }

            if (this.checkboxes.indexOf(true) + 1 == this.correctAnswer) {
                this.isCorrect = true;
                this.totalResult++;
            }
            else if (this.notSelect) {
                console.log("BIP");
                if (!this.first) {
                    this.checkboxes = [];
                    return;
                }
            }
            else {
                this.isCorrect = false;
            }

            this.checkboxes = [];
        }

        if (this.questionNumber == this.totalQuestions) {

            return;
        }

        this.questionNumber++;

        this.randomTestWordsId.sort(this.compareRandom);

        this.GetTestRandom();

        for (let i = 0; i < Object.keys(this.randomWords).length; i++) {
            if (this.randomTestWordsId[i] - 1 == 0) {
                this.correctAnswer = i + 1;
            }
        }
    }

    changeAnswer(eventTarget: any) {
        this.checkboxes = [];
        this.checkboxes[eventTarget.getAttribute('value')] = eventTarget.checked;
    }
}