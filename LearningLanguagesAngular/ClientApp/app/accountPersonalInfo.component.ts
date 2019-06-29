﻿import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { NavComponent } from './nav.component';

@Component({
    selector: 'account-personal-info',
    templateUrl: './accountPersonalInfo.component.html',
    providers: [NavComponent]
})
export class AccountPersonalInfoComponent implements OnInit {

    errorMessage: string = null;

    submitted = false;
    correctSubmitted = false;

    personalInfoForm: FormGroup;

    constructor(private dataService: DataService, private formBuilder: FormBuilder, private router: Router, private nav: NavComponent) { }

    ngOnInit() {
        this.personalInfoForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            firstName: ['', [Validators.required, Validators.minLength(3)]],
            lastName: ['', [Validators.required, Validators.minLength(3)]],
            username: ['', [Validators.required, Validators.minLength(3)]],
            avatar: [null]
        });
        this.loadPersonalInfo();
    }

    get f() { return this.personalInfoForm.controls; }

    loadPersonalInfo() {
        this.dataService.getPersonalInfo()
            .subscribe((data: any) => {
                this.errorMessage = data.errorMessage;
                if (this.errorMessage == null) {
                    this.personalInfoForm.setValue({
                        email: data.email,
                        firstName: data.firstName,
                        lastName: data.lastName,
                        username: data.username,
                        avatar: data.avatar
                    });
                }
            });
    }

    setPersonalInfo() {
        this.submitted = true;

        if (this.personalInfoForm.invalid) {
            return;
        }
        this.correctSubmitted = true;

        this.dataService.setPersonalInfo(this.personalInfoForm.value)
            .subscribe(
            (data: any) => {
                this.errorMessage = data.errorMessage;
                this.nav.getUsersInfo();
            },
            (e: any) => console.log(e));
    }
}