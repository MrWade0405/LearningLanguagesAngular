import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from './data.service';
import { Router } from '@angular/router';

@Component({
    selector: 'login',
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

    submitted = false;
    loginForm: FormGroup;
    returnUrl: string = '#';
    errorMessage: string = '';

    private subscription: Subscription;

    constructor(private dataService: DataService, private formBuilder: FormBuilder, private router: Router, activeRoute: ActivatedRoute) {
        this.subscription = activeRoute.queryParams.subscribe(
            (queryParam: any) => {
                this.returnUrl = queryParam['returnUrl'];
            }
        );
    }

    ngOnInit() {
        this.loginGet();
        this.loginForm = this.formBuilder.group({
            email: ['', [Validators.required]],
            password: ['', [Validators.required]],
            rememberMe: [false]
        });
    }

    get f() { return this.loginForm.controls; }

    loginGet() {
        this.dataService.loginGet(this.returnUrl)
            .subscribe((data: any) => this.returnUrl = data.returnUrl);
    }

    loginPost() {
        this.submitted = true;

        if (this.loginForm.invalid) {
            return;
        }

        this.dataService.loginPost(this.loginForm.value)
            .subscribe((data: any) => {
                console.log(data);
                this.returnUrl = data.returnUrl
                this.errorMessage = data.errorMessage;
                if (this.errorMessage == "") {
                    this.router.navigate([this.returnUrl]);
                }
            },
            (err: any) => this.router.navigate(['/Account/Login']));
    }
}