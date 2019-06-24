import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DTO } from './DTO';

@Injectable()
export class DataService {

    private homeUrl = "/Home/Index";
    private categoriesUrl = "/Home/Categories";
    private subCategoriesUrl = "/Home/Categories/SubCategories";
    private testsUrl = "/Home/Categories/SubCategories/Tests";
    private manualUrl = "/Home/Categories/SubCategories/Tests/Manual";

    constructor(private http: HttpClient) {
    }

    getCategories() {
        return this.http.get(this.categoriesUrl);
    }

    setSession() {
        return this.http.get(this.homeUrl, { responseType: 'text' });
    }

    getSubCategories(id: number) {
        return this.http.get(this.subCategoriesUrl + '?id=' + id);
    }

    getTests(id: number) {
        return this.http.get(this.testsUrl + '?id=' + id);
    }

    getWords(id: number) {
        return this.http.get(this.manualUrl + '?id=' + id);
    }
}