import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'Home/Categories', component: CategoriesComponent },
    { path: 'Home/Categories/SubCategories', component: SubCategoriesComponent },
    { path: 'Home/Categories/SubCategories/Tests', component: TestsComponent },
    { path: 'Home/Categories/SubCategories/Tests/Manual', component: ManualComponent },
    { path: 'Home/Categories/SubCategories/Tests/Slideshow', component: SlideshowComponent },
    { path: 'Home/Categories/SubCategories/Tests/Test', component: TestComponent },
    { path: '**', redirectTo: '/' }
];

@NgModule({
    imports: [BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(appRoutes, { useHash: true }), NgbModule],
    declarations: [AppComponent, HomeComponent, CategoriesComponent, SubCategoriesComponent, TestsComponent,
                   NavComponent, BreadcrumbComponent, ManualComponent, SlideshowComponent, TestComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }