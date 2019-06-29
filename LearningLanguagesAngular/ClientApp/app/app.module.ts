import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavComponent } from './nav.component';
import { HomeComponent } from './home.component';
import { CategoriesComponent } from './categories.component';
import { SubCategoriesComponent } from './subCategories.component';
import { TestsComponent } from './tests.component';
import { BreadcrumbComponent } from './breadcrumb.component';
import { ManualComponent } from './manual.component';
import { SlideshowComponent } from './slideshow.component';
import { TestComponent } from './test.component';
import { RegisterComponent } from './register.component';
import { LoginComponent } from './login.component';
import { ManageComponent } from './manage.component';
import { ManageNavComponent } from './manageNav.component';
import { AccountIndexComponent } from './accountIndex.component';
import { AccountPersonalInfoComponent } from './accountPersonalInfo.component';
import { AccountChangePasswordComponent } from './accountChangePassword.component';
import { AccountStatisticsComponent } from './accountStatistics.component';
import { AccountRatingComponent } from './accountRating.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

const manageRoutes: Routes = [
    { path: 'Index', component: AccountIndexComponent },
    { path: 'PersonalInfo', component: AccountPersonalInfoComponent },
    { path: 'ChangePassword', component: AccountChangePasswordComponent },
    { path: 'Statistics', component: AccountStatisticsComponent },
    { path: 'Rating', component: AccountRatingComponent }
];

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'Home/Categories', component: CategoriesComponent },
    { path: 'Home/Categories/SubCategories', component: SubCategoriesComponent },
    { path: 'Home/Categories/SubCategories/Tests', component: TestsComponent },
    { path: 'Home/Categories/SubCategories/Tests/Manual', component: ManualComponent },
    { path: 'Home/Categories/SubCategories/Tests/Slideshow', component: SlideshowComponent },
    { path: 'Home/Categories/SubCategories/Tests/Test', component: TestComponent },
    { path: 'Account/Manage', component: ManageComponent, children: manageRoutes },
    { path: 'Account/Register', component: RegisterComponent },
    { path: 'Account/Login', component: LoginComponent },
    { path: '**', redirectTo: '/' }
];

@NgModule({
    imports: [BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(appRoutes, { useHash: true }),
              NgbModule, ReactiveFormsModule, BrowserAnimationsModule],
    declarations: [AppComponent, HomeComponent, CategoriesComponent, SubCategoriesComponent, TestsComponent,
                   NavComponent, BreadcrumbComponent, ManualComponent, SlideshowComponent, TestComponent,
                   RegisterComponent, LoginComponent, ManageComponent, ManageNavComponent, AccountIndexComponent,
                   AccountPersonalInfoComponent, AccountChangePasswordComponent, AccountStatisticsComponent,
                   AccountRatingComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }