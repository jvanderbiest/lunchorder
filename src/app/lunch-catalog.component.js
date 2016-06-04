"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var lunch_menu_component_1 = require('./lunch-menu/lunch-menu.component');
var LunchCatalogAppComponent = (function () {
    function LunchCatalogAppComponent() {
        this.title = 'lunch-catalog works!';
    }
    LunchCatalogAppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'lunch-catalog-app',
            templateUrl: 'lunch-catalog.component.html',
            styleUrls: ['lunch-catalog.component.css'],
            directives: [lunch_menu_component_1.LunchMenuComponent]
        })
    ], LunchCatalogAppComponent);
    return LunchCatalogAppComponent;
}());
exports.LunchCatalogAppComponent = LunchCatalogAppComponent;
//# sourceMappingURL=lunch-catalog.component.js.map