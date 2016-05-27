"use strict";
var express = require('express');
var routes_1 = require('./init/routes');
var config_1 = require('./init/config');
var BootstrapServer = (function () {
    function BootstrapServer() {
        console.log("Bootstrapped");
        this.app = express();
        this.config(this.app);
        this.routes(this.app);
    }
    BootstrapServer.prototype.config = function (app) {
        new config_1.Config(app);
    };
    BootstrapServer.prototype.routes = function (app) {
        new routes_1.Routes(app);
    };
    return BootstrapServer;
}());
exports.BootstrapServer = BootstrapServer;
new BootstrapServer();
