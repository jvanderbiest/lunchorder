"use strict";
var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');
var authorization_1 = require('./authorization');
var passport = require('passport');
var Config = (function () {
    function Config(app) {
        var _this = this;
        this.app = app;
        console.log("Config constructor");
        var port = process.env.PORT || 3000;
        this.server = app.listen(port, function () {
            var host = _this.server.address().address;
            var port = _this.server.address().port;
            console.log('This express app is listening on port:' + port);
        });
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(bodyParser.json());
        this.app.use(express.static(path.join(__dirname, "dist-server")));
        passport.use(new authorization_1.Authorization().GoogleStrategy);
    }
    return Config;
}());
exports.Config = Config;
