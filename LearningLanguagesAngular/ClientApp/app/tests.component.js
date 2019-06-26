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
var TestsComponent = /** @class */ (function () {
    function TestsComponent(dataService, activeRoute) {
        var _this = this;
        this.dataService = dataService;
        this.subscription = activeRoute.queryParams.subscribe(function (queryParam) {
            _this.idSubCat = queryParam['id'];
        });
    }
    TestsComponent.prototype.ngOnInit = function () {
        this.loadTests();
    };
    TestsComponent.prototype.loadTests = function () {
        var _this = this;
        this.dataService.getTests(this.idSubCat)
            .subscribe(function (data) { return _this.tests = data; });
    };
    var _a;
    TestsComponent = __decorate([
        Component({
            selector: 'tests',
            templateUrl: './tests.component.html',
            providers: [DataService],
            styleUrls: ['./catTestsSubCat.component.css']
        }),
        __metadata("design:paramtypes", [DataService, typeof (_a = typeof ActivatedRoute !== "undefined" && ActivatedRoute) === "function" ? _a : Object])
    ], TestsComponent);
    return TestsComponent;
}());
export { TestsComponent };
//# sourceMappingURL=tests.component.js.map