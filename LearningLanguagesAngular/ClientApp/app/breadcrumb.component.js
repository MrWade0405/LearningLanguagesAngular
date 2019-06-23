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
import { Router, ActivatedRoute } from '@angular/router';
var TestsComponent = /** @class */ (function () {
    function TestsComponent(router, activeRoute) {
        this.router = router;
    }
    TestsComponent.prototype.ngOnInit = function () {
        this.setBreadcrumb();
    };
    TestsComponent.prototype.setBreadcrumb = function () {
        var _this = this;
        this.router.events.subscribe(function (val) {
            _this.displayBreadcrumbList = [];
            if (location.pathname !== '') {
                _this.route = location.pathname;
                _this.masterBreadcrumbList = _this.route.split('/');
                _this.masterBreadcrumbList = _this.masterBreadcrumbList.slice(1, _this.masterBreadcrumbList.length);
                for (var i = 0; i < _this.masterBreadcrumbList.length; i++) {
                    if (i !== 0) {
                        _this.initialUrl = _this.displayBreadcrumbList[i - 1];
                    }
                    else {
                        _this.initialUrl = '/';
                    }
                    var breadCrumbObj = {
                        name: _this.masterBreadcrumbList[i],
                        url: _this.initialUrl + _this.masterBreadcrumbList[i],
                        id: i
                    };
                    _this.displayBreadcrumbList.push(breadCrumbObj);
                }
            }
            else {
                _this.route = 'Home';
            }
        });
    };
    TestsComponent = __decorate([
        Component({
            selector: 'breadcrumb',
            templateUrl: './breadcrumb.component.html'
        }),
        __metadata("design:paramtypes", [Router, ActivatedRoute])
    ], TestsComponent);
    return TestsComponent;
}());
export { TestsComponent };
//# sourceMappingURL=breadcrumb.component.js.map