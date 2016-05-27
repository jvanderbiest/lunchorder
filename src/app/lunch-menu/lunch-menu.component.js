"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var article_1 = require('../domain/lunch/article');
var LunchMenuComponent = (function () {
    function LunchMenuComponent() {
    }
    LunchMenuComponent.prototype.ngOnInit = function () {
        this.lunchItems = [new article_1.Article("Martino", 3.2), new article_1.Article("Kip curry", 2)];
    };
    LunchMenuComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'lunch-menu',
            templateUrl: 'lunch-menu.component.html',
            styleUrls: ['lunch-menu.component.css']
        })
    ], LunchMenuComponent);
    return LunchMenuComponent;
}());
exports.LunchMenuComponent = LunchMenuComponent;
