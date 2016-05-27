"use strict";
var testing_1 = require('@angular/core/testing');
var lunch_catalog_component_1 = require('../app/lunch-catalog.component');
testing_1.beforeEachProviders(function () { return [lunch_catalog_component_1.LunchCatalogAppComponent]; });
testing_1.describe('App: LunchCatalog', function () {
    testing_1.it('should create the app', testing_1.inject([lunch_catalog_component_1.LunchCatalogAppComponent], function (app) {
        testing_1.expect(app).toBeTruthy();
    }));
    testing_1.it('should have as title \'lunch-catalog works!\'', testing_1.inject([lunch_catalog_component_1.LunchCatalogAppComponent], function (app) {
        testing_1.expect(app.title).toEqual('lunch-catalog works!');
    }));
});
