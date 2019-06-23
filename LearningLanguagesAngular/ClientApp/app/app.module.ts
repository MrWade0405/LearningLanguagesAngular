import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavComponent } from './nav.component';
import { HomeComponent } from './home.component';
import { CategoriesComponent } from './categories.component';
import { SubCategoriesComponent } from './subCategories.component';
import { TestsComponent } from './tests.component';
import { BreadcrumbComponent } from './breadcrumb.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'Home/Categories', component: CategoriesComponent },
    { path: 'Home/Categories/SubCategories', component: SubCategoriesComponent },
    { path: 'Home/Categories/SubCategories/Tests', component: TestsComponent },
    { path: '**', redirectTo: '/' }
];

@NgModule({
    imports: [BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(appRoutes, { useHash: true })],
    declarations: [AppComponent, HomeComponent, CategoriesComponent, SubCategoriesComponent, TestsComponent, NavComponent, BreadcrumbComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }