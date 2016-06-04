"use strict";
var Settings = require('../config/environment.dev');
var passport_google_oauth_1 = require('passport-google-oauth');
var user_1 = require('../domain/user/user');
var BeareStrategy = require('passport-http-bearer');
var cacheService_1 = require('../services/cacheService');
var Authenticator = (function () {
    function Authenticator() {
        var _this = this;
        console.log("Authenticator constructor");
        this.cacheService = new cacheService_1.CacheService();
        this.BearerStrategy = new BeareStrategy.Strategy(function (token, done) {
            console.log("BearerStrategy called with token: " + token);
            console.log("user: " + _this.User);
            if (!_this.User) {
                return done(null, false);
            }
            if (_this.User) {
                if (_this.User.id == token) {
                    return done(null, _this.User);
                }
                else {
                    return done(null, false);
                }
            }
        });
        this.GoogleStrategy = new passport_google_oauth_1.OAuth2Strategy({
            clientID: Settings.environment.authSettings.google.clientId,
            clientSecret: Settings.environment.authSettings.google.clientSecret,
            callbackURL: Settings.environment.authSettings.google.callbackUrl
        }, function (accessToken, refreshToken, profile, done) {
            console.log("Google has authentiated...");
            var profileObj = _this.extractProfile(profile);
            _this.cacheService.set(accessToken, profileObj, 360000, function () { });
            _this.User = new user_1.User(accessToken, "bla");
            console.log("saved user: " + _this.User);
            profileObj.access_token = accessToken;
            return done(null, profileObj);
        });
    }
    Authenticator.prototype.extractProfile = function (profile) {
        console.log(profile.photos);
        var imageUrl = '';
        if (profile.photos && profile.photos.length) {
            imageUrl = profile.photos[0].value;
        }
        console.log("User logged in: " + profile.displayName);
        return profile;
    };
    return Authenticator;
}());
exports.Authenticator = Authenticator;
//# sourceMappingURL=authenticator.js.map