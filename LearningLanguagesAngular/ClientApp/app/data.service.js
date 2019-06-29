var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.homeUrl = "/Home/Index";
        this.categoriesUrl = "/Home/Categories";
        this.subCategoriesUrl = "/Home/Categories/SubCategories";
        this.testsUrl = "/Home/Categories/SubCategories/Tests";
        this.manualUrl = "/Home/Categories/SubCategories/Tests/Manual";
        this.testUrl = "/Home/Categories/SubCategories/Tests/Test";
        this.accountIndexUrl = "/Account/Manage/Index";
        this.accountPersonalInfoUrl = "/Account/Manage/PersonalInfo";
        this.accountChangePasswordUrl = "/Account/Manage/ChangePassword";
        this.accountStatisticsUrl = "/Account/Manage/Statistics";
        this.accountRatingUrl = "/Account/Manage/Rating";
        this.registerUrl = "/Account/Register";
        this.loginUrl = "/Account/Login";
        this.usersInfoUrl = "/Account/UsersInfo";
        this.logoutUrl = "/Account/Logout";
    }
    DataService.prototype.getCategories = function () {
        return this.http.get(this.categoriesUrl);
    };
    DataService.prototype.setSession = function () {
        return this.http.get(this.homeUrl, { responseType: 'text' });
    };
    DataService.prototype.getSubCategories = function (id) {
        return this.http.get(this.subCategoriesUrl + '?id=' + id);
    };
    DataService.prototype.getTests = function (id) {
        return this.http.get(this.testsUrl + '?id=' + id);
    };
    DataService.prototype.getWords = function (id) {
        return this.http.get(this.manualUrl + '?id=' + id);
    };
    DataService.prototype.setResultTest = function (data) {
        return this.http.post(this.testUrl, data);
    };
    DataService.prototype.getSettings = function () {
        return this.http.get(this.accountIndexUrl);
    };
    DataService.prototype.setSettings = function (settings) {
        return this.http.post(this.accountIndexUrl, settings);
    };
    DataService.prototype.getPersonalInfo = function () {
        return this.http.get(this.accountPersonalInfoUrl);
    };
    DataService.prototype.setPersonalInfo = function (data) {
        return this.http.post(this.accountPersonalInfoUrl, data);
    };
    DataService.prototype.setPassword = function (data) {
        return this.http.post(this.accountChangePasswordUrl, data);
    };
    DataService.prototype.getStatistics = function () {
        return this.http.get(this.accountStatisticsUrl);
    };
    DataService.prototype.getRating = function () {
        return this.http.get(this.accountRatingUrl);
    };
    DataService.prototype.register = function (user) {
        return this.http.post(this.registerUrl, user);
    };
    DataService.prototype.loginGet = function (returnUrl) {
        return this.http.get(this.loginUrl + '?returnUrl=' + returnUrl);
    };
    DataService.prototype.loginPost = function (user) {
        return this.http.post(this.loginUrl, user);
    };
    DataService.prototype.getUsersInfo = function () {
        return this.http.get(this.usersInfoUrl);
    };
    DataService.prototype.logout = function () {
        return this.http.get(this.logoutUrl);
    };
    DataService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], DataService);
    return DataService;
}());
export { DataService };
//# sourceMappingURL=data.service.js.map