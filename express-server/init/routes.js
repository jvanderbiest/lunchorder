"use strict";
var express = require('express');
var Routes = (function () {
    function Routes(app) {
        this.app = app;
        console.log("Route constructor");
        var router = express.Router();
        app.use('/', router);
    }
    return Routes;
}());
exports.Routes = Routes;
//# sourceMappingURL=routes.js.map