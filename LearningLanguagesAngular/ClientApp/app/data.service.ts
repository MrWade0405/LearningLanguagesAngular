import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DTO } from './DTO';

@Injectable()
export class DataService {

    private url = "/Home/Categories";

    constructor(private http: HttpClient) {
    }

    getCategories() {
        return this.http.get(this.url);
    }
}