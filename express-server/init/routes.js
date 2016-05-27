"use strict";
var express = require('express');
var passport = require('passport');
var Routes = (function () {
    function Routes(app) {
        this.app = app;
        console.log("Route constructor");
        var router = express.Router();
        router.get('/', function (req, res) {
            res.send('im the home page!');
        });
        router.get('/about', function (req, res) {
            res.send('im the about page!');
        });
        app.get('/auth/google', passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }));
        app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/login' }), function (req, res) {
            res.redirect('/');
        });
        app.use('/', router);
    }
    return Routes;
}());
exports.Routes = Routes;
