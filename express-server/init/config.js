"use strict";
var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');
var authenticator_1 = require('./authenticator');
var passport = require('passport');
var Config = (function () {
    function Config(app) {
        var _this = this;
        this.app = app;
        console.log("Config constructor");
        var port = process.env.PORT || 3000;
        var authenticator = new authenticator_1.Authenticator();
        this.server = app.listen(port, function () {
            var host = _this.server.address().address;
            var port = _this.server.address().port;
            console.log('This express app is listening on port:' + port);
        });
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(bodyParser.json());
        this.app.use(express.static(path.join(__dirname, "dist-server")));
        passport.use(authenticator.GoogleStrategy);
        app.use(passport.initialize());
        passport.use(authenticator.BearerStrategy);
    }
    return Config;
}());
exports.Config = Config;
//# sourceMappingURL=config.js.map